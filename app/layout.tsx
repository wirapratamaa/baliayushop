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
  description: "Aromatherapy",
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
