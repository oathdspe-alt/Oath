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
    slug,
    image
  }`);

  return { products, collections };
}

export default async function Home() {
  const { products, collections } = await getData();

  return (
    <main className="bg-black text-white min-h-screen p-10">
      <h1 className="text-5xl font-bold mb-10 tracking-widest">OATH</h1>

      {/* COLECCIONES */}
      <h2 className="text-2xl mb-6">Colecciones</h2>
      <div className="grid grid-cols-2 gap-6 mb-12">
        {collections.map((c: any) => (
          <a href={`/collection/${c.slug?.current}`} key={c._id}>
            <div className="group">
              <img
                src={urlFor(c.image).url()}
                className="w-full h-[250px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <h3 className="mt-2 text-lg uppercase">{c.title}</h3>
            </div>
          </a>
        ))}
      </div>