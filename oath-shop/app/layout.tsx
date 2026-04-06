import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>

        {/* 🔥 HEADER */}
        <div className="text-center py-6 text-3xl tracking-[10px] font-light">
          OATH
        </div>

        {children}

        {/* 🔥 BOTÓN WHATSAPP */}
        <a
          href="https://wa.me/51993764834"
          target="_blank"
          className="fixed bottom-5 left-5 bg-green-500 text-white px-4 py-3 rounded-full shadow-lg hover:scale-110 transition"
        >
          💬
        </a>

      </body>
    </html>
  );
}