import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

type LayoutPropsType = {
  children: React.ReactNode;
};

export const metadata = {
  title: "Bali Ayu Shop",
  description: "Aromatherapy",
};

export default function RootLayout({ children }: LayoutPropsType) {
  return (
    <html lang="en">
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
