import { CardAbout } from "@/components/common/CardAbout";
import Image from "next/image";

const About = () => {
  return (
    <div className="container mt-5">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-primary-200 border-b-2 border-primary-100">
          ABOUT
        </div>
        <CardAbout title={"Background Stories"} src={""}>
          <div className="mt-4 text-base text-justify">
            Meet our founder,{" "}
            <span className="font-bold">Wayan Putri Antari</span> has a concern
            for the abundance of coconuts and coconut waste that comes from
            religious ceremony waste into an aromatherapy craft product and a
            spa product that has high economic value.
            <p className="mt-2">
              Established on 1 November 1999 located in Gianyar Bali. Our
              products are sourced from local farmers from all over Bali
              Indonesia.
            </p>
            <p className="mt-2">
              We focus on producing aromatherapy crafts and spa products that
              utilize natural resources and waste from ceremonies which are then
              processed into unique products that have a high selling value.
            </p>
            <p className="mt-2">
              We do it 100% handmade while supporting the many talented
              Indonesian craftsmen around our factory. In addition, we want our
              team to live well. Ensure that craftsmen have good work and living
              space.
            </p>
          </div>
        </CardAbout>
      </div>
    </div>
  );
};

export default About;
