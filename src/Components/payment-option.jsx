export const paymentOptions = [
  {
    free: {
      id: "free",
      name: "Free",
      price: null,
      duration: null,
      features: ["2 LISTINGS MAX", "ENJOY WHILE IT LASTS"],
    },
    basic: {
      id: "basic",
      name: "Basic",
      price: 10000,
      duration: 1,
      features: [
        "Up to 10 Listings",
        "1 MONTH SUBSCRIPTION",
        "INSIDER MARKET TIPS",
      ],
    },
    plus: {
      id: "plus",
      name: "PLUS",
      price: 50000,
      duration: 6,
      features: [
        "Up to 20 Listings",
        "6 MONTH SUBSCRIPTION",
        "AUTO GENERATE DESCRIPTION",
        "INSIDER MARKET TIPS",
      ],
    },
    premium: {
      id: "premium",
      name: "PREMIUM",
      price: 100000,
      duration: 12,
      features: [
        "Up to 35 Listings",
        "12 MONTH SUBSCRIPTION",
        "AUTO GENERATE DESCRIPTION",
        "ACCESS TO PROPERTY REQUESTS",
        "INSIDER MARKET TIPS",
      ],
    },
  },
];
