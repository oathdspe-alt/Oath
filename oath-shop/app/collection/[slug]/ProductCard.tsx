"use client";

import { useState } from "react";
import { urlFor } from "@/lib/sanity";

export default function ProductCard({ product }: any) {
  const images = product.images || [];
  const [index, setIndex] = useState(0);

  if (images.length === 0) return null;

  const nextImage = () => {
    setIndex((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
  };

  const prevImage = () => {
    setIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="group">

      {/* 🔥 IMAGEN */}
      <div className="relative overflow-hidden">

        <img
          src={urlFor(images[index]).url()}
          className="w-full h-[400px] object-cover transition duration-500 group-hover:scale-105"
        />

        {/* 🔥 FLECHAS */}
        {images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-1 text-white"
            >
              ◀
            </button>

            <button
              onClick={nextImage}
              className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 px-3 py-1 text-white"
            >
              ▶
            </button>
          </>
        )}
      </div>

      {/* 🔥 INFO */}
      <div className="mt-5 text-center">

        {/* 👉 CLICK PARA IR A PRODUCTO */}
        <a href={`/product/${product._id}`}>
          <h2 className="text-sm tracking-[0.2em] hover:opacity-60 transition">
            {product.name}
          </h2>
        </a>

        <p className="text-gray-500 text-sm">S/ {product.price}</p>

        <a
          href={`https://wa.me/51993764834?text=Hola quiero ${product.name}`}
          target="_blank"
          className="inline-block mt-3 text-xs tracking-[0.3em] border-b border-white hover:opacity-60 transition"
        >
          COMPRAR
        </a>

      </div>
    </div>
  );
}