import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "A-FUND — Investissement Agricole Participatif",
  description: "La première bourse agricole participative de Côte d'Ivoire. Investissez dans des campagnes certifiées, 15% à 25% de ROI.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <Navbar />
        <main className="pt-16">{children}</main>
      </body>
    </html>
  );
}
