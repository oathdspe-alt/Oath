"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";

export default function ProductPage({ params }: any) {
  const [product, setProduct] = useState<any>(null);

  useEffect(() => {
    async function fetchProduct() {
      const data = await client.fetch(
        `*[_type == "product" && slug.current == $slug][0]{
          name,
          price,
          description,
          images
        }`,
        { slug: params.slug }
      );

      setProduct(data);
    }

    fetchProduct();
  }, [params.slug]);

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  return (
    <main className="bg-black text-white min-h-screen p-10">

      <h1 className="text-4xl text-center mb-10">OATH</h1>

      <h2 className="text-2xl text-center">{product.name}</h2>

      <p className="text-center text-gray-400">S/ {product.price}</p>

    </main>
  );
}