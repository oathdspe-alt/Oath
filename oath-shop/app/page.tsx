import { client, urlFor } from "../lib/sanity";

async function getData() {
  const collections = await client.fetch(`*[_type == "collection"]{
    _id,
    title,
    slug,
    image
  }`);

  return { collections };
}

export default async function Home() {
  const { collections } = await getData();

  return (
    <main className="bg-[#050505] text-white min-h-screen p-10">
      <h1 className="text-5xl mb-10 tracking-widest">OATH</h1>

      <div className="grid grid-cols-2 gap-6">
        {collections.map((c: any) => (
          <a href={`/collection/${c.slug?.current}`} key={c._id}>
            <div className="group">
              <img
                src={urlFor(c.image).url()}
                className="w-full h-[250px] object-cover grayscale group-hover:grayscale-0 transition duration-500"
              />
              <h2 className="mt-2 uppercase tracking-widest">{c.title}</h2>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
}