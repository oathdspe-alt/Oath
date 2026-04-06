import { client, urlFor } from "@/lib/sanity";

export default async function ProductPage({ params }: any) {
  const product = await client.fetch(
    `*[_type == "product" && _id == $id][0]{
      _id,
      name,
      price,
      description,
      images
    }`,
    { id: params.slug }
  );

  if (!product) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Producto no encontrado
      </div>
    );
  }

  const images = product.images || [];

  return (
    <main className="bg-black text-white min-h-screen p-10">

      <h1 className="text-4xl text-center mb-10">OATH</h1>

      <div className="grid md:grid-cols-2 gap-10">

        {/* IMAGEN */}
        <div>
          <img
            src={urlFor(images[0]).url()}
            className="w-full h-[500px] object-cover"
          />
        </div>

        {/* INFO */}
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
            className="bg-white text-black px-4 py-2"
          >
            Comprar
          </a>

        </div>

      </div>
    </main>
  );
}