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

      {/* 🔥 LOGO OATH CENTRADO */}
      <h1 className="text-4xl text-center mb-12 tracking-[0.4em]">
        OATH
      </h1>

      {/* 🔥 NOMBRE DE COLECCIÓN */}
      <h2 className="text-2xl text-center mb-10 uppercase tracking-widest text-gray-400">
        {slug}
      </h2>

      {/* 🔥 PRODUCTOS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {products.map((p: any) => (
          <ProductCard key={p._id} product={p} />
        ))}
      </div>
    </main>
  );
}

// 🔥 COMPONENTE PRODUCTO PRO
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
    <div className="border border-white/10 p-4 hover:border-white/30 transition duration-500">

      {images.length > 0 && (
        <div className="relative overflow-hidden">

          {/* IMAGEN */}
          <img
            src={urlFor(images[index]).url()}
            className="w-full h-[320px] object-cover"
          />

          {/* FLECHAS */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-1 text-sm"
              >
                ◀
              </button>

              <button
                onClick={nextImage}
                className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-1 text-sm"
              >
                ▶
              </button>
            </>
          )}
        </div>
      )}

      {/* INFO */}
      <h2 className="text-lg mt-4 tracking-wider">{product.name}</h2>
      <p className="text-gray-400">S/ {product.price}</p>

      {/* BOTÓN */}
      <a
        href={`https://wa.me/51993764834?text=Hola quiero ${product.name}`}
        target="_blank"
        className="block mt-4 border border-white text-center py-2 hover:bg-white hover:text-black transition duration-300"
      >
        Comprar
      </a>
    </div>
  );
}