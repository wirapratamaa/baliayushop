"use server";
import { CardIngredients } from "@/components/common/CardIngredients";
import { Hero } from "../components/hero/Hero";
import HomeSlider from "@/components/common/HomeSlider";
import CarouselList from "@/components/common/CarouselList";
import CarouselListProduct from "@/components/common/CarouselListProduct";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container flex flex-col gap-y-14 mt-16">
        {/* Product by category */}
        <HomeSlider
          title="Shop by Categories"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sit
          officia qui voluptas excepturi quisquam nesciunt eligendi."
        >
          <CarouselList />
        </HomeSlider>
        <HomeSlider
          title="Our Featured Product"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sit
          officia qui voluptas excepturi quisquam nesciunt eligendi."
        >
          <CarouselListProduct />
        </HomeSlider>

        {/* Natural Ingredient */}
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <span className="text-primary-200 text-3xl font-bold">
              100% Natural Organic Ingredient
            </span>
            <span className="text-base mt-3">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
              sit officia qui voluptas excepturi quisquam nesciunt eligendi.
            </span>
            <div className="grid grid-cols-2 md:grid-cols-6 gap-10 mt-6 max-w-screen-lg">
              <CardIngredients title="" />
              <CardIngredients title="" />
              <CardIngredients title="" />
              <CardIngredients title="" />
              <CardIngredients title="" />
              <CardIngredients title="" />
            </div>
          </div>
        </div>

        {/* Why buy our Product */}
      </div>
    </div>
  );
};

export default Home;
