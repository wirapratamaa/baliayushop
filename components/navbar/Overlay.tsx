import Link from "next/link";
import { usePathname } from "next/navigation";

type OverlayType = {
  setNavbarOpen: (value: boolean) => void;
  navbarOpen: boolean;
};

const Overlay = ({ setNavbarOpen, navbarOpen }: OverlayType) => {
  const menuNav = [
    { path: "/", name: "Home" },
    { path: "/about", name: "About" },
    { path: "/products", name: "Products" },
    { path: "/contact", name: "Contact" },
  ];
  const pathname = usePathname();
  const isActive = (href: string) => pathname === href;
  return (
    <div
      className={`fixed flex top-0 left-0 w-full px-10 z-10 h-screen pt-24 bg-black/75 transform delay-100 transition-all duration-300 m-0 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-full"
      }`}
    >
      <ul className="flex flex-col items-start">
        {menuNav.map((item, i) => (
          <li className="nav-li" key={i}>
            <Link
              href={item.path}
              className={`nav-link ${
                isActive(item.path) ? "text-primary-100" : ""
              }`}
              onClick={() => {
                setNavbarOpen(false);
              }}
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Overlay;
