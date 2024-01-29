export const paymentOptions = [
  {
    free: {
      price: null,
      duration: null,
      features: ["2 LISTINGS MAX", "ENJOY WHILE IT LASTS"],
    },
    basic: {
      price: 10000,
      duration: 1,
      features: [
        "Up to 10 Listings",
        "1 MONTH SUBSCRIPTION",
        "INSIDER MARKET TIPS",
      ],
    },
    plus: {
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
