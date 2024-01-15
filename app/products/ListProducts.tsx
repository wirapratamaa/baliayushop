import { CardProduct } from "@/components/common/CardProduct";
import { getProducts } from "@/lib/data";

type ListProductProps = {
  category?: string | string[] | undefined;
};

const ListProducts = async ({ category }: ListProductProps) => {
  const products = await getProducts(category);
  return (
    <div className="grid grid-flow-row gap-5">
      {products.map((item) => (
        <div className="flex flex-col" key={item.category}>
          <div className="text-xl font-semibold text-primary-100 mt-10">
            <span className="border-b-2 py-2 border-primary-100">
              {item.category}
            </span>
          </div>
          <div className="grid md:grid-cols-3 xl:grid-cols-4 gap-10 mt-10">
            {item.data.map((product) => (
              <CardProduct
                title={product.name}
                variant={product.variant}
                src={`/assets/${product.src}.jpg`}
                key={product.id}
                id={product.id}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ListProducts;
