import Link from "next/link";
import { ArrowRight, CheckCircle, TrendingUp, Shield, Eye, Zap } from "lucide-react";

export default function CommentCaMarchePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero */}
      <div className="bg-gradient-to-br from-green-900 to-green-700 text-white py-20 px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-display text-4xl font-bold mb-4">Comment fonctionne A-FUND ?</h1>
          <p className="text-green-200 text-xl">Un modèle transparent, sécurisé et conçu pour les deux parties : investisseurs et coopératives.</p>
        </div>
      </div>

      {/* For investors */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">Pour vous, investisseur</p>
            <h2 className="font-display text-3xl font-bold text-gray-900">Investir en 4 étapes simples</h2>
          </div>
          <div className="space-y-6">
            {[
              {
                step: "1", emoji: "🔍",
                title: "Choisissez votre campagne",
                desc: "Parcourez notre marketplace de campagnes certifiées. Chaque fiche affiche : culture, région, ROI estimé, durée, contrat acheteur, et rapport de l'agronome. Vous avez toutes les informations avant de décider.",
              },
              {
                step: "2", emoji: "💳",
                title: "Investissez via Mobile Money",
                desc: "À partir de 5 000 FCFA seulement. Paiement sécurisé par Orange Money, MTN Mobile Money ou Wave. Vos fonds sont débloqués progressivement selon les jalons agronomiques (30% semis, 40% mi-culture, 30% pré-récolte).",
              },
              {
                step: "3", emoji: "📊",
                title: "Suivez en temps réel",
                desc: "Recevez des mises à jour hebdomadaires avec photos géolocalisées de vos parcelles. Consultez les dépenses détaillées, les rapports des agronomes, et les prévisions de récolte actualisées sur votre tableau de bord.",
              },
              {
                step: "4", emoji: "💰",
                title: "Récupérez capital + ROI",
                desc: "À la récolte et après vente à l'acheteur partenaire, votre capital + ROI sont versés directement sur votre Mobile Money. Aucune démarche supplémentaire nécessaire.",
              },
            ].map((item) => (
              <div key={item.step} className="flex gap-6 items-start bg-gray-50 rounded-2xl p-6">
                <div className="flex-shrink-0 w-14 h-14 bg-green-600 text-white rounded-2xl flex items-center justify-center font-bold text-xl">
                  {item.step}
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-2xl">{item.emoji}</span>
                    <h3 className="font-bold text-gray-900 text-lg">{item.title}</h3>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing dynamique */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">Innovation A-FUND</p>
            <h2 className="font-display text-3xl font-bold text-gray-900">Pricing dynamique : le risque diminue avec le temps</h2>
            <p className="text-gray-600 mt-3 max-w-2xl mx-auto">Le prix d&apos;une action augmente au fur et à mesure que la culture avance, reflétant la réduction du risque.</p>
          </div>
          <div className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
            <div className="p-6 border-b border-gray-50">
              <p className="font-semibold text-gray-800">Exemple : Campagne Tomate 90 jours</p>
              <p className="text-gray-500 text-sm">Prix initial : 1 000 FCFA / action · α = 0,20</p>
            </div>
            <div className="divide-y divide-gray-50">
              {[
                { day: "Jour 0", label: "Semis 🌱", price: "1 000 FCFA", roi: "20% ROI possible", risk: "Risque max" , riskColor: "text-red-500" },
                { day: "Jour 30", label: "Levée confirmée 🌿", price: "1 067 FCFA", roi: "14% ROI restant", risk: "Risque élevé", riskColor: "text-orange-500" },
                { day: "Jour 60", label: "Floraison 🌸", price: "1 133 FCFA", roi: "6% ROI restant", risk: "Risque moyen", riskColor: "text-amber-500" },
                { day: "Jour 90", label: "Récolte 🍅", price: "1 200 FCFA", roi: "Récolte confirmée", risk: "Risque minimal", riskColor: "text-green-600" },
              ].map((row) => (
                <div key={row.day} className="flex items-center justify-between px-6 py-4 hover:bg-gray-50 transition-colors">
                  <div className="flex items-center gap-4">
                    <div className="text-xs font-semibold text-gray-400 w-16">{row.day}</div>
                    <div className="text-sm font-medium text-gray-800">{row.label}</div>
                  </div>
                  <div className="flex items-center gap-6 text-right">
                    <div className="text-sm font-bold text-gray-900">{row.price}</div>
                    <div className="text-xs text-green-600 font-medium w-32">{row.roi}</div>
                    <div className={`text-xs font-semibold ${row.riskColor} w-24`}>{row.risk}</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="bg-green-50 p-4 text-xs text-green-700 border-t border-green-100">
              💡 <strong>Investisseur précoce</strong> = plus de risque, plus de gain. <strong>Investisseur tardif</strong> = moins de risque, moins de gain. À vous de choisir votre stratégie.
            </div>
          </div>
        </div>
      </section>

      {/* Security */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-green-600 font-semibold text-sm uppercase tracking-wide mb-2">Protection maximale</p>
            <h2 className="font-display text-3xl font-bold text-gray-900">Comment nous protégeons votre capital</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "Contrat acheteur AVANT la levée", desc: "Aucune campagne n'est lancée sans un contrat d'achat signé avec un acheteur qualifié. Le prix de vente est fixé avant même le premier investissement." },
              { icon: Eye, title: "Paiement direct aux fournisseurs", desc: "La coopérative ne touche jamais les fonds en liquide. A-FUND paie directement les semenciers, engrais, et les salaires via Mobile Money traçable." },
              { icon: Zap, title: "Déblocage par jalons", desc: "30% à la semis, 40% à mi-culture, 30% en pré-récolte. Chaque déblocage est conditionné à la validation agronome sur le terrain." },
              { icon: TrendingUp, title: "Fonds de garantie 10%", desc: "10% de chaque levée est mis en réserve. En cas de perte partielle, ce fonds couvre partiellement votre capital investi." },
              { icon: CheckCircle, title: "Assurance récolte CNAAS", desc: "Option d'assurance récolte via la CNAAS (Caisse Nationale d'Assurance Agricole). Protection contre les aléas climatiques majeurs." },
              { icon: Shield, title: "Sélection rigoureuse 70/100+", desc: "Seules les coopératives notant 70 points sur 100 minimum sont acceptées. Audit terrain, historique de production, capacité de gestion vérifiés." },
            ].map((item) => (
              <div key={item.title} className="flex gap-4 p-5 bg-gray-50 rounded-2xl">
                <div className="w-10 h-10 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <h3 className="font-bold text-gray-900 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-display text-3xl font-bold text-gray-900">Questions fréquentes</h2>
          </div>
          <div className="space-y-4">
            {[
              { q: "Quel est le rendement minimum garanti ?", a: "A-FUND ne garantit pas un rendement fixe car l'agriculture comporte des risques réels. Cependant, nos campagnes visent 15-25% de ROI grâce aux contrats d'achat préalables et à la sélection rigoureuse des coopératives." },
              { q: "Que se passe-t-il si la récolte échoue ?", a: "En cas de perte partielle, le fonds de garantie (10% de la levée) couvre partiellement votre capital. L'assurance récolte CNAAS peut couvrir jusqu'à 80% des pertes selon la formule choisie." },
              { q: "Comment récupérer mon argent avant la fin ?", a: "Un marché secondaire est prévu dans la version complète, permettant de revendre vos actions à d'autres investisseurs. Dans le prototype actuel, les fonds sont bloqués jusqu'à la fin de la campagne." },
              { q: "À partir de quel montant peut-on investir ?", a: "Dès 5 000 FCFA par campagne. Il n'y a pas de maximum. Vous pouvez diversifier sur plusieurs campagnes simultanément pour réduire le risque." },
              { q: "Comment A-FUND gagne-t-il de l'argent ?", a: "A-FUND prélève une commission de 3-5% sur les levées de fonds et 5% sur la plus-value générée. Nous gagnons donc plus quand vous gagnez plus : nos intérêts sont parfaitement alignés." },
            ].map((faq) => (
              <div key={faq.q} className="bg-white rounded-2xl border border-gray-100 p-6">
                <h3 className="font-bold text-gray-900 mb-2 flex items-start gap-2">
                  <span className="text-green-500 font-bold flex-shrink-0">Q.</span> {faq.q}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed pl-5">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gradient-to-r from-green-600 to-green-500 text-white text-center">
        <div className="max-w-2xl mx-auto px-4">
          <h2 className="font-display text-3xl font-bold mb-4">Prêt à commencer ?</h2>
          <p className="text-green-100 mb-8">Rejoignez la première bourse agricole de Côte d&apos;Ivoire.</p>
          <Link
            href="/campagnes"
            className="inline-flex items-center gap-2 bg-white text-green-700 font-bold px-8 py-4 rounded-xl hover:bg-green-50 transition-colors"
          >
            Voir les campagnes <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
