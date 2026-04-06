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

        {/* 🔥 WHATSAPP PRO */}
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