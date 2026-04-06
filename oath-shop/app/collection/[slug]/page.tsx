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
    <main className="bg-black text-white min-h-screen p-10">
      <h1 className="text-3xl mb-10">{slug}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p: any) => (
          <div key={p._id}>
            {p.images && (
              <img src={urlFor(p.images[0]).url()} />
            )}

            <h2>{p.name}</h2>
            <p>S/ {p.price}</p>

            <a href={`https://wa.me/51993764834?text=Hola quiero ${p.name}`}>
              Comprar
            </a>
          </div>
        ))}
      </div>
    </main>
  );
}