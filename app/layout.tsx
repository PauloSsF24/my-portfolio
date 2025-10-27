import "./globals.css";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Portfólio - Paulo Sérgio",
  description: "Meu portfólio profissional feito com Next.js e TailwindCSS",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <Navbar />
        <main className="pt-20">{children}</main>
      </body>
    </html>
  );
}
