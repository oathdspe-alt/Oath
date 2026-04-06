"use client";

import { useState } from "react";
import { urlFor } from "@/lib/sanity";

export default function ProductCard({ product }: any) {
  const images = product.images || [];

  const [index, setIndex] = useState(0);

  if (!images || images.length === 0) {
    return <div>No hay imagen</div>;
  }

  const next = () => {
    setIndex((prev) => {
      if (prev + 1 >= images.length) return 0;
      return prev + 1;
    });
  };

  const prev = () => {
    setIndex((prev) => {
      if (prev - 1 < 0) return images.length - 1;
      return prev - 1;
    });
  };

  return (
    <div className="text-center">

      {/* 🔥 IMAGEN */}
      <div className="relative">
        <img
          src={urlFor(images[index]).url()}
          className="w-full h-[400px] object-cover"
        />

        {/* 🔥 FLECHAS */}
        {images.length > 1 && (
          <>
            <button
              onClick={prev}
              className="absolute left-2 top-1/2 bg-black/70 text-white px-3 py-1"
            >
              ◀
            </button>

            <button
              onClick={next}
              className="absolute right-2 top-1/2 bg-black/70 text-white px-3 py-1"
            >
              ▶
            </button>
          </>
        )}
      </div>

      {/* 🔥 INFO */}
      <h2 className="mt-3">{product.name}</h2>
      <p>S/ {product.price}</p>

    </div>
  );
}