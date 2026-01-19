// src/data/aboutData.js
import OwnerImage from "../assets/sudhakar.jpeg";

// --- 1. PAGE TEXT CONTENT (Hardcoded Text Yahan Hai) ---
export const aboutPageContent = {
  hero: {
    titleBefore: "Preserving the",
    titleHighlight: "Legacy",
    titleAfter: "of Purity",
    descriptionPrefix: "Welcome to",
    brandName: "The Samrat Dairy Farm",
    descriptionSuffix:
      ". Where tradition meets technology to bring you milk just the way nature intended.",
  },
  story: {
    badgeYears: "10+",
    badgeText: "Years of Experience",
    subHeading: "WHO WE ARE",
    mainHeading: "More Than Just a Dairy Farm",
    para1Prefix: "It started with a simple thought:",
    para1Quote:
      '"Why is it so hard to find real, unadulterated milk in the city?"',
    para2Prefix: "At",
    para2Brand: "The Samrat Dairy Farm",
    para2Suffix:
      ", we believe that healthy milk comes from happy cows. Situated away from the city's pollution, our farm is home to purebred cows and buffaloes who graze on organic green fodder.",
  },
  process: {
    title: "From Our Farm to Your Glass",
    subtitle: "A journey of hygiene, care, and speed.",
  },
  values: {
    title: "Why Families Trust Samrat Dairy?",
  },
  founderSection: {
    quote:
      "We don't just sell milk; we deliver health. Our promise is simple: If we won't give it to our children, we won't sell it to you.",
    cite: "- Founder, The Samrat Dairy Farm",
    clickHint: "Click to meet the Founder",
  },
};

// --- 2. DYNAMIC DATA LISTS ---

// Founder Details
export const ownerDetails = {
  name: "Mr. Sudhakar Maurya",
  role: "Founder & Dairy Farmer",
  image: OwnerImage,
  bio: "Rooted in a rich agrarian heritage, Mr. Sudhakar Maurya identified a critical disconnect between urban consumption and authentic farm purity. Establishing The Samrat Dairy Farm in 2015 with a modest herd of five, his mission was singular: to bridge this gap by delivering unadulterated, farm-fresh milk that meets the same uncompromising standards he sets for his own family.",
  vision:
    "To bring back the era where milk was considered 'Amrit' (nectar), untouched by chemicals and processing. Healthy soil, happy cows, healthy people.",
};

// Story Features
export const storyFeatures = [
  {
    icon: "🌱",
    title: "Organic Fodder",
    desc: "Home-grown green feed",
  },
  {
    icon: "🧬",
    title: "No Hormones",
    desc: "100% Injection Free",
  },
];

// Process Steps
export const processSteps = [
  {
    id: "01",
    icon: "🐄",
    title: "Happy Cows",
    desc: "Cows graze freely and are fed a balanced diet of grains and greens.",
  },
  {
    id: "02",
    icon: "🤖",
    title: "Auto Milking",
    desc: "Contactless milking using advanced machines to ensure zero contamination.",
  },
  {
    id: "03",
    icon: "🔬",
    title: "Lab Testing",
    desc: "Every batch is tested for purity, fat content, and freshness before packing.",
  },
  {
    id: "04",
    icon: "🚚",
    title: "Fast Delivery",
    desc: "Chilled and delivered to your doorstep within 4 hours of milking.",
  },
];

// Values
export const valuesData = [
  {
    icon: "🚜",
    title: "Traditional Bilona Method",
    desc: "Our Ghee is made using the ancient wooden churner method for authentic aroma.",
  },
  {
    icon: "❄️",
    title: "Chilling Technology",
    desc: "Milk is chilled instantly to 4°C to stop bacterial growth naturally.",
  },
  {
    icon: "♻️",
    title: "Sustainable Farming",
    desc: "We recycle cow waste into biogas and manure. Zero waste farm.",
  },
];
