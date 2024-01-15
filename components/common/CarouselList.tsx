import { getProducts } from "@/lib/data";
import { CarouselItem } from "../ui/carousel";
import { CardHome } from "./CardHome";

const CarouselList = async () => {
  const product = await getProducts();
  return (
    <>
      {product.map((item) => (
        <CarouselItem className="md:basis-1/2 lg:basis-1/3" key={item.category}>
          <CardHome
            category={item.category}
            src={`/assets/${item.src}.jpg`}
            id={item.category}
          />
        </CarouselItem>
      ))}
    </>
  );
};

export default CarouselList;
