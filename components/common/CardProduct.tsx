import Image from "next/image";
import Link from "next/link";

type CardProductProps = {
  title: string;
  src: string;
  id: string;
};

export const CardProduct = ({ title, src, id }: CardProductProps) => {
  return (
    <Link
      href={{
        pathname: `/products/${id}`,
      }}
      className="w-full shadow-md rounded-xl overflow-hidden group cursor-pointer transform hover:scale-110 duration-200"
    >
      <div className="min-h-60 md:min-h-72 xl:min-h-48 w-full relative">
        <Image
          alt={title}
          src={src}
          className="object-center object-cover rounded-t-lg"
          fill
        />
      </div>
      <div className="capitalize text-lg py-6 font-semibold w-full text-center">
        <div className="">{title}</div>
      </div>
    </Link>
  );
};
