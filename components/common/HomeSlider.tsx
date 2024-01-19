"use client";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";
import { ReactNode, useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import CarouselList from "./CarouselList";

type HomeSliderProps = {
  title: string;
  description?: string;
  children: ReactNode;
};

const HomeSlider = ({ title, description, children }: HomeSliderProps) => {
  const plugin = useRef(Autoplay({ delay: 3000, stopOnInteraction: true }));

  return (
    <div className="flex flex-col">
      <div className="flex justify-center" id="shop-categories">
        <span className="text-primary-200 text-3xl font-bold">{title}</span>
      </div>
      <div className="flex justify-center mt-3">
        <span className="text-base">{description}</span>
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
          <CarouselContent>{children}</CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeSlider;
