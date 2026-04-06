"use client";

import { useEffect, useState } from "react";
import { client, urlFor } from "@/lib/sanity";

export default function ProductPage({ params }: any) {
  const [product, setProduct] = useState<any>(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    async function fetchProduct() {
      const data = await client.fetch(
        `*[_type == "product" && _id == $id][0]{
          _id,
          name,
          price,
          description,
          images
        }`,
        { id: params.slug }
      );

      setProduct(data);
    }

    fetchProduct();
  }, [params.slug]);

  // 🔥 CARGANDO
  if (product === null) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Cargando...
      </div>
    );
  }

  // 🔥 NO EXISTE
  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Producto no encontrado
      </div>
    );
  }

  const images = product.images || [];

  return (
    <main className="bg-black text-white min-h-screen px-6 md:px-20 py-10">

      <h1 className="text-4xl text-center mb-16 tracking-[0.5em]">
        OATH
      </h1>

      <div className="grid md:grid-cols-2 gap-16">

        <div>
          {images[0] && (
            <img
              src={urlFor(images[index]).url()}
              className="w-full h-[500px] object-cover"
            />
          )}

          <div className="flex gap-3 mt-4">
            {images.map((img: any, i: number) => (
              <img
                key={i}
                src={urlFor(img).url()}
                onClick={() => setIndex(i)}
                className="w-20 h-20 object-cover cursor-pointer"
              />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center">

          <h2 className="text-2xl mb-4">{product.name}</h2>

          <p className="text-gray-400 mb-6">
            S/ {product.price}
          </p>

          <p className="text-gray-500 mb-10">
            {product.description}
          </p>

          <a
            href={`https://wa.me/51993764834?text=Hola quiero ${product.name}`}
            target="_blank"
            className="border border-white text-center py-3"
          >
            COMPRAR
          </a>

        </div>

      </div>
    </main>
  );
}