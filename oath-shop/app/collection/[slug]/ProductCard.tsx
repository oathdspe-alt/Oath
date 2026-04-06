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
    setIndex((prev) => (prev + 1 >= images.length ? 0 : prev + 1));
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 < 0 ? images.length - 1 : prev - 1));
  };

  return (
    <div className="text-center">

      {/* 🔥 CLICK EN TODA LA TARJETA */}
      <a href={`/product/${product.slug?.current}`}>

        <div className="relative">
          <img
            src={urlFor(images[index]).url()}
            className="w-full h-[400px] object-cover"
          />

          {images.length > 1 && (
            <>
              <button
                onClick={(e) => {
                  e.preventDefault();
                  prev();
                }}
                className="absolute left-2 top-1/2 bg-black/70 text-white px-3 py-1"
              >
                ◀
              </button>

              <button
                onClick={(e) => {
                  e.preventDefault();
                  next();
                }}
                className="absolute right-2 top-1/2 bg-black/70 text-white px-3 py-1"
              >
                ▶
              </button>
            </>
          )}
        </div>

      </a>

      {/* INFO */}
      <h2 className="mt-3">{product.name}</h2>
      <p>S/ {product.price}</p>

      {/* 🔥 BOTÓN COMPRAR */}
      <a
        href={`https://wa.me/51993764834?text=Hola quiero ${product.name}`}
        target="_blank"
        className="inline-block mt-3 bg-white text-black px-4 py-2"
      >
        Comprar
      </a>

    </div>
  );
}