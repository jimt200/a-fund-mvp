"use client";
import { useState, useEffect } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle, MapPin, ShieldCheck, Camera, Leaf, Shield } from "lucide-react";
import { campaigns } from "@/lib/data";

function PricingBar({ progress, alpha = 0.20 }: { progress: number; alpha?: number }) {
  const multiplier = 1 + alpha * (progress / 100);
  const pct = Math.round((multiplier - 1) / alpha * 100);
  return (
    <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 mb-4">
      <div className="flex items-center justify-between mb-2">
        <span className="text-amber-800 font-semibold text-sm">Prix dynamique — avancement campagne</span>
        <span className="text-amber-700 font-bold text-sm">{progress}% avancé</span>
      </div>
      <div className="w-full bg-amber-100 rounded-full h-2 mb-2">
        <div className="bg-amber-500 h-2 rounded-full transition-all" style={{ width: `${progress}%` }} />
      </div>
      <p className="text-amber-700 text-xs">
        Prix actuel : <strong>×{multiplier.toFixed(3)}</strong> du prix initial ·{" "}
        {progress < 30
          ? "🌱 Semis — risque élevé, ROI maximum"
          : progress < 60
          ? "🌿 Culture établie — risque moyen"
          : progress < 90
          ? "🌸 Floraison — risque faible"
          : "🍅 Pré-récolte — risque minimal, ROI réduit"}
      </p>
    </div>
  );
}

export default function CampaignDetailPage() {
  const { id } = useParams();
  const campaign = campaigns.find((c) => c.id === id);
  const [amount, setAmount] = useState(50000);
  const [insured, setInsured] = useState(false);
  const [invested, setInvested] = useState(false);

  const INSURANCE_RATE = 0.03; // 3% du montant
  const alpha = 0.20;

  // ROI ajusté selon l'avancement (pricing dynamique)
  const progressRatio = campaign ? campaign.progress / 100 : 0;
  const priceMultiplier = 1 + alpha * progressRatio;
  // Le ROI effectif diminue car tu paies plus cher pour la même part
  const adjustedRoi = campaign ? Math.round(campaign.roi / priceMultiplier * 10) / 10 : 0;

  const insuranceCost = insured ? Math.round(amount * INSURANCE_RATE) : 0;
  const totalCost = amount + insuranceCost;
  const roiGain = Math.round(amount * (adjustedRoi / 100));
  const netReturn = amount + roiGain - insuranceCost;
  const actions = campaign ? Math.floor(amount / (campaign.actionPrice * priceMultiplier)) : 0;

  if (!campaign) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl mb-4">🌿</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Campagne introuvable</h2>
          <Link href="/campagnes" className="text-green-600 hover:underline">← Retour aux campagnes</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gradient-to-br from-green-900 to-green-700 text-white pt-6 pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <Link href="/campagnes" className="inline-flex items-center gap-2 text-green-300 hover:text-white text-sm mb-6 transition-colors">
            <ArrowLeft className="w-4 h-4" /> Retour aux campagnes
          </Link>
          <div className="flex items-start gap-4">
            <div className="text-5xl">{campaign.emoji}</div>
            <div>
              <div className="flex items-center gap-3 mb-2 flex-wrap">
                <h1 className="font-display text-3xl font-bold">{campaign.name}</h1>
                <span className="bg-green-800 border border-green-700 text-green-300 text-xs font-semibold px-3 py-1 rounded-full">
                  {campaign.culture}
                </span>
              </div>
              <div className="flex items-center gap-2 text-green-300 text-sm">
                <MapPin className="w-4 h-4" />
                {campaign.cooperative} · {campaign.region}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 -mt-8 pb-20">
        <div className="grid lg:grid-cols-3 gap-6">
          {/* LEFT */}
          <div className="lg:col-span-2 space-y-6">
            {/* Progress */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div>
                  <div className="text-2xl font-bold text-green-700">{adjustedRoi}%</div>
                  <div className="text-xs text-gray-500 mt-0.5">ROI actuel</div>
                  {campaign.progress > 0 && (
                    <div className="text-xs text-amber-600 mt-0.5">
                      (base {campaign.roi}% · ajusté)
                    </div>
                  )}
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">{campaign.duration}j</div>
                  <div className="text-xs text-gray-500 mt-0.5">Durée campagne</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-gray-800">{campaign.investors}</div>
                  <div className="text-xs text-gray-500 mt-0.5">Investisseurs</div>
                </div>
              </div>
              <div className="mb-2 flex justify-between text-sm">
                <span className="text-gray-600 font-medium">{(campaign.raisedAmount / 1000000).toFixed(2)}M FCFA levés</span>
                <span className="font-bold text-green-700">{campaign.progress}%</span>
              </div>
              <div className="w-full bg-gray-100 rounded-full h-3 mb-1">
                <div className="bg-gradient-to-r from-green-600 to-green-400 h-3 rounded-full" style={{ width: `${campaign.progress}%` }} />
              </div>
              <div className="text-xs text-gray-400">Objectif : {(campaign.targetAmount / 1000000).toFixed(1)}M FCFA</div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 text-lg mb-3 flex items-center gap-2">
                <Leaf className="w-5 h-5 text-green-500" /> À propos de cette campagne
              </h2>
              <p className="text-gray-600 leading-relaxed">{campaign.description}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {campaign.tags.map((tag) => (
                  <span key={tag} className="bg-green-50 text-green-700 text-xs font-medium px-3 py-1 rounded-full border border-green-200">
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Guarantees */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <ShieldCheck className="w-5 h-5 text-green-500" /> Sécurités & Garanties
              </h2>
              <div className="space-y-3">
                {[
                  { label: "Contrat acheteur garanti", value: campaign.buyerContract },
                  { label: "Production cible", value: `${campaign.productionTarget} tonnes` },
                  { label: "Agronome responsable", value: campaign.agronomist },
                  { label: "Fonds de garantie A-FUND", value: "10% de la levée en réserve" },
                  { label: "Assurance récolte", value: "Via CNAAS — disponible à la souscription" },
                  { label: "Paiements directs", value: "Fournisseurs & ouvriers (sans passage coopérative)" },
                ].map((item) => (
                  <div key={item.label} className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                    <div>
                      <span className="font-medium text-gray-800 text-sm">{item.label} : </span>
                      <span className="text-gray-600 text-sm">{item.value}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Suivi */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 text-lg mb-4 flex items-center gap-2">
                <Camera className="w-5 h-5 text-green-500" /> Suivi en temps réel
              </h2>
              <div className="grid grid-cols-3 gap-3">
                {[["Semis", "J0", "🌱"], ["Levée", "J30", "🌿"], ["Floraison", "J60", "🌸"]].map(([label, day, emoji]) => (
                  <div key={day} className="bg-gray-50 rounded-xl p-3 text-center">
                    <div className="text-2xl mb-1">{emoji}</div>
                    <div className="text-xs text-gray-600 font-medium">{label}</div>
                    <div className="text-xs text-gray-400">{day}</div>
                  </div>
                ))}
              </div>
              <p className="text-gray-500 text-sm mt-3">Photos géolocalisées publiées chaque semaine. 3 visites agronome minimum par campagne.</p>
            </div>
          </div>

          {/* RIGHT — Investment widget */}
          <div>
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20">
              {!invested ? (
                <>
                  <h3 className="font-bold text-gray-900 text-lg mb-1">Investir dans cette campagne</h3>
                  <p className="text-gray-500 text-sm mb-4">Minimum : {campaign.minInvestment.toLocaleString()} FCFA</p>

                  {/* Pricing dynamique */}
                  <PricingBar progress={campaign.progress} alpha={alpha} />

                  {/* Montant */}
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-2">Montant à investir (FCFA)</label>
                    <input
                      type="number"
                      value={amount}
                      onChange={(e) => setAmount(Math.max(campaign.minInvestment, Number(e.target.value)))}
                      step={5000}
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg font-bold focus:outline-none focus:ring-2 focus:ring-green-500"
                    />
                  </div>

                  {/* Raccourcis montant */}
                  <div className="flex gap-2 mb-4">
                    {[10000, 50000, 100000, 250000].map((v) => (
                      <button
                        key={v}
                        onClick={() => setAmount(v)}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                          amount === v ? "bg-green-600 text-white border-green-600" : "border-gray-200 text-gray-600 hover:border-green-400"
                        }`}
                      >
                        {v >= 1000 ? `${v / 1000}k` : v}
                      </button>
                    ))}
                  </div>

                  {/* Assurance */}
                  <div
                    onClick={() => setInsured(!insured)}
                    className={`flex items-start gap-3 p-4 rounded-xl border-2 cursor-pointer transition-all mb-5 ${
                      insured ? "border-blue-400 bg-blue-50" : "border-gray-200 bg-gray-50 hover:border-blue-300"
                    }`}
                  >
                    <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center transition-colors ${
                      insured ? "bg-blue-500 border-blue-500" : "border-gray-300 bg-white"
                    }`}>
                      {insured && <CheckCircle className="w-3.5 h-3.5 text-white" />}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <Shield className="w-4 h-4 text-blue-500" />
                        <span className="font-semibold text-gray-800 text-sm">Assurer mon investissement</span>
                      </div>
                      <p className="text-gray-500 text-xs mt-1">
                        Protection CNAAS contre les aléas climatiques · Coût : 3% du montant investi
                        {insured && (
                          <span className="text-blue-600 font-semibold"> (+{insuranceCost.toLocaleString()} FCFA)</span>
                        )}
                      </p>
                    </div>
                  </div>

                  {/* Récapitulatif */}
                  <div className="bg-green-50 rounded-xl p-4 mb-5 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Capital investi</span>
                      <span className="font-semibold">{amount.toLocaleString()} FCFA</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Actions obtenues</span>
                      <span className="font-semibold">{actions} actions</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">ROI actuel ({adjustedRoi}%)</span>
                      <span className="font-semibold text-green-600">+{roiGain.toLocaleString()} FCFA</span>
                    </div>
                    {insured && (
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-600">Assurance récolte (3%)</span>
                        <span className="font-semibold text-red-500">−{insuranceCost.toLocaleString()} FCFA</span>
                      </div>
                    )}
                    <div className="border-t border-green-200 pt-2 flex justify-between">
                      <span className="font-bold text-gray-900">Retour net estimé</span>
                      <span className="font-bold text-green-700 text-lg">{netReturn.toLocaleString()} FCFA</span>
                    </div>
                  </div>

                  <button
                    onClick={() => setInvested(true)}
                    disabled={campaign.status !== "active"}
                    className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-300 text-white font-bold py-3.5 rounded-xl transition-colors text-base"
                  >
                    {campaign.status === "active" ? "Confirmer l'investissement" : "Campagne non disponible"}
                  </button>
                  <p className="text-xs text-gray-400 text-center mt-2">Paiement via Orange Money, MTN, Wave</p>
                </>
              ) : (
                <div className="text-center py-4">
                  <div className="text-5xl mb-3">🎉</div>
                  <h3 className="font-bold text-gray-900 text-xl mb-2">Investissement simulé !</h3>
                  <p className="text-gray-600 text-sm mb-4">Dans la version finale, votre paiement Mobile Money serait traité ici.</p>
                  <div className="bg-green-50 rounded-xl p-4 mb-2">
                    <div className="text-green-700 font-bold text-lg">{amount.toLocaleString()} FCFA</div>
                    <div className="text-green-600 text-sm">investis dans {campaign.name}</div>
                    <div className="text-gray-500 text-xs mt-1">ROI attendu : +{roiGain.toLocaleString()} FCFA</div>
                  </div>
                  {insured && (
                    <div className="bg-blue-50 rounded-xl p-3 mb-3 text-xs text-blue-700 flex items-center gap-2">
                      <Shield className="w-4 h-4 flex-shrink-0" />
                      Investissement assuré via CNAAS ✓
                    </div>
                  )}
                  <Link href="/dashboard" className="block w-full bg-green-600 text-white font-bold py-3 rounded-xl text-sm text-center hover:bg-green-700 transition-colors mt-2">
                    Voir mon portfolio →
                  </Link>
                  <button onClick={() => setInvested(false)} className="mt-2 text-gray-500 text-xs hover:text-gray-700">
                    Recommencer
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
