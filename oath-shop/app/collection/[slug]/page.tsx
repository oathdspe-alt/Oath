import { client, urlFor } from "@/lib/sanity";

export default async function CollectionPage({ params }: any) {
  const slug = params.slug;

  const products = await client.fetch(
    `*[_type == "product" && collection->slug.current == $slug]{
      _id,
      name,
      price,
      images
    }`,
    { slug }
  );

  return (
    <main className="bg-[#050505] text-white min-h-screen p-10">
      <h1 className="text-3xl mb-10 uppercase tracking-widest">{slug}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p: any) => (
          <div key={p._id} className="border border-white/10 p-4">

            {p.images && p.images[0] && (
              <img
                src={urlFor(p.images[0]).url()}
                className="w-full h-[300px] object-cover"
              />
            )}

            <h2 className="text-xl mt-4">{p.name}</h2>
            <p className="text-gray-400">S/ {p.price}</p>

            <a
              href={`https://wa.me/51993764834?text=Hola quiero ${p.name}`}
              target="_blank"
              className="block mt-4 bg-white text-black text-center py-2 hover:opacity-80 transition"
            >
              Comprar
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}