import { getProduct } from "@/lib/data";
import { ProductView } from "./ProductView";

type ParamsProps = {
  id: string;
};
interface ProductProps {
  params: ParamsProps;
}

export const generateMetadata = async ({ params }: ProductProps) => {
  const { id } = params;
  const product = await getProduct(id);
  return {
    title: `${product?.name} ${product?.variant}`,
    description:
      "Bali Ayu Nature is a brand of natural beauty products with presenting the goodness of nature, as a form of our commitment to care for women to look beautiful without harming their health. Bali Ayu comes with the uniqueness of traditional concoction products combined with the benefits of wealth natural. We ensure the natural quality of products by selecting only ingredients safe and halal quality raw materials. We believe that the goodness of nature can maintain and care for the beauty of the skin of women.",
  };
};

const Product = async ({ params }: ProductProps) => {
  const { id } = params;
  const product = await getProduct(id);

  console.log(product);
  return (
    <div className="container mt-10">
      <div className="flex flex-col justify-center items-center gap-5">
        <span className="font-bold text-xl text-primary-100 border-b-2 border-primary-100">
          {product?.name}
        </span>
        <div className="w-full">
          <ProductView src={product?.src} />
        </div>
      </div>
    </div>
  );
};

export default Product;
