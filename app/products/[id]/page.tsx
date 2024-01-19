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
    description: `${product?.name} ${product?.variant}`,
  };
};

const Product = async ({ params }: ProductProps) => {
  const { id } = params;
  const product = await getProduct(id);

  console.log(product);
  return (
    <div className="container mt-10">
      <div className="flex justify-center mb-5">
        <span className="text-2xl font-bold text-primary-200 border-b-2 border-primary-100">
          Product Detail
        </span>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div className="w-1/3">
          <ProductView src={`/assets/${product?.src}.jpg`} />
        </div>
        <div className="w-2/3">
          <div className="flex flex-col gap-5">
            <span className="font-bold text-xl">
              {product?.name} {product?.variant}
            </span>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsum
              accusantium voluptates, beatae laborum esse error vitae tenetur,
              incidunt nesciunt omnis animi doloremque asperiores provident?
              Veniam similique ratione nulla accusantium?
            </p>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Doloribus et beatae nisi debitis hic necessitatibus atque sapiente
              voluptatibus fugit! Sequi porro optio facilis reprehenderit
              praesentium neque placeat aperiam possimus veritatis?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
