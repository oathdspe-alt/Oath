import { client } from "@/lib/sanity";

export default async function Home() {
  const collections = await client.fetch(`*[_type == "collection"]`);

  return (
    <main className="p-10">

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {collections.map((col: any) => (
          <a
            key={col._id}
            href={`/collection/${col.slug?.current}`}
            className="card p-10 text-center hover:scale-105 transition"
          >
            <h2 className="text-xl tracking-wide">
              {col.title}
            </h2>
          </a>
        ))}

      </div>

    </main>
  );
}