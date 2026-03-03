export type CampaignStatus = "active" | "funded" | "completed" | "upcoming";

export interface Campaign {
  id: string;
  name: string;
  cooperative: string;
  region: string;
  culture: string;
  emoji: string;
  targetAmount: number;
  raisedAmount: number;
  roi: number;
  duration: number;
  daysLeft: number;
  investors: number;
  status: CampaignStatus;
  description: string;
  minInvestment: number;
  actionPrice: number;
  buyerContract: string;
  productionTarget: number;
  agronomist: string;
  tags: string[];
  progress: number;
}

export const campaigns: Campaign[] = [
  {
    id: "camp-001",
    name: "Tomate Bondoukou",
    cooperative: "Coopérative N'Zi",
    region: "Bondoukou, Zanzan",
    culture: "Tomate Mongal F1",
    emoji: "🍅",
    targetAmount: 5000000,
    raisedAmount: 3750000,
    roi: 23,
    duration: 90,
    daysLeft: 18,
    investors: 47,
    status: "active",
    description: "Culture de tomate variété Mongal F1 sur 3 hectares avec contrat d'achat garanti Supermarché Sococé. Irrigation goutte-à-goutte sécurisée.",
    minInvestment: 5000,
    actionPrice: 1000,
    buyerContract: "Sococé — 200 000 FCFA/tonne",
    productionTarget: 36,
    agronomist: "Dr. Kouamé Adjé",
    tags: ["maraîcher", "contrat garanti", "irrigation"],
    progress: 75,
  },
  {
    id: "camp-002",
    name: "Laitue Abidjan Sud",
    cooperative: "Coopérative Vert Espoir",
    region: "Grand-Lahou, Lagunes",
    culture: "Laitue Batavia",
    emoji: "🥬",
    targetAmount: 2500000,
    raisedAmount: 2500000,
    roi: 18,
    duration: 60,
    daysLeft: 0,
    investors: 31,
    status: "funded",
    description: "Production de laitue Batavia pour approvisionnement restaurants hôteliers Abidjan. Cycle court 60 jours, forte demande urbaine.",
    minInvestment: 5000,
    actionPrice: 1000,
    buyerContract: "Hôtel Ivoire & Sofitel — 180 000 FCFA/tonne",
    productionTarget: 18,
    agronomist: "Mme Bamba Fatou",
    tags: ["maraîcher", "urbain", "cycle court"],
    progress: 100,
  },
  {
    id: "camp-003",
    name: "Cacao Premium Daloa",
    cooperative: "Coopérative Kakaofarm",
    region: "Daloa, Haut-Sassandra",
    culture: "Cacao Trinitario",
    emoji: "🍫",
    targetAmount: 15000000,
    raisedAmount: 8200000,
    roi: 25,
    duration: 180,
    daysLeft: 45,
    investors: 89,
    status: "active",
    description: "Production de cacao premium variété Trinitario avec certification en cours. Contrat export Europe négocié avec Barry Callebaut.",
    minInvestment: 10000,
    actionPrice: 2000,
    buyerContract: "Barry Callebaut — 3 200 000 FCFA/tonne",
    productionTarget: 8,
    agronomist: "Dr. Touré Ibrahima",
    tags: ["export", "premium", "certification bio"],
    progress: 55,
  },
  {
    id: "camp-004",
    name: "Maïs Korhogo",
    cooperative: "Coopérative Savane Verte",
    region: "Korhogo, Poro",
    culture: "Maïs hybride DKC",
    emoji: "🌽",
    targetAmount: 8000000,
    raisedAmount: 0,
    roi: 20,
    duration: 120,
    daysLeft: 30,
    investors: 0,
    status: "upcoming",
    description: "Grande culture de maïs hybride pour alimenter unité de transformation locale. Contrat signé avec SIPRA (alimentation animale).",
    minInvestment: 5000,
    actionPrice: 1000,
    buyerContract: "SIPRA — 150 000 FCFA/tonne",
    productionTarget: 80,
    agronomist: "M. Coulibaly Sékou",
    tags: ["céréales", "grande culture", "transformation"],
    progress: 0,
  },
  {
    id: "camp-005",
    name: "Cajou Bouaflé",
    cooperative: "Coopérative Anacard Plus",
    region: "Bouaflé, Marahoué",
    culture: "Cajou (Anacardium)",
    emoji: "🥜",
    targetAmount: 12000000,
    raisedAmount: 12000000,
    roi: 22,
    duration: 150,
    daysLeft: 0,
    investors: 134,
    status: "completed",
    description: "Campagne clôturée avec succès. ROI de 22% distribué aux investisseurs. Production de 24 tonnes vendues à Olam International.",
    minInvestment: 10000,
    actionPrice: 2000,
    buyerContract: "Olam International",
    productionTarget: 24,
    agronomist: "Mme Yao Christine",
    tags: ["export", "terminé", "succès"],
    progress: 100,
  },
];

export interface DashboardStats {
  totalInvested: number;
  activeInvestments: number;
  totalGains: number;
  avgRoi: number;
}

export const userDashboardStats: DashboardStats = {
  totalInvested: 250000,
  activeInvestments: 3,
  totalGains: 47500,
  avgRoi: 19,
};

export const userPortfolio = [
  { campaignId: "camp-001", invested: 100000, actions: 100, currentValue: 106700, roi: 6.7, status: "active" as CampaignStatus },
  { campaignId: "camp-003", invested: 100000, actions: 50, currentValue: 118000, roi: 18, status: "active" as CampaignStatus },
  { campaignId: "camp-005", invested: 50000, actions: 25, currentValue: 61000, roi: 22, status: "completed" as CampaignStatus },
];
