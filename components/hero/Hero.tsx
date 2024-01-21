import Image from "next/image";
import Link from "next/link";

export const Hero = () => {
  return (
    <div className="flex relative overflow-hidden md:h-[350px] xl:h-[450px] w-full bg-center bg-primary-400">
      <Image
        alt="hero"
        src={
          "https://images.pexels.com/photos/12408950/pexels-photo-12408950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        }
        className="object-center object-cover h-auto"
        fill
      />
      <div className="md:container z-10">
        <div className="flex flex-col justify-center items-center h-full">
          <div className="bg-white/70 w-full lg:w-3/4 rounded shadow-md p-6">
            <h1 className="text-black text-xl text-center">Bali Ayu Shop</h1>
            <h1 className="text-black text-sm md:text-base mt-2 text-center">
              Bali Ayu Shop is Spa, Aromatheraphy, and also Handicraft store in
              Gianyar with a natural touch of the product
            </h1>

            <div className="flex justify-center">
              <Link
                href={"#shop-categories"}
                scroll={true}
                className="bg-primary-100/35 text-primary-200 font-semibold rounded-md py-2.5 px-3 text-sm mt-5 hover:bg-primary-100 hover:text-white transition duration-300"
              >
                View More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
