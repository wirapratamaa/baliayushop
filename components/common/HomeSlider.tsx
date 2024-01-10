"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { CardHome } from "./CardHome";
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";

const HomeSlider = () => {
  const plugin = useRef(Autoplay({ delay: 5000, stopOnInteraction: true }));
  return (
    <div className="flex flex-col">
      <div className="flex justify-center">
        <span className="text-primary-200 text-3xl font-bold">
          Our Featured Product
        </span>
      </div>
      <div className="flex justify-center mt-3">
        <span className="text-base">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore sit
          officia qui voluptas excepturi quisquam nesciunt eligendi.
        </span>
      </div>
      <div className="flex justify-center px-10 mt-10">
        <Carousel
          className="w-full max-w-screen-sm lg:max-w-screen-xl xl:max-w-screen-2xl"
          opts={{
            align: "start",
            loop: true,
            dragFree: true,
          }}
          plugins={[plugin.current]}
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.play}
        >
          <CarouselContent>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardHome title="Aromatherapy" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardHome title="Aromatherapy" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardHome title="Aromatherapy" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardHome title="Aromatherapy" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardHome title="Aromatherapy" />
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <CardHome title="Aromatherapy" />
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeSlider;
