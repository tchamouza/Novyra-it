
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "NOVYRA IT | Réseaux, Systèmes et Cybersécurité",
  description:
    "NOVYRA IT accompagne les particuliers et les entreprises dans les réseaux informatiques, l'administration systèmes, la cybersécurité, la vidéosurveillance et la maintenance informatique.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="min-h-screen flex flex-col bg-[#07111f] font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
