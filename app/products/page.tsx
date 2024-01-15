import ListProducts from "./ListProducts";

export const generateMetadata = async (props: Props) => {
  const { searchParams } = props;
  return {
    title: `${
      searchParams?.category ? `${searchParams.category}` : "Products"
    } Catalog`,
    description: `Our `,
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
          Product Catalog {props.searchParams.category}
        </div>

        <ListProducts category={searchParams?.category} />
      </div>
    </div>
  );
};

export default Products;
