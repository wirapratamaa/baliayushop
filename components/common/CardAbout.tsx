import Image from "next/image";

type CardAboutProps = {
  title: string;
  reverse?: boolean;
  src: string;
  children?: React.ReactNode;
};

export const CardAbout = ({
  title,
  children,
  src,
  reverse = false,
}: CardAboutProps) => {
  return (
    <div
      className={`flex ${
        reverse
          ? "flex-col lg:flex-row-reverse"
          : "flex-col-reverse lg:flex-row"
      } justify-center gap-10 mt-10 md:p-10 w-full `}
    >
      <div className="w-full lg:w-1/2">
        <div className="text-2xl text-primary-100 font-semibold">{title}</div>
        {children}
      </div>
      <div className="w-full h-48 md:h-96 lg:w-1/2 lg:px-10 relative">
        <Image
          alt="Founder"
          src={src}
          fill
          className="object-contain"
          loading="lazy"
        />
      </div>
    </div>
  );
};
