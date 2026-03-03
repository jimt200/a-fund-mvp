import Link from "next/link";
import { ArrowRight, Shield, TrendingUp, Eye, Users, CheckCircle, Star } from "lucide-react";
import { campaigns } from "@/lib/data";
import CampaignCard from "@/components/CampaignCard";

export default function HomePage() {
  const featuredCampaigns = campaigns.filter(c => c.status === "active").slice(0, 3);
  const stats = [
    { value: "15–25%", label: "ROI annualisé moyen", icon: "📈" },
    { value: "5 000", label: "FCFA minimum", icon: "💰" },
    { value: "450Mds", label: "FCFA gap à financer", icon: "🌍" },
    { value: "100%", label: "Contrats achat garantis", icon: "🔒" },
  ];

  return (
    <div className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden bg-gradient-to-br from-green-950 via-green-900 to-green-800 text-white">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-green-300 rounded-full translate-x-1/2 translate-y-1/2 blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 bg-green-800 border border-green-700 rounded-full px-4 py-2 text-sm text-green-300 mb-6 animate-fade-in">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Prototype Beta — Côte d&apos;Ivoire 🇨🇮
            </div>
            <h1 className="font-display text-4xl lg:text-6xl font-bold leading-tight mb-6 animate-fade-in-up">
              Investissez dans{" "}
              <span className="text-yellow-400">l&apos;agriculture</span>{" "}
              ivoirienne
            </h1>
            <p className="text-green-200 text-lg lg:text-xl leading-relaxed mb-8 animate-fade-in-up delay-100">
              A-FUND connecte les investisseurs urbains aux coopératives agricoles certifiées.
              <strong className="text-white"> 15% à 25% de ROI</strong> en 90 à 180 jours,
              avec contrats d&apos;achat garantis avant chaque levée de fonds.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in-up delay-200">
              <Link
                href="/campagnes"
                className="inline-flex items-center justify-center gap-2 bg-yellow-400 hover:bg-yellow-300 text-green-950 font-bold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Voir les campagnes
                <ArrowRight className="w-5 h-5" />
              </Link>
              <Link
                href="/comment-ca-marche"
                className="inline-flex items-center justify-center gap-2 border border-green-600 text-green-200 hover:bg-green-800 font-semibold px-8 py-4 rounded-xl text-lg transition-colors"
              >
                Comment ça marche ?
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl mb-2">{s.icon}</div>
                <div className="text-2xl lg:text-3xl font-bold text-green-700">{s.value}</div>
                <div className="text-gray-500 text-sm mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED CAMPAIGNS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">Campagnes actives</p>
              <h2 className="font-display text-3xl font-bold text-gray-900">Investissez maintenant</h2>
            </div>
            <Link href="/campagnes" className="text-green-600 hover:text-green-700 font-semibold flex items-center gap-1 text-sm">
              Tout voir <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCampaigns.map((c) => (
              <CampaignCard key={c.id} campaign={c} />
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">Simple et transparent</p>
            <h2 className="font-display text-3xl font-bold text-gray-900">Investir en 4 étapes</h2>
          </div>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", icon: "🔍", title: "Choisissez", desc: "Parcourez les campagnes certifiées avec ROI, durée et contrat acheteur détaillés." },
              { step: "02", icon: "💳", title: "Investissez", desc: "À partir de 5 000 FCFA via Mobile Money (Orange, MTN, Wave)." },
              { step: "03", icon: "📊", title: "Suivez", desc: "Photos géolocalisées hebdomadaires, rapports agronomes en temps réel." },
              { step: "04", icon: "💰", title: "Encaissez", desc: "ROI versé directement sur votre Mobile Money à la récolte." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="relative inline-block mb-4">
                  <div className="w-16 h-16 bg-green-50 rounded-2xl flex items-center justify-center text-3xl mx-auto">
                    {item.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-600 text-white rounded-full text-xs font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TRUST */}
      <section className="py-20 bg-green-950 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="font-display text-3xl font-bold mb-4">Pourquoi faire confiance à A-FUND ?</h2>
            <p className="text-green-300 text-lg max-w-2xl mx-auto">Notre modèle a été conçu pour protéger à la fois les investisseurs et les coopératives.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Contrats avant la levée", desc: "Chaque campagne démarre avec un contrat d'achat signé. Votre investissement est couvert avant même le premier semis." },
              { icon: Eye, title: "Traçabilité totale", desc: "Photos géolocalisées, factures digitales, visites terrain agronomes : vous voyez exactement où va chaque franc." },
              { icon: TrendingUp, title: "Sélection rigoureuse", desc: "Seulement les coopératives notées 70/100+ sont acceptées. Audit terrain, historique de production, capacité de gestion." },
            ].map((item, i) => (
              <div key={i} className="bg-green-900 border border-green-800 rounded-2xl p-6">
                <div className="w-12 h-12 bg-green-800 rounded-xl flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-green-400" />
                </div>
                <h3 className="font-bold text-white text-lg mb-2">{item.title}</h3>
                <p className="text-green-300 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900">Ils nous font confiance</h2>
            <p className="text-gray-500 mt-2">Témoignages de la phase pilote</p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { name: "Adjoua K.", role: "Responsable RH, Abidjan", text: "J'ai investi 50 000 FCFA sur la campagne tomate. En 90 jours, j'ai reçu 61 500 FCFA. C'est ma meilleure décision financière de l'année.", roi: "+23%" },
              { name: "Kofi A.", role: "Ingénieur, diaspora France", text: "Enfin un moyen d'investir au pays avec une vraie transparence. Je suis les photos de mes parcelles chaque semaine depuis Paris.", roi: "+25%" },
            ].map((t, i) => (
              <div key={i} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm">
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed mb-4 italic">&ldquo;{t.text}&rdquo;</p>
                <div className="flex items-center justify-between">
                  <div>
                    <div className="font-bold text-gray-900">{t.name}</div>
                    <div className="text-gray-500 text-xs">{t.role}</div>
                  </div>
                  <div className="bg-green-100 text-green-700 font-bold px-3 py-1 rounded-full text-sm">{t.roi}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="font-display text-4xl font-bold mb-4">Prêt à cultiver votre patrimoine ?</h2>
          <p className="text-green-100 text-lg mb-8">Rejoignez les investisseurs qui font fructifier leur argent tout en soutenant l&apos;agriculture ivoirienne.</p>
          <Link
            href="/campagnes"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-10 py-4 rounded-xl text-lg hover:bg-green-50 transition-colors"
          >
            Découvrir les campagnes
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="text-white font-display font-bold text-xl mb-3">A-FUND</div>
              <p className="text-sm leading-relaxed">La première bourse agricole participative de Côte d&apos;Ivoire. Par Hokma Labs.</p>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Plateforme</div>
              <ul className="space-y-2 text-sm">
                <li><Link href="/campagnes" className="hover:text-white transition-colors">Campagnes</Link></li>
                <li><Link href="/comment-ca-marche" className="hover:text-white transition-colors">Comment ça marche</Link></li>
                <li><Link href="/dashboard" className="hover:text-white transition-colors">Mon Portfolio</Link></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Coopératives</div>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="hover:text-white transition-colors">Devenir partenaire</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Critères de sélection</a></li>
              </ul>
            </div>
            <div>
              <div className="text-white font-semibold mb-3">Contact</div>
              <ul className="space-y-2 text-sm">
                <li>contact.hokmalabs@gmail.com</li>
                <li>+225 07 87 98 76 37</li>
                <li>Daloa, Côte d&apos;Ivoire</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
            <p>© 2026 A-FUND / Hokma Labs. Tous droits réservés.</p>
            <p className="flex items-center gap-1"><CheckCircle className="w-3 h-3 text-green-500" /> Prototype Beta — Phase de test</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
