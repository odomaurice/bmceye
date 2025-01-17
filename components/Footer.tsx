"use client"
import { footerLinks, socialMedia } from "@/constants/index";
import Image from "next/image"


const ArrowIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg viewBox="0 0 16 6" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M16 3 10 .5v2H0v1h10v2L16 3Z"
      />
    </svg>
  );
};

const NewsletterForm = () => {
  return (
    <form className="max-w-sm font-poppins">
      <h2 className=" text-medium font-semibold tracking-wider ">
        Sign up to our newsletter
      </h2>
      <p className="mt-4 text-normal text-gray-200">
        Subscribe to get the latest news, articles, resources and
        inspiration.
      </p>
      <div className="relative mt-6">
        <input
          type="email"
          placeholder="Email address"
          autoComplete="email"
          aria-label="Email address"
          className="block w-full rounded-2xl border border-gray-100 bg-transparent py-4 pl-6 pr-20 text-base/6 text-white ring-4 ring-transparent transition placeholder:text-neutral-500 focus:border-neutral-100 "
        />
        <div className="absolute inset-y-1 right-1 flex justify-end">
          <button
            type="submit"
            aria-label="Submit"
            className="flex aspect-square h-full items-center justify-center rounded-xl bg-white text-black transition hover:bg-neutral-200"
          >
            <ArrowIcon className="w-4" />
          </button>
        </div>
      </div>
    </form>
  );
};

const Footer = () => (
  <section className={`flex justify-center  items-center sm:py-16 py-6 flex-col`}>
    <div className={`flex justify-center items-start md:flex-row flex-col mb-8 w-full`}>
      

      <div className="flex-[1.5] w-full flex mt-12 flex-row justify-between flex-wrap md:mt-0 mb-8 mt-10">
        {footerLinks.map((footerlink) => (
          <div key={footerlink.title} className={`flex flex-col ss:my-0 my-4 min-w-[150px]`}>
            <h4 className="font-poppins font-medium text-[16px] leading-[27px] text-white">
              {footerlink.title}
            </h4>
            <ul className="list-none mt-4">
              {footerlink.links.map((link, index) => (
                <li
                  key={link.name}
                  className={`font-poppins font-normal text-[14px] leading-[24px] text-dimWhite hover:text-secondary cursor-pointer ${
                    index !== footerlink.links.length - 1 ? "mb-4" : "mb-0"
                  }`}
                >
                  {link.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="flex text-white lg:justify-end ml-0 sm:ml-3">
            <NewsletterForm />
          </div>
    </div>

   

    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-poppins font-normal text-center text-[14px] leading-[27px] text-white">
        Copyright Ⓒ {new Date().getFullYear()} BMCEYE Associates. All Rights Reserved.
      </p>

      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social, index) => (
          <Image
            key={social.id}
            src={social.icon}
            alt={social.id}
            width={100}
            height={100}
            className={`w-[21px] h-[21px] text-white object-contain cursor-pointer ${
              index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
            }`}
            onClick={() => window.open(social.link)}
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;