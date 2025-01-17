"use client";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { FaEye } from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "Features", href: "#features" },
  { name: "About", href: "#about" },
  { name: "How it Works", href: "#how-it-works" },
  { name: "Pricing", href: "#pricing" },

  { name: "Contact Us", href: "#contact" },
];

const Header = () => {
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };
  const closeMenu = () => {
    setMenu(false);
  };
  const pathname = usePathname();

  return (
    <div className=" bg-pink-50 h-[75px] sticky sm:top-0 font-subtext border-b-2 font-semibold    md:shadow-none z-50 ">
      {/* DESKTOP */}

      <div className=" hidden w-full h-full sm:flex justify-between items-stretch px-2 md:px-4 ">
        <div className=" flex items-center">
          <Link href="/">
            <div className="mt-2 ml-6 font-bold">
              <FaEye className="text-[30px] text-blueAlt inline mb-2 mr-1" />
              <p className="font-header text-[30px] inline">
                BMC<span className="font-subtext">EYE</span>
              </p>
            </div>
            
          </Link>
        </div>

        <div className=" flex h-full pt-[30px] ">
          <div className="flex gap-8 font-subtext xl:gap-[50px] sm:text-[14px] md:text-[14px] ">
            {navLinks.map((link) => {
              const isActive = pathname.startsWith(link.href);
              return (
                <Link
                  href={link.href}
                  key={link.name}
                  className={
                    isActive
                      ? "font-bold border-blue-600 border-b-2 "
                      : "font-medium"
                  }
                >
                  {link.name}
                </Link>
              );
            })}
          </div>
        </div>

        <div className="flex items-center  gap-1 md:gap-3 lg:gap-4">
          <div className="bg-blue-600 text-white hover:border-2 hover:border-blue-600 rounded-md  md:rounded-[10px] flex items-center hover:bg-white hover:text-blue-600 text-[12px] md:text-[13px] px-4 md:px-6 justify-center transition-all ease-in-out duration-700 py-2 md:py-[13px] sm:block">
            <Link href="/login">Book Appointment</Link>
          </div>

          {/* <div className=" flex rounded-[10px] justify-center items-center  bg-dimOrange hover:bg-orange-600 text-white text-[12px]  md:text-[14px] md:px-6 px-4 py-2 md:py-[11px] sm:block">
              <Link href="/register">Register</Link>
            </div> */}
        </div>
      </div>

      {/* MOBILE */}
      <div
        className={` block sm:hidden  fixed top-0 w-full z-[999]   py-6 animate-in fade-in zoom-in  ${
          menu ? " bg-white py-2" : "bg-white"
        } `}
      >
        <div className="flex justify-between  mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
          <Link href="/">
            <div className="mt-2 ml-6 font-bold">
              <FaEye className="text-[30px] text-blueAlt inline mb-2 mr-1" />
              <p className="font-header hidden md:block text-[30px] ">
                BMC<span className="font-subtext">EYE</span>
              </p>
            </div>
           
          </Link>
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <X
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              />
            ) : (
              <Image
                src={"/menu.svg"}
                alt="logo"
                width={200}
                height={200}
                className="cursor-pointer w-[30px] h-[30px] animate-in fade-in zoom-in"
                onClick={toggleMenu}
              />
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right ">
            <div className="flex flex-col gap-8 mt-8 mx-4 ">
              <div className="flex gap-[20px] font-header xl:gap-[50px] text-[16px] flex-col select-none ">
                {navLinks.map((link) => {
                  const isActive = pathname.startsWith(link.href);
                  return (
                    <Link
                      onClick={closeMenu}
                      href={link.href}
                      key={link.name}
                      className={
                        isActive
                          ? "font-bold text-lightGreen "
                          : "font-semibold"
                      }
                    >
                      {link.name}
                    </Link>
                  );
                })}
              </div>

              <div className="flex flex-col  items-center mr-2 gap-6">
                <Button
                  onClick={closeMenu}
                  asChild
                  className=" bg-blueAlt text-white hover:border-2 hover:border-blue-600 hover:text-blue-600 transition-all ease-in-out duration-700 w-full items-center    text-[16.5px] px-6 py-2 lg:block"
                >
                  <Link href="/register">Register</Link>
                </Button>

                {/* <Button
                   onClick={closeMenu}
                    asChild
                    className=" bg-dimOrange w-full hover:bg-orange-600 text-white  text-[16.5px] px-6 py-2 lg:block"
                  >
                    <Link href="/login">Login</Link>
                  </Button> */}
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Header;
