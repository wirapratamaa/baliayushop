"use server";
import Image from "next/image";
import { Hero } from "../components/hero/Hero";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const Home = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <div className="container mt-10">
        {/* Product by category */}
        <div className="flex justify-center px-10">
          <Carousel className="w-full max-w-screen-sm lg:max-w-screen-xl xl:max-w-screen-2xl">
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="h-96 w-full relative">
                  <Image
                    alt="hero"
                    src={
                      "https://images.pexels.com/photos/12408950/pexels-photo-12408950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    className="object-center object-cover"
                    layout="fill"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="h-96 w-full relative">
                  <Image
                    alt="hero"
                    src={
                      "https://images.pexels.com/photos/12408950/pexels-photo-12408950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    className="object-center object-cover"
                    layout="fill"
                  />
                </div>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <div className="h-96 w-full relative">
                  <Image
                    alt="hero"
                    src={
                      "https://images.pexels.com/photos/12408950/pexels-photo-12408950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    }
                    className="object-center object-cover"
                    layout="fill"
                  />
                </div>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Natural Ingredient */}
        {/* Why buy our Product */}
      </div>
    </div>
  );
};

export default Home;
