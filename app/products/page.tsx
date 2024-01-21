import ListProducts from "./ListProducts";

export const generateMetadata = async (props: Props) => {
  const { searchParams } = props;
  return {
    title: `${
      searchParams?.category ? `${searchParams.category}` : "Products"
    } Catalog`,
    description:
      "Bali Ayu Nature is a brand of natural beauty products with presenting the goodness of nature, as a form of our commitment to care for women to look beautiful without harming their health. Bali Ayu comes with the uniqueness of traditional concoction products combined with the benefits of wealth natural. We ensure the natural quality of products by selecting only ingredients safe and halal quality raw materials. We believe that the goodness of nature can maintain and care for the beauty of the skin of women.",
  };
};

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};
const Products = (props: Props) => {
  const { searchParams } = props;
  return (
    <div className="container">
      <div className="mt-10">
        <div className="text-2xl font-bold text-primary-200 text-center">
          Product Catalog{" "}
          <span className="text-orange-500">{props.searchParams.category}</span>
        </div>

        <ListProducts category={searchParams?.category} />
      </div>
    </div>
  );
};

export default Products;
