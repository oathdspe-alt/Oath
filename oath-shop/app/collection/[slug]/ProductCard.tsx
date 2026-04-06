"use client";

import { useState } from "react";
import { urlFor } from "@/lib/sanity";

export default function ProductCard({ product }: any) {
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

      <div className="relative overflow-hidden">

        {images.length > 0 && (
          <img
            src={urlFor(images[index]).url()}
            className="w-full h-[400px] object-cover transition duration-700 group-hover:scale-110"
          />
        )}

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

      <div className="mt-5 text-center">
        <h2 className="text-sm tracking-[0.2em]">{product.name}</h2>
        <p className="text-gray-500 text-sm">S/ {product.price}</p>

        <a
          href={`https://wa.me/51993764834?text=Hola quiero ${product.name}`}
          target="_blank"
          className="inline-block mt-3 text-xs tracking-[0.3em] 
          border-b border-white hover:opacity-60 transition"
        >
          COMPRAR
        </a>
      </div>
    </div>
  );
}