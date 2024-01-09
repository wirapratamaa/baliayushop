"use client";

import Link from "next/link";
import Overlay from "./Overlay";
import { useState } from "react";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const menuNav = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/products", name: "Products" },
    { path: "/contact", name: "Contact" },
  ];
  const [navbarOpen, setNavbarOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href) => pathname === href;
  return (
    <nav className="bg-primary-100 sticky w-full z-20 top-0 start-0">
      <div className=" flex flex-wrap items-center justify-between py-4 px-4 md:px-16">
        <Link
          href={"/"}
          className="flex items-center space-x-3 rtl:space-x-reverse"
        >
          <span className="rounded-full border bg-white p-2 text-sm">LOGO</span>
        </Link>
        <div className="flex md:hidden md:order-2 md:space-x-0 rtl:space-x-reverse">
          <button
            className="lg:hidden flex top-0 right-0 z-20 relative w-10 h-10 text-white focus:outline-none"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <div className="absolute w-5 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
              <span
                className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  navbarOpen ? "rotate-45 delay-200" : "-translate-y-1.5"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${
                  navbarOpen ? "w-0 opacity-50" : "w-5 delay-200 opacity-100"
                }`}
              ></span>
              <span
                className={`absolute h-0.5 w-5 bg-white transform transition duration-300 ease-in-out ${
                  navbarOpen ? "-rotate-45 delay-200" : "translate-y-1.5"
                }`}
              ></span>
            </div>
          </button>
          <Overlay setNavbarOpen={setNavbarOpen} navbarOpen={navbarOpen} />
        </div>
        <div className="items-center justify-end hidden w-fit md:flex md:order-1">
          <ul className="flex justify-end p-4 md:p-0 mt-4 font-medium rounded-lg md:space-x-6 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
            {menuNav.map((item, i) => (
              <li key={i}>
                <Link
                  href={item.path}
                  className={`block py-2 px-3 md:px-2 hover:text-white hover:bg-primary-300/20 rounded transition duration-300 ${
                    isActive(item.path) ? "text-white" : ""
                  }`}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
