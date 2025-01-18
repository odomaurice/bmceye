import React from "react";
import Container from "./Container";
import Image from "next/image";
import BackgroundDesign from "./BackgroundDesign";


const Hero = () => {
  return (
    <section
      id="home"
      className="overflow-hidden bg-pink-50 font-subtext py-20 sm:py-32 lg:pb-32 xl:pb-3"
    >
      <Container>
        <div className="lg:grid lg:grid-cols-12 lg:gap-x-8 lg:gap-y-20">
          {/* Right side */}
          <div className="relative z-10 mx-auto max-w-2xl  lg:col-span-7 lg:max-w-none lg:pt-6 xl:col-span-6">
            <h2 className=" font-bold xs:text-[48px] text-[45px] sm:text-[58px] xs:leading-[76.8px] leading-[50px] md:leading-[76.5px] w-full text-gray-900">
              Our Mission is your Vision.
            </h2>

            <p className="mt-6 text-[18px] text-gray-900">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <h3 className="mt-6 text-[20px] font-bold">Sponsored By</h3>
            <div className="mt-4 flex flex-wrap items-center gap-x-6 gap-4">
              <Image
                className="w-32 h-auto cursor-pointer"
                src={"/airbnb.png"}
                alt="logo"
                width={100}
                height={100}
              />
              <Image
                className="w-32 h-auto cursor-pointer"
                src={"/coinbase.png"}
                alt="logo"
                width={100}
                height={100}
              />

              <Image
                className="w-32 h-auto cursor-pointer"
                src={"/dropbox.png"}
                alt="logo"
                width={100}
                height={100}
              />

              <Image
                className="w-32 h-auto cursor-pointer"
                src={"/techstars.png"}
                alt="logo"
                width={100}
                height={100}
              />
            </div>
          </div>

          {/* Left Side */}
          <div className="relative mt-10  sm:mt-20 lg:col-span-5 lg:row-span-2 lg:mt-0 xl:col-span-6">
            <BackgroundDesign className="absolute left-1/2 top-4 h-[1026px] w-[1026px] -translate-x-1/3 stroke-gray-300/70 [mask-image:linear-gradient(to_bottom,white_20%,transparent_75%)] sm:top-16 sm:-translate-x-1/2 lg:-top-16 lg:ml-12 xl:-top-14 xl:ml-0" />
            <div className="-mx-4 h-[500px] px-10 [mask-image:linear-gradient(to_bottom,white_60%,transparent)] sm:mx-0 lg:absolute lg:-inset-x-10 lg:-bottom-20 lg:-top-10 lg:h-auto lg:px-0 lg:pt-10 xl:-bottom-32">
             
              <Image
                src={"/hero1.png"}
                alt="eyehero"
                width={300}
                height={300}
                className="min-w-[600px] mx-auto"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Hero;
