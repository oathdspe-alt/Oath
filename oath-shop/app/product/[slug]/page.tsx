import { client } from "@/lib/sanity";

export default async function ProductPage({ params }: any) {
  try {
    console.log("PARAM:", params.slug);

    const data = await client.fetch(`*[_type == "product"][0]`);

    return (
      <div style={{ color: "white", background: "black", minHeight: "100vh", padding: "20px" }}>
        <h1>DEBUG</h1>

        <p>Slug recibido: {params.slug}</p>

        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    );
  } catch (error) {
    return (
      <div style={{ color: "white", background: "black", minHeight: "100vh", padding: "20px" }}>
        ERROR TOTAL
      </div>
    );
  }
}