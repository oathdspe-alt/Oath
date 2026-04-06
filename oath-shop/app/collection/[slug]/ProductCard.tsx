"use client";

import { useState } from "react";
import { urlFor } from "@/lib/sanity";

export default function ProductCard({ product }: any) {
  const images = product.images || [];
  const [index, setIndex] = useState(0);

  if (!images.length) return null;

  return (
    <div className="group">

      <div className="relative">
        <img
          src={urlFor(images[index]).url()}
          className="w-full h-[400px] object-cover"
        />
      </div>

      <div className="mt-4 text-center">

        {/* 🔥 LINK CON SLUG */}
        <a href={`/product/${product.slug?.current}`}>
          <h2 className="text-sm tracking-widest">{product.name}</h2>
        </a>

        <p className="text-gray-400">S/ {product.price}</p>

      </div>
    </div>
  );
}