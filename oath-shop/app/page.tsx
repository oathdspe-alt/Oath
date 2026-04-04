import { client, urlFor } from "../lib/sanity";

async function getProducts() {
  return await client.fetch(`*[_type == "product"]{
    _id,
    name,
    price,
    image
  }`);
}

export default async function Home() {
  const products = await getProducts();

  return (
    <main className="bg-black text-white min-h-screen p-10">
      <h1 className="text-4xl font-bold mb-10">OATH</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p: any) => (
          <div key={p._id} className="border border-white/10 p-4">
            <img
              src={urlFor(p.image).url()}
              alt={p.name}
              className="w-full h-[300px] object-cover"
            />

            <h2 className="text-xl mt-4">{p.name}</h2>
            <p className="text-gray-400">S/ {p.price}</p>

            <a
              href={`https://wa.me/51993?text=Hola quiero ${p.name}`}
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