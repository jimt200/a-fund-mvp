"use client";
import Link from "next/link";
import { TrendingUp, Wallet, Activity, Award, ArrowUpRight, Eye } from "lucide-react";
import { campaigns, userDashboardStats, userPortfolio } from "@/lib/data";

export default function DashboardPage() {
  const stats = [
    { label: "Capital total investi", value: `${userDashboardStats.totalInvested.toLocaleString()} FCFA`, icon: Wallet, color: "text-blue-600", bg: "bg-blue-50" },
    { label: "Investissements actifs", value: userDashboardStats.activeInvestments, icon: Activity, color: "text-green-600", bg: "bg-green-50" },
    { label: "Gains générés", value: `+${userDashboardStats.totalGains.toLocaleString()} FCFA`, icon: TrendingUp, color: "text-emerald-600", bg: "bg-emerald-50" },
    { label: "ROI moyen portfolio", value: `${userDashboardStats.avgRoi}%`, icon: Award, color: "text-amber-600", bg: "bg-amber-50" },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-900 to-green-700 text-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <p className="text-green-300 text-sm mb-1">Bonjour 👋</p>
          <h1 className="font-display text-3xl font-bold mb-1">Mon Portfolio</h1>
          <p className="text-green-300 text-sm">Prototype — données simulées pour démonstration</p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {stats.map((s) => (
            <div key={s.label} className="bg-white rounded-2xl border border-gray-100 shadow-sm p-5">
              <div className={`w-10 h-10 ${s.bg} rounded-xl flex items-center justify-center mb-3`}>
                <s.icon className={`w-5 h-5 ${s.color}`} />
              </div>
              <div className={`text-xl font-bold ${s.color} mb-0.5`}>{s.value}</div>
              <div className="text-gray-500 text-xs">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Portfolio table */}
        <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden mb-8">
          <div className="p-6 border-b border-gray-50">
            <h2 className="font-bold text-gray-900 text-lg">Mes investissements</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-gray-50 text-left">
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Campagne</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Investi</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Valeur actuelle</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">ROI</th>
                  <th className="px-6 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                  <th className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {userPortfolio.map((p) => {
                  const c = campaigns.find((x) => x.id === p.campaignId);
                  if (!c) return null;
                  const gain = p.currentValue - p.invested;
                  return (
                    <tr key={p.campaignId} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <span className="text-2xl">{c.emoji}</span>
                          <div>
                            <div className="font-semibold text-gray-900 text-sm">{c.name}</div>
                            <div className="text-gray-500 text-xs">{p.actions} actions · {c.culture}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 text-sm font-medium text-gray-700">{p.invested.toLocaleString()} FCFA</td>
                      <td className="px-6 py-4">
                        <div className="text-sm font-bold text-gray-900">{p.currentValue.toLocaleString()} FCFA</div>
                        <div className="text-xs text-green-600">+{gain.toLocaleString()} FCFA</div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-700 font-bold text-sm px-2.5 py-1 rounded-full">
                          +{p.roi}%
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${
                          p.status === "active" ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-600"
                        }`}>
                          {p.status === "active" ? "En cours" : "Terminé ✓"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <Link
                          href={`/campagnes/${c.id}`}
                          className="flex items-center gap-1 text-green-600 hover:text-green-700 text-xs font-medium"
                        >
                          <Eye className="w-3.5 h-3.5" /> Voir
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        <div className="bg-gradient-to-r from-green-600 to-green-500 rounded-2xl p-8 text-white text-center">
          <h3 className="font-display text-2xl font-bold mb-2">Diversifiez votre portfolio</h3>
          <p className="text-green-100 mb-6">2 nouvelles campagnes disponibles. Ne ratez pas les meilleures opportunités.</p>
          <Link
            href="/campagnes"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-6 py-3 rounded-xl hover:bg-green-50 transition-colors"
          >
            Explorer les campagnes <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
