import Image from "next/image";
import React from "react";

export const CardAbout = ({ title, children, src, reverse = false }) => {
  return (
    <div
      className={`flex ${
        reverse
          ? "flex-col lg:flex-row-reverse"
          : "flex-col-reverse lg:flex-row"
      } items-center justify-center gap-10 mt-5 p-10 w-full`}
    >
      <div className="w-full lg:w-1/2">
        <div className="text-2xl text-primary-100 font-semibold">{title}</div>
        {children}
      </div>
      <div className="w-full lg:w-1/2 lg:px-10">
        <Image
          alt="Founder"
          className="w-full h-96 rounded-full bg-blue-400"
          src={src}
        />
      </div>
    </div>
  );
};
