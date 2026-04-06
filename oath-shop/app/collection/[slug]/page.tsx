"use client";

import { useState } from "react";
import { client, urlFor } from "@/lib/sanity";

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
    <main className="bg-[#050505] text-white min-h-screen p-10">
      <h1 className="text-3xl mb-10 uppercase tracking-widest">{slug}</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {products.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </main>
  );
}

// 🔥 COMPONENTE CON SLIDER
function ProductCard({ product }: any) {
  const [index, setIndex] = useState(0);

  const images = product.images || [];

  const nextImage = () => {
    setIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="border border-white/10 p-4">

      {images.length > 0 && (
        <div className="relative">

          <img
            src={urlFor(images[index]).url()}
            className="w-full h-[300px] object-cover"
          />

          {/* BOTONES */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 py-1"
              >
                ◀
              </button>

              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 px-2 py-1"
              >
                ▶
              </button>
            </>
          )}
        </div>
      )}

      <h2 className="text-xl mt-4">{product.name}</h2>
      <p className="text-gray-400">S/ {product.price}</p>

      <a
        href={`https://wa.me/51993764834?text=Hola quiero ${product.name}`}
        target="_blank"
        className="block mt-4 bg-white text-black text-center py-2 hover:opacity-80 transition"
      >
        Comprar
      </a>
    </div>
  );
}