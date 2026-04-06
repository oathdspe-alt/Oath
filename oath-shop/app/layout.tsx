import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export default function RootLayout({ children }: any) {
  return (
    <html lang="en">
      <body className={inter.className}>

        {/* 🔥 LOGO GLOBAL */}
        <header className="text-center py-10">
          <h1 className="text-4xl tracking-[0.5em] font-light">
            OATH
          </h1>
        </header>

        {children}

      </body>
    </html>
  );
}