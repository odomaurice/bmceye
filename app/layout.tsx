import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
//import Footer from "@/components/Footer";
import Link from "next/link";
import { IoIosArrowUp } from "react-icons/io";

export const metadata: Metadata = {
  title: "BMCEYE",
  description: "",
};



export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        
          <main className="bg-stone-100">
            <Header />
            {children}
            {/* <Footer /> */}
            <Link href="#">
            <IoIosArrowUp className="text-[40px] scroll-smooth text-gray-900 right-[5px] fixed bottom-[5px] border-2 shadow-xl border-lightGreen hover:border-green-500 cursor-pointer rounded-full p-1 " />
          </Link>
          </main>
         
      </body>
    </html>
  );
}
