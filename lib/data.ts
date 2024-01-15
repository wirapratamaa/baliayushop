import { ArrayType } from "./type";

const products = [
  {
    category: "Aromatherapy",
    src: "scented-candle-relaxation",
    data: [
      {
        id: "scented-candle-relaxation",
        name: "Scented Candle",
        variant: "Relaxation",
        src: "scented-candle-relaxation",
      },
      {
        id: "natural-soap-lemongrass",
        name: "Natural Soap",
        variant: "Lemongrass",
        src: "natural-soap-lemongrass",
      },
      {
        id: "natural-soap-spices",
        name: "Natural Soap",
        variant: "Spices",
        src: "natural-soap-spices",
      },
      {
        id: "body-scrub-lovely-sisy",
        name: "Body Scrub",
        variant: "Lovely Sisy",
        src: "body-scrub-lovely-sisy",
      },
      {
        id: "deodorant-jempiring",
        name: `eau de parfum Deodorant`,
        variant: "Jempiring",
        src: "deodorant-jempiring",
      },
      {
        id: "pure-aloe-vera-gel",
        name: "Pure Aloe Vera Gel",
        variant: "",
        src: "pure-aloe-vera-gel",
      },
      {
        id: "reed-diffuser-clear-your-mind",
        name: "Reed Diffuser",
        variant: "Clear Your Mind",
        src: "reed-diffuser-clear-your-mind",
      },
      {
        id: "hair-oil-candlenut",
        name: "Hair Oil",
        variant: "Candlenut",
        src: "hair-oil-candlenut",
      },
    ],
  },
  {
    category: "Body Lotion",
    src: "body-scrub-lovely-sisy",
    data: [
      {
        id: "scented-candle-relaxation",
        name: "Scented Candle",
        variant: "Relaxation",
        src: "scented-candle-relaxation",
      },
      {
        id: "natural-soap-lemongrass",
        name: "Natural Soap",
        variant: "Lemongrass",
        src: "natural-soap-lemongrass",
      },
      {
        id: "natural-soap-spices",
        name: "Natural Soap",
        variant: "Spices",
        src: "natural-soap-spices",
      },
      {
        id: "body-scrub-lovely-sisy",
        name: "Body Scrub",
        variant: "Lovely Sisy",
        src: "body-scrub-lovely-sisy",
      },
      {
        id: "deodorant-jempiring",
        name: `eau de parfum Deodorant`,
        variant: "Jempiring",
        src: "deodorant-jempiring",
      },
      {
        id: "pure-aloe-vera-gel",
        name: "Pure Aloe Vera Gel",
        variant: "",
        src: "pure-aloe-vera-gel",
      },
      {
        id: "reed-diffuser-clear-your-mind",
        name: "Reed Diffuser",
        variant: "Clear Your Mind",
        src: "reed-diffuser-clear-your-mind",
      },
      {
        id: "hair-oil-candlenut",
        name: "Hair Oil",
        variant: "Candlenut",
        src: "hair-oil-candlenut",
      },
    ],
  },
  {
    category: "Candle",
    src: "body-scrub-lovely-sisy",
    data: [
      {
        id: "scented-candle-relaxation",
        name: "Scented Candle",
        variant: "Relaxation",
        src: "scented-candle-relaxation",
      },
      {
        id: "natural-soap-lemongrass",
        name: "Natural Soap",
        variant: "Lemongrass",
        src: "natural-soap-lemongrass",
      },
      {
        id: "natural-soap-spices",
        name: "Natural Soap",
        variant: "Spices",
        src: "natural-soap-spices",
      },
      {
        id: "body-scrub-lovely-sisy",
        name: "Body Scrub",
        variant: "Lovely Sisy",
        src: "body-scrub-lovely-sisy",
      },
      {
        id: "deodorant-jempiring",
        name: `eau de parfum Deodorant`,
        variant: "Jempiring",
        src: "deodorant-jempiring",
      },
      {
        id: "pure-aloe-vera-gel",
        name: "Pure Aloe Vera Gel",
        variant: "",
        src: "pure-aloe-vera-gel",
      },
      {
        id: "reed-diffuser-clear-your-mind",
        name: "Reed Diffuser",
        variant: "Clear Your Mind",
        src: "reed-diffuser-clear-your-mind",
      },
      {
        id: "hair-oil-candlenut",
        name: "Hair Oil",
        variant: "Candlenut",
        src: "hair-oil-candlenut",
      },
    ],
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
