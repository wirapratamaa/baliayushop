import { CardAbout } from "@/components/common/CardAbout";

export const metadata = {
  title: "About",
  description:
    "Bali Ayu Nature is a brand of natural beauty products with presenting the goodness of nature, as a form of our commitment to care for women to look beautiful without harming their health. Bali Ayu comes with the uniqueness of traditional concoction products combined with the benefits of wealth natural. We ensure the natural quality of products by selecting only ingredients safe and halal quality raw materials. We believe that the goodness of nature can maintain and care for the beauty of the skin of women.",
};

const About = () => {
  return (
    <div className="container mt-10">
      <div className="flex flex-col items-center">
        <div className="text-2xl font-bold text-primary-200 border-b-2 border-primary-100">
          ABOUT
        </div>
        <CardAbout title={"Background Stories"} src={"/works.png"}>
          <div className="mt-4 text-base text-justify">
            Meet our founder, <span className="font-bold">Komang Yatik</span>{" "}
            has a concern for the abundance of coconuts and coconut waste that
            comes from religious ceremony waste into an aromatherapy craft
            product and a spa product that has high economic value.
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

        <CardAbout title={"Profile"} src={"/works.png"} reverse={true}>
          <div className="mt-10">
            <span className="text-justify">
              Currently, there are 25 working people from around our
              neighbourhood who come directly to our factory for work and there
              are 25 other mothers who take their work to the factory and do it
              at home because their baby cannot be left behind. They can do it
              at home while looking after their baby and bring it back to the
              factory after they finish.
            </span>
          </div>
        </CardAbout>
      </div>
    </div>
  );
};

export default About;
