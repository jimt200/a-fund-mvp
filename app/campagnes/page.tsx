"use client";
import { useState } from "react";
import { Search, Filter, SlidersHorizontal } from "lucide-react";
import { campaigns } from "@/lib/data";
import CampaignCard from "@/components/CampaignCard";

const filters = ["Toutes", "active", "funded", "upcoming", "completed"];
const filterLabels: Record<string, string> = {
  "Toutes": "Toutes",
  "active": "En cours",
  "funded": "Financées",
  "upcoming": "À venir",
  "completed": "Terminées",
};

export default function CampagnesPage() {
  const [search, setSearch] = useState("");
  const [activeFilter, setActiveFilter] = useState("Toutes");

  const filtered = campaigns.filter((c) => {
    const matchSearch = c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.cooperative.toLowerCase().includes(search.toLowerCase()) ||
      c.culture.toLowerCase().includes(search.toLowerCase()) ||
      c.region.toLowerCase().includes(search.toLowerCase());
    const matchStatus = activeFilter === "Toutes" || c.status === activeFilter;
    return matchSearch && matchStatus;
  });

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-900 to-green-700 text-white py-16 px-4">
        <div className="max-w-7xl mx-auto">
          <h1 className="font-display text-4xl font-bold mb-3">Campagnes agricoles</h1>
          <p className="text-green-200 text-lg">
            {campaigns.filter(c => c.status === "active").length} campagnes actives ·{" "}
            Contrats d&apos;achat garantis avant chaque levée
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Filters */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
            <input
              type="text"
              placeholder="Rechercher une campagne, coopérative, région..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-green-500 bg-white"
            />
          </div>
          <div className="flex gap-2 flex-wrap">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActiveFilter(f)}
                className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  activeFilter === f
                    ? "bg-green-600 text-white"
                    : "bg-white text-gray-600 border border-gray-200 hover:border-green-400"
                }`}
              >
                {filterLabels[f]}
              </button>
            ))}
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-gray-500 mb-6">
          {filtered.length} campagne{filtered.length !== 1 ? "s" : ""} trouvée{filtered.length !== 1 ? "s" : ""}
        </div>

        {/* Grid */}
        {filtered.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((c) => (
              <CampaignCard key={c.id} campaign={c} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <div className="text-6xl mb-4">🌱</div>
            <h3 className="text-xl font-bold text-gray-700 mb-2">Aucune campagne trouvée</h3>
            <p className="text-gray-500">Essayez de modifier vos filtres de recherche.</p>
          </div>
        )}
      </div>
    </div>
  );
}
