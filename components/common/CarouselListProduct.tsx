import { getProducts } from "@/lib/data";
import { CarouselItem } from "../ui/carousel";
import { Fragment } from "react";
import { CardHomeProduct } from "./CardHomeProduct";

const CarouselListProduct = async () => {
  const product = await getProducts();
  return (
    <>
      {product.map((item, i) => (
        <Fragment key={i}>
          {item?.data.map((prod) => (
            <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={prod.id}>
              <CardHomeProduct
                title={prod.name}
                variant={prod.variant}
                src={`/assets/${prod.src}.jpg`}
                id={prod.id}
              />
            </CarouselItem>
          ))}
        </Fragment>
      ))}
    </>
  );
};

export default CarouselListProduct;
