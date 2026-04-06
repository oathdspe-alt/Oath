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
    <main className="bg-[#050505] text-white min-h-screen px-6 md:px-20 py-10">

      {/* 🔥 LOGO */}
      <h1 className="text-5xl text-center mb-16 tracking-[0.5em] font-light">
        OATH
      </h1>

      {/* 🔥 COLECCIÓN */}
      <h2 className="text-xl text-center mb-16 uppercase tracking-[0.3em] text-gray-500">
        {slug}
      </h2>

      {/* 🔥 GRID */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-14">
        {products.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </main>
  );
}

// 🔥 COMPONENTE PRO MAX
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
    <div className="group">

      {/* 🔥 IMAGEN CON ZOOM */}
      <div className="relative overflow-hidden">

        {images.length > 0 && (
          <img
            src={urlFor(images[index]).url()}
            className="w-full h-[400px] object-cover 
            transition duration-700 ease-in-out 
            group-hover:scale-110"
          />
        )}

        {/* 🔥 FLECHAS SOLO EN HOVER */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 
              opacity-0 group-hover:opacity-100 transition 
              bg-black/50 px-3 py-1"
            >
              ◀
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 
              opacity-0 group-hover:opacity-100 transition 
              bg-black/50 px-3 py-1"
            >
              ▶
            </button>
          </>
        )}
      </div>

      {/* 🔥 INFO */}
      <div className="mt-5 space-y-2 text-center">

        <h2 className="text-sm tracking-[0.2em]">
          {product.name}
        </h2>

        <p className="text-gray-500 text-sm">
          S/ {product.price}
        </p>

        {/* 🔥 BOTÓN PREMIUM */}
        <a
          href={`https://wa.me/51993764834?text=Hola quiero ${product.name}`}
          target="_blank"
          className="inline-block mt-3 text-xs tracking-[0.3em] 
          border-b border-white 
          hover:opacity-60 transition"
        >
          COMPRAR
        </a>
      </div>
    </div>
  );
}