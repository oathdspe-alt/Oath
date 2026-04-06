import { client } from "@/lib/sanity";
import ProductCard from "./ProductCard";

export default async function CollectionPage({ params }: any) {
  const { slug } = await params;

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
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-10">

      <h1 className="text-4xl text-center mb-16 tracking-[0.5em]">
        OATH
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>

    </main>
  );
}