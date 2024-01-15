import Image from "next/image";
import Link from "next/link";
import React from "react";

type CardHomeProps = {
  src?: string;
  category: string;
  id: string;
};

export const CardHome = ({
  src = "https://images.pexels.com/photos/12408950/pexels-photo-12408950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  category,
  id,
}: CardHomeProps) => {
  return (
    <Link
      href={{
        pathname: `/products`,
        query: {
          category,
        },
      }}
      className="w-full shadow-md rounded-xl overflow-hidden group cursor-pointer"
      key={id}
    >
      <div className="min-h-60 md:min-h-72 xl:min-h-96 w-full relative ">
        <Image
          alt="hero"
          src={src}
          className="object-center object-cover group-hover:opacity-40 opacity-100 transition duration-300 rounded-lg"
          fill
        />
        <div className="absolute top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 text-white transition duration-300 capitalize text-2xl bg-primary-200/70 py-8 font-semibold w-full text-center">
          <div className="">{category}</div>
        </div>
      </div>
    </Link>
  );
};
