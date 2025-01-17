import Hero from "@/components/Hero";

//import Footer from '@/components/Footer'

import { IoIosArrowUp } from "react-icons/io";
import { BsChatDotsFill } from "react-icons/bs";
import Link from "next/link";
import Features from "@/components/Features";
import About from "@/components/About";
import HowItWorks from "@/components/HowItWorks";
import PricingLayout from "@/components/PricingLayout";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <div className="font-subtext max-w-[100%]  text-gray-800">
      <Hero />
      <div
        className={`bg-black text-gray-100 rounded-3xl sm:px-5 px-6 flex justify-center items-center`}
      >
        <div className={`xl:max-w-[1280px] w-full`}>
          <Features />
        </div>
      </div>

      <div
        className={`bg-gray-100 text-gray-900 rounded-3xl mb-0  px-6 flex justify-center items-center`}
      >
        <About />
        {/* <div className={`xl:max-w-[1280px] w-full`}>
        <Testimonials />
        </div> */}
      </div>

      <div
        className={`bg-black font-subtext text-gray-100 rounded-3xl sm:px-16 px-6 flex justify-center items-center`}
      >
        <div className={`xl:max-w-[1280px] w-full`}>
          <HowItWorks/>
        </div>
      </div>

      <div
        className={`bg-pink-50 text-gray-900 rounded-3xl mb-0  px-6 flex flex-col justify-center items-center`}
      >
        <PricingLayout />
        <FAQ/>
        {/* <div className={`xl:max-w-[1280px] w-full`}>
        <Testimonials />
        </div> */}
      </div>

      <Link href="#">
        <IoIosArrowUp className="text-[40px] scroll-smooth text-gray-800 right-[5px] fixed bottom-[5px] border border-lightGreen hover:border-secondary cursor-pointer rounded-full p-1 " />
      </Link>

      <Link href="#">
        <BsChatDotsFill className="text-[40px] text-gray-900 left-[5px] fixed bottom-[5px] border border-gray-800hover:border-secondary cursor-pointer rounded-full p-1 " />
      </Link>

      <div
        className={`bg-black text-gray-100 sm:px-16 px-6 flex justify-center items-center`}
      >
        <div className={`xl:max-w-[1280px] w-full`}><Footer/></div>
      </div>
    </div>
  );
};

export default Home;
