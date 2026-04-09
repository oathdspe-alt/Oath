import "./globals.css";

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body>

        {/* HEADER */}
        <div className="sticky top-0 z-50 backdrop-blur-md bg-black/40 border-b border-white/10">
          <div className="text-center py-5 text-3xl tracking-[12px] font-light animate-logo">
            OATH
          </div>
        </div>

        {/* 🔥 ANIMACIÓN DE PÁGINA */}
        <div key={Math.random()} className="page-transition">
          {children}
        </div>

        {/* WHATSAPP */}
        <a
          href="https://wa.me/51993764834"
          target="_blank"
          className="fixed bottom-5 right-5 w-14 h-14 bg-green-500 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            className="w-7 h-7"
          />
        </a>

      </body>
    </html>
  );
}