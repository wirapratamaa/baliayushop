"use server";
import { CardIngredients } from "@/components/common/CardIngredients";
import { Hero } from "../components/hero/Hero";
import HomeSlider from "@/components/common/HomeSlider";
import CarouselList from "@/components/common/CarouselList";
import CarouselListProduct from "@/components/common/CarouselListProduct";
import { FaLeaf } from "react-icons/fa";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container flex flex-col gap-y-14 mt-16">
        {/* Product by category */}
        <HomeSlider
          title="Shop by Categories"
          id="shop-categories"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sit
          officia qui voluptas excepturi quisquam nesciunt eligendi."
        >
          <CarouselList />
        </HomeSlider>
        <HomeSlider
          title="Our Featured Product"
          id="shop-product"
          description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sit
          officia qui voluptas excepturi quisquam nesciunt eligendi."
          withArrow
        >
          <CarouselListProduct />
        </HomeSlider>

        {/* Natural Ingredient */}
        <div className="">
          <div className="flex flex-col justify-center items-center">
            <span className="text-primary-200 text-3xl font-bold">
              Product Excellence
            </span>
            <span className="text-sm mt-3 text-center">
              Bali Ayu Nature is a brand of natural beauty products with
              presenting the goodness of nature, as a form of our commitment to
              care for women to look beautiful without harming their health.
              Bali Ayu comes with the uniqueness of traditional concoction
              products combined with the benefits of wealth natural. We ensure
              the natural quality of products by selecting only ingredients safe
              and halal quality raw materials. We believe that the goodness of
              nature can maintain and care for the beauty of the skin of women.
            </span>
            <div className="grid grid-flow-col gap-10 mt-6 max-w-screen-lg">
              <CardIngredients>
                <Image alt="natural" src={"/natural.png"} fill />
              </CardIngredients>
              <CardIngredients>
                <Image alt="nontoxic" src={"/non-toxic.png"} fill />
              </CardIngredients>
              <CardIngredients>
                <Image alt="bpom" src={"/bpom.png"} fill />
              </CardIngredients>
              <CardIngredients>
                <Image alt="iso" src={"/iso-certification.png"} fill />
              </CardIngredients>
              <CardIngredients>
                <Image alt="mui" src={"/mui.png"} fill />
              </CardIngredients>
            </div>
          </div>
        </div>

        {/* Why buy our Product */}
      </div>
    </div>
  );
};

export default Home;
