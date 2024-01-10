"use server";
import { Hero } from "../components/hero/Hero";
import HomeSlider from "@/components/common/HomeSlider";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mt-10">
        {/* Product by category */}
        <HomeSlider />

        {/* Natural Ingredient */}
        {/* Why buy our Product */}
      </div>
    </div>
  );
};

export default Home;
