import { client, urlFor } from "../lib/sanity";

async function getData() {
  const products = await client.fetch(`*[_type == "product"]{
    _id,
    name,
    price,
    image,
    "collectionName": collection->title
  }`);

  const collections = await client.fetch(`*[_type == "collection"]{
    _id,
    title,
    image
  }`);

  return { products, collections };
}

export default async function Home() {
  const { products, collections } = await getData();

  return (
    <main className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10">OATH</h1>

      {/* COLECCIONES */}
      <h2 className="text-2xl mb-6">Colecciones</h2>
      <div className="grid grid-cols-2 gap-6 mb-12">
        {collections.map((c: any) => (
          <div key={c._id}>
            <img
              src={urlFor(c.image).url()}
              className="w-full h-[200px] object-cover"
            />
            <h3 className="mt-2">{c.title}</h3>
          </div>
        ))}
      </div>

      {/* PRODUCTOS */}
      <h2 className="text-2xl mb-6">Productos</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p: any) => (
          <div key={p._id} className="border border-white/10 p-4">
            <img
              src={urlFor(p.image).url()}
              className="w-full h-[300px] object-cover"
            />
            <h2 className="text-xl mt-4">{p.name}</h2>
            <p className="text-gray-400">S/ {p.price}</p>
            <p className="text-sm text-gray-500">{p.collectionName}</p>

            <a
              href={`https://wa.me/51993764834?text=Hola quiero ${p.name}`}
              target="_blank"
              className="block mt-4 bg-white text-black text-center py-2"
            >
              Comprar
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}