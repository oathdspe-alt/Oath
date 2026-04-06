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
    <main className="bg-[#050505] text-white min-h-screen px-6 md:px-20 pb-20">

      <h2 className="text-xl text-center mb-16 uppercase tracking-[0.3em] text-gray-500">
        {slug}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {products.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>

    </main>
  );
}