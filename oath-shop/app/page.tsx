import { client, urlFor } from "@/lib/sanity";

export default async function Home() {
  const collections = await client.fetch(`*[_type == "collection"]`);

  return (
    <main className="p-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {collections.map((col: any) => (
          <a
            key={col._id}
            href={`/collection/${col.slug?.current}`}
            className="relative group overflow-hidden rounded-xl fade-in"
          >

            {/* IMAGEN */}
            {col.image && (
              <img
                src={urlFor(col.image).url()}
                className="w-full h-[300px] object-cover group-hover:scale-110 transition duration-500"
              />
            )}

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
              <h2 className="text-2xl tracking-[5px]">
                {col.title}
              </h2>
            </div>

          </a>
        ))}

      </div>

    </main>
  );
}