import { ArrayType } from "@/lib/type";
import Image from "next/image";
import Link from "next/link";

type CardProductProps = {
  title: string;
  src: string;
  variant: string;
  id: string;
};

export const CardProduct = ({ title, src, variant, id }: CardProductProps) => {
  return (
    <Link
      href={{
        pathname: `/products/${id}`,
      }}
      className="w-full shadow-md rounded-xl overflow-hidden group cursor-pointer"
    >
      <div className="min-h-60 md:min-h-72 xl:min-h-48 w-full relative">
        <Image
          alt={variant}
          src={src}
          className="object-center object-cover rounded-t-lg"
          fill
        />
      </div>
      <div className="capitalize text-lg py-6 font-semibold w-full text-center">
        <div className="">{title}</div>
        <div className="text-orange-400">{variant}</div>
      </div>
    </Link>
  );
};
