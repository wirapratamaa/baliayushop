import { getProduct } from "@/lib/data";

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
    description: `${product?.name} ${product?.variant}`,
  };
};

const Product = async ({ params }: ProductProps) => {
  const { id } = params;

  const product = await getProduct(id);
  console.log(product);
  return (
    <div className="container">
      <div className="flex flex-col">{product?.name}</div>
    </div>
  );
};

export default Product;
