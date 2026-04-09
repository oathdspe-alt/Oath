"use client";

import { useState } from "react";
import { urlFor } from "@/lib/sanity";

export default function ProductCard({ product }: any) {
  const images = product.images || [];
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="card p-4 text-center fade-in hover:scale-105 hover:shadow-2xl">

      <div className="relative">
        <img
          key={index}
          src={urlFor(images[index]).url()}
          className="w-full h-[400px] object-cover rounded-xl transition-opacity duration-500 opacity-0 animate-img"
        />

        {images.length > 1 && (
          <>
            <button onClick={prev} className="absolute left-2 top-1/2 bg-black/50 px-2">
              ◀
            </button>
            <button onClick={next} className="absolute right-2 top-1/2 bg-black/50 px-2">
              ▶
            </button>
          </>
        )}
      </div>

      <h2 className="mt-4 text-lg tracking-wide">{product.name}</h2>
      <p className="text-gray-400">S/ {product.price}</p>

      <a
        href={`https://wa.me/51993764834?text=Hola quiero ${product.name}`}
        target="_blank"
        className="inline-block mt-3 border border-white px-4 py-2 hover:bg-white hover:text-black transition duration-300 hover:scale-105"
      >
        Comprar
      </a>

    </div>
  );
}