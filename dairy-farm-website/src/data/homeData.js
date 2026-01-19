// src/data/homeData.js

// 1. Stats Data
export const statsData = [
  { icon: "🐄", text: "500+ Healthy Cows" },
  { icon: "🧪", text: "100% Lab Tested" },
  { icon: "🌱", text: "Eco Friendly Farm" },
  { icon: "🥛", text: "Zero Adulteration" },
];

// 2. Facility / Farm Data
export const facilityData = {
  image:
    "https://i.pinimg.com/1200x/27/2e/92/272e922510366dd2837fc1403f2a3b96.jpg",
  title: "Ultra-Hygienic Dairy Facility",
  description:
    "Our cows are raised in stress-free open farms. Milk is collected using automated milking systems and packed without human touch to ensure 100% safety.",
  features: [
    "Automatic Milking Machines",
    "RO Water Cleaning Process",
    "Temperature Controlled Storage (4°C)",
    "Environment Friendly Waste Management",
  ],
};

// 3. Testimonials Data
export const testimonialsData = [
  {
    id: 1,
    name: "Rahul Verma",
    text: "The purity and freshness are unmatched. Truly premium dairy experienced ever!",
    role: "Fitness Coach",
  },
  {
    id: 2,
    name: "Priya Singh",
    text: "My family trusts this dairy completely. Hygienic, healthy and delivered on time.",
    role: "Homemaker",
  },
  {
    id: 3,
    name: "Anish Khan",
    text: "Authentic desi ghee with real aroma. It reminds me of my village home.",
    role: "Chef",
  },
];

// 4. Product Popup Details (Professional Content)
// Note: Iska 'key' wahi rakhein jo aapke Database me Product ka 'name' hai.
export const productPopupDetails = {
  "Full Cream Milk": {
    heading: "Pure Farm Fresh Full Cream Milk",
    description:
      "Experience the richness of 100% pure buffalo milk. Delivered straight from our farm within hours of milking. No preservatives, no processing - just nature's goodness in a bottle. Ideal for making tea, coffee, curd, and sweets.",
    benefits: [
      "Rich in Calcium & Protein",
      "Thick Malai Guaranteed",
      "Pasteurized & Safe",
    ],
  },
  "Cow Milk": {
    heading: "A2 Desi Cow Milk",
    description:
      "Light, easy to digest, and highly nutritious. Our Desi Cow milk is perfect for kids and elders. Sourced from happy cows fed on organic green fodder.",
    benefits: ["Easy Digestion", "Boosts Immunity", "Naturally Sweet Taste"],
  },
  "Desi Ghee": {
    heading: "Traditional Bilona Ghee",
    description:
      "Made using the ancient Bilona method, our Ghee is golden nectar. It has a grainy texture and an aroma that fills the room. Perfect for Ayurvedic diet and daily cooking.",
    benefits: ["Ayurvedic Benefits", "High Smoke Point", "Omega-3 Fatty Acids"],
  },
  // Default content agar product ka naam match na ho
  default: {
    heading: "Premium Dairy Product",
    description:
      "Sourced from the finest breeds of cows and buffaloes. We ensure that every drop is tested for purity and quality before it reaches your doorstep.",
    benefits: ["100% Natural", "No Added Chemicals", "Farm Fresh"],
  },
};
