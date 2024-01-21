import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { FaMapLocation } from "react-icons/fa6";
import { MdAttachEmail } from "react-icons/md";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <div className="mt-auto">
      <div className="mt-10 bg-primary-200">
        <div className="flex flex-col md:flex-row container justify-around py-10 gap-10">
          <div className="flex flex-col gap-4 w-full md:w-1/3">
            <span className="text-white text-xl font-bold">
              Bali Ayu Shop © {year}
            </span>
            <span className="text-white text-sm text-justify">
              Bali Ayu Shop is Spa, Aromatheraphy, and also Handicraft store in
              Gianyar with a natural touch of the product
            </span>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/5 text-sm">
            <span className="text-white text-lg font-bold">Contact Us</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex flex-row space-x-1 items-center text-white"
              href="https://wa.me/6282237742317"
            >
              <FaWhatsapp />
              <span>+62 82237742317</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex flex-row space-x-1 items-center text-white"
              href="https://maps.app.goo.gl/CSY9dyu7A5z816G7A"
            >
              <FaMapLocation />
              <span>Bali Ayu Shop</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex flex-row space-x-1 items-center text-white"
              href="mailto:baliayushop@gmail.com"
            >
              <MdAttachEmail />
              <span>baliayushop@gmail.com</span>
            </a>
          </div>
          <div className="flex flex-col gap-4 w-full md:w-1/5 text-sm">
            <span className="text-white text-lg font-bold">Follow Us</span>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex flex-row space-x-1 items-center text-white"
              href="https://www.instagram.com/baliayushop.id/"
            >
              <FaInstagram />
              <span>baliayushop.id</span>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-pointer flex flex-row space-x-1 items-center text-white"
              href="https://web.facebook.com/baliayunature"
            >
              <FaFacebook />
              <span>Bali Ayu Official shop</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
