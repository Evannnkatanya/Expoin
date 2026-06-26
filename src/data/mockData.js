import newsJapan from '../assets/news_japan.png';
import cargoShipSunset from '../assets/cargo_ship_sunset.png';
import cargoShip from '../assets/cargo_ship.png';

export const userProfile = {
  name: "Andi",
  product: "Kopi Robusta"
};

export const dashboardSummary = {
  exportScore: 87,
  potentialCountries: 24,
  activeRoadmaps: 3,
  estimatedProfit: 21500000
};

export const trendData = [
  { month: "Jan", value: 20 },
  { month: "Feb", value: 35 },
  { month: "Mar", value: 45 },
  { month: "Apr", value: 55 },
  { month: "May", value: 80 },
  { month: "Jun", value: 100 }
];

export const topCountries = [
  {
    id: "jp",
    name: "Jepang",
    flag: "🇯🇵",
    score: 92,
    price: 7.2,
    trend: [30, 40, 45, 50, 70, 92],
    tariff: "0% (FTA)",
    demand: "Sangat Tinggi"
  },
  {
    id: "de",
    name: "Jerman",
    flag: "🇩🇪",
    score: 89,
    price: 6.8,
    trend: [20, 35, 50, 60, 75, 89],
    tariff: "0% (EU)",
    demand: "Tinggi"
  },
  {
    id: "us",
    name: "Amerika Serikat",
    flag: "🇺🇸",
    score: 85,
    price: 6.5,
    trend: [10, 20, 30, 50, 65, 85],
    tariff: "1,5%",
    demand: "Tinggi"
  },
  {
    id: "kr",
    name: "Korea Selatan",
    flag: "🇰🇷",
    score: 83,
    price: 6.1,
    trend: [15, 25, 40, 55, 65, 83],
    tariff: "0% (CEPA)",
    demand: "Sedang"
  },
  {
    id: "au",
    name: "Australia",
    flag: "🇦🇺",
    score: 80,
    price: 5.9,
    trend: [10, 15, 35, 45, 60, 80],
    tariff: "0% (IACEPA)",
    demand: "Sedang"
  }
];

export const roadmapSteps = [
  { id: 1, name: "Legalitas Usaha", status: "completed" },
  { id: 2, name: "Pendaftaran NIB", status: "completed" },
  { id: 3, name: "Sertifikasi Produk", status: "completed" },
  { id: 4, name: "Mencari Buyer", status: "active" },
  { id: 5, name: "Kontrak Dagang", status: "pending" },
  { id: 6, name: "Pengiriman Barang", status: "pending" }
];

export const exportNews = [
  {
    id: 1,
    title: "Permintaan Kopi Robusta di Jepang meningkat 15%",
    time: "10 menit yang lalu",
    image: newsJapan
  },
  {
    id: 2,
    title: "Peluang Ekspor ke Jerman Semakin Terbuka",
    time: "2 jam yang lalu",
    image: cargoShipSunset
  },
  {
    id: 3,
    title: "Update Regulasi Ekspor Terbaru 2026",
    time: "1 hari yang lalu",
    image: cargoShip
  }
];
