"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Sprout, Home, Leaf, HelpCircle, BarChart2 } from "lucide-react";

const links = [
  { href: "/", label: "Accueil", icon: Home },
  { href: "/campagnes", label: "Campagnes", icon: Leaf },
  { href: "/comment-ca-marche", label: "Comment ça marche", icon: HelpCircle },
  { href: "/dashboard", label: "Portfolio", icon: BarChart2 },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* ── DESKTOP navbar (top) ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2 font-bold text-xl text-green-700">
              <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                <Sprout className="w-5 h-5 text-white" />
              </div>
              <span className="font-display">A-FUND</span>
            </Link>

            <div className="flex items-center gap-1">
              {links.map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                    pathname === l.href
                      ? "bg-green-50 text-green-700"
                      : "text-gray-600 hover:text-green-700 hover:bg-green-50"
                  }`}
                >
                  {l.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button className="text-sm text-gray-600 hover:text-green-700 font-medium px-3 py-2">
                Connexion
              </button>
              <Link
                href="/campagnes"
                className="bg-green-600 hover:bg-green-700 text-white text-sm font-semibold px-4 py-2 rounded-lg transition-colors"
              >
                Investir maintenant
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* ── MOBILE top bar ── */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white border-b border-gray-100 shadow-sm md:hidden">
        <div className="flex items-center justify-between px-4 h-14">
          <Link href="/" className="flex items-center gap-2 font-bold text-lg text-green-700">
            <div className="w-7 h-7 bg-green-600 rounded-lg flex items-center justify-center">
              <Sprout className="w-4 h-4 text-white" />
            </div>
            <span className="font-display">A-FUND</span>
          </Link>
          <Link
            href="/campagnes"
            className="bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-lg"
          >
            Investir
          </Link>
        </div>
      </nav>

      {/* ── MOBILE bottom tab bar ── */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t border-gray-100 shadow-[0_-2px_12px_rgba(0,0,0,0.06)]">
        <div className="grid grid-cols-4 h-16">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`flex flex-col items-center justify-center gap-1 transition-colors ${
                  active ? "text-green-600" : "text-gray-400 hover:text-gray-600"
                }`}
              >
                <div className={`p-1.5 rounded-xl transition-colors ${active ? "bg-green-50" : ""}`}>
                  <l.icon className={`w-5 h-5 ${active ? "stroke-[2.5px]" : ""}`} />
                </div>
                <span className={`text-[10px] font-medium leading-none ${active ? "text-green-600" : "text-gray-400"}`}>
                  {l.label === "Comment ça marche" ? "Comment ?" : l.label}
                </span>
              </Link>
            );
          })}
        </div>
      </div>

      {/* ── MOBILE bottom padding (so content isn't hidden behind tab bar) ── */}
      <div className="md:hidden h-16" style={{ position: "fixed", bottom: 0, pointerEvents: "none" }} />
    </>
  );
}
