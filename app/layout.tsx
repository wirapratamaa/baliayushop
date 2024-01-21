import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

type LayoutPropsType = {
  children: React.ReactNode;
};

export const metadata = {
  title: { default: "Bali Ayu Shop", template: "%s | Bali Ayu Shop" },
  description:
    "Bali Ayu Nature is a brand of natural beauty products with presenting the goodness of nature, as a form of our commitment to care for women to look beautiful without harming their health. Bali Ayu comes with the uniqueness of traditional concoction products combined with the benefits of wealth natural. We ensure the natural quality of products by selecting only ingredients safe and halal quality raw materials. We believe that the goodness of nature can maintain and care for the beauty of the skin of women.",
};

export default function RootLayout({ children }: LayoutPropsType) {
  return (
    <html lang="en">
      <link rel="icon" href="/baliayu.svg" sizes="any" />
      <body className={inter.className}>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
