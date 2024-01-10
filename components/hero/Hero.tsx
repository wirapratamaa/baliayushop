import Image from "next/image";

export const Hero = () => {
  return (
    <div className="flex relative overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] xl:h-[450px] w-full bg-center bg-primary-400">
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
          <div className="bg-white/55 w-full lg:w-1/2 rounded shadow-md p-6">
            <h1 className="text-black text-xl">Your Title</h1>
            <h1 className="text-black text-sm mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem voluptate quaerat fuga ea quos ipsum animi eos!
              Doloribus saepe odio, labore rem laboriosam doloremque voluptas,
              aliquam a quam, consequatur sed.
            </h1>
            <div className="flex justify-center">
              <button className="bg-primary-100/35 text-primary-200 font-semibold rounded-md py-2.5 px-3 text-sm mt-5 hover:bg-primary-100 hover:text-white transition duration-300">
                View More
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
