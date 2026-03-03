"use client";
import Link from "next/link";
import { Clock, Users, TrendingUp, CheckCircle, Lock, Calendar } from "lucide-react";
import { Campaign } from "@/lib/data";

function StatusBadge({ status }: { status: Campaign["status"] }) {
  const config = {
    active: { label: "En cours", className: "bg-green-100 text-green-700 border-green-200" },
    funded: { label: "Financée", className: "bg-blue-100 text-blue-700 border-blue-200" },
    completed: { label: "Terminée ✓", className: "bg-gray-100 text-gray-600 border-gray-200" },
    upcoming: { label: "À venir", className: "bg-amber-100 text-amber-700 border-amber-200" },
  };
  const c = config[status];
  return (
    <span className={`text-xs font-semibold px-2 py-1 rounded-full border ${c.className}`}>
      {c.label}
    </span>
  );
}

export default function CampaignCard({ campaign }: { campaign: Campaign }) {
  const pct = campaign.progress;

  return (
    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all hover:-translate-y-0.5 overflow-hidden">
      <div className="bg-gradient-to-br from-green-800 to-green-600 p-5">
        <div className="flex items-start justify-between mb-3">
          <div className="text-4xl">{campaign.emoji}</div>
          <StatusBadge status={campaign.status} />
        </div>
        <h3 className="text-white font-bold text-lg leading-tight">{campaign.name}</h3>
        <p className="text-green-200 text-sm mt-1">{campaign.cooperative} · {campaign.region}</p>
      </div>

      <div className="p-5">
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">{campaign.description}</p>

        <div className="grid grid-cols-3 gap-3 mb-4">
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-green-600 mb-1">
              <TrendingUp className="w-3.5 h-3.5" />
            </div>
            <div className="font-bold text-green-700 text-lg">{campaign.roi}%</div>
            <div className="text-gray-400 text-xs">ROI estimé</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-amber-500 mb-1">
              <Clock className="w-3.5 h-3.5" />
            </div>
            <div className="font-bold text-gray-800 text-lg">{campaign.duration}j</div>
            <div className="text-gray-400 text-xs">Durée</div>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
              <Users className="w-3.5 h-3.5" />
            </div>
            <div className="font-bold text-gray-800 text-lg">{campaign.investors}</div>
            <div className="text-gray-400 text-xs">Investisseurs</div>
          </div>
        </div>

        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1.5">
            <span>{(campaign.raisedAmount / 1000000).toFixed(1)}M FCFA levés</span>
            <span>{pct}%</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-2">
            <div
              className="bg-gradient-to-r from-green-500 to-green-400 h-2 rounded-full transition-all"
              style={{ width: `${pct}%` }}
            />
          </div>
          <div className="text-xs text-gray-400 mt-1">
            Objectif : {(campaign.targetAmount / 1000000).toFixed(1)}M FCFA
          </div>
        </div>

        <div className="flex items-center gap-2 text-xs text-gray-500 mb-4 bg-gray-50 rounded-lg p-2">
          <CheckCircle className="w-3.5 h-3.5 text-green-500 flex-shrink-0" />
          <span className="truncate">{campaign.buyerContract}</span>
        </div>

        {campaign.status === "active" ? (
          <Link
            href={`/campagnes/${campaign.id}`}
            className="w-full block text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 rounded-xl text-sm transition-colors"
          >
            Investir dès {campaign.minInvestment.toLocaleString()} FCFA
          </Link>
        ) : campaign.status === "upcoming" ? (
          <button className="w-full flex items-center justify-center gap-2 border border-amber-400 text-amber-700 font-semibold py-2.5 rounded-xl text-sm hover:bg-amber-50 transition-colors">
            <Calendar className="w-4 h-4" />
            Me notifier au lancement
          </button>
        ) : campaign.status === "funded" ? (
          <button className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-500 font-semibold py-2.5 rounded-xl text-sm cursor-not-allowed" disabled>
            <Lock className="w-4 h-4" />
            Levée clôturée
          </button>
        ) : (
          <div className="w-full flex items-center justify-center gap-2 bg-green-50 text-green-700 font-semibold py-2.5 rounded-xl text-sm">
            <CheckCircle className="w-4 h-4" />
            ROI distribué avec succès
          </div>
        )}
      </div>
    </div>
  );
}
