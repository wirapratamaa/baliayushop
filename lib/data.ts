const products = [
  {
    category: "Aromatherapy",
    src: "scented-candle/4",
    data: [
      {
        id: "scented-candle",
        name: "Scented Candle",
        variant: "Relaxation",
        src: [
          "scented-candle/1",
          "scented-candle/2",
          "scented-candle/3",
          "scented-candle/4",
        ],
      },
      {
        id: "essential-oil",
        name: "Essential Oil",
        variant: "Relaxation",
        src: [
          "essential-oil/1",
          "essential-oil/2",
          "essential-oil/3",
          "essential-oil/4",
          "essential-oil/5",
          "essential-oil/6",
          "essential-oil/7",
          "essential-oil/8",
        ],
      },
      {
        id: "reed-diffusser",
        name: "Reed Diffusser",
        variant: "Relaxation",
        src: ["diffusser/1", "diffusser/2", "diffusser/3"],
      },
      {
        id: "bed-linen",
        name: "Bed Linen",
        variant: "Relaxation",
        src: ["bed-linen/1", "bed-linen/2", "bed-linen/3"],
      },
    ],
  },
  {
    category: "Body Care",
    src: "body-mist/3",
    data: [
      {
        id: "body-mist",
        name: "Body Mist",
        variant: "Relaxation",
        src: ["body-mist/1", "body-mist/2", "body-mist/3"],
      },
      {
        id: "body-scrub",
        name: "Body Scrub",
        variant: "Relaxation",
        src: ["body-scrub/1", "body-scrub/2", "body-scrub/3"],
      },
      {
        id: "body-cream",
        name: "Body Cream",
        variant: "Relaxation",
        src: ["body-cream/1", "body-cream/2"],
      },
      {
        id: "body-butter",
        name: "Body Butter",
        variant: "Relaxation",
        src: [
          "body-butter/1",
          "body-butter/2",
          "body-butter/3",
          "body-butter/4",
        ],
      },
      {
        id: "body-deodorant",
        name: "Deodorant",
        variant: "Relaxation",
        src: ["deodorant/1", "deodorant/2", "deodorant/3", "deodorant/4"],
      },
      {
        id: "natural-soap",
        name: "Natural Soap",
        variant: "Relaxation",
        src: [
          "soap/1",
          "soap/2",
          "soap/3",
          "soap/4",
          "soap/5",
          "soap/6",
          "soap/7",
          "soap/8",
          "soap/9",
        ],
      },
      {
        id: "massage-oil",
        name: "Massage Oil",
        variant: "Relaxation",
        src: [
          "massage-oil/1",
          "massage-oil/2",
          "massage-oil/3",
          "massage-oil/4",
          "massage-oil/5",
          "massage-oil/6",
          "massage-oil/7",
          "massage-oil/8",
          "massage-oil/9",
        ],
      },
    ],
  },
  {
    category: "Hair Care",
    src: "hair-oil/1",
    data: [
      {
        id: "hair-oil",
        name: "Hair Oil",
        variant: "Relaxation",
        src: ["hair-oil/1"],
      },
    ],
  },
];

const productsCatalog = [
  {
    category: "Natural Soap",
    title: "Natural Soap",
    src: [
      "/soap/1.jpg",
      "/soap/2.jpg",
      "/soap/3.jpg",
      "/soap/4.jpg",
      "/soap/5.jpg",
      "/soap/6.jpg",
      "/soap/7.jpg",
      "/soap/8.jpg",
      "/soap/9.jpg",
    ],
    variant: ["Lemongrass", "Spices", "Rose"],
  },
  {
    category: "Body Butter",
    title: "Body Butter",
    src: [
      "/body-butter/1.jpg",
      "/body-butter/2.jpg",
      "/body-butter/3.jpg",
      "/body-butter/4.jpg",
    ],
    variant: ["Sarahmania", "Jempiring"],
  },
  {
    category: "Bed Linen",
    title: "Bed Linen",
    src: ["/bed-linen/1.jpg", "/bed-linen/2.jpg", "/bed-linen/3.jpg"],
    variant: ["Relaxation", "Refreshing"],
  },
];

export const getProducts = async (category?: string | string[] | undefined) => {
  if (category) {
    return products.filter((product) => product.category === category);
  } else {
    return products;
  }
};

export const getProduct = async (id: string) => {
  return products
    .flatMap((product) => product.data)
    .find((item) => item?.id === id);
};
