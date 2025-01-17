import { features } from "@/constants/index";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";


interface FeatureProps {
    icon: string;
    title: string;
    content: string;
    index: number;
}
const FeatureCard: React.FC<FeatureProps> = ({ icon, title, content, index }) => (
  <div
    className={`flex md:flex-row flex-col md:p-6 rounded-[20px] ${
      index !== features.length - 1 ? "mb-6" : "mb-0"
    } feature-card`}
  >
    <div
      className={`w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue`}
    >
      <Image src={icon} alt="star" width={100} height={100} className="md:w-[50%]  size-[80%]  md:h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold underline text-gray-200 text-[20px] md:text-[18px] leading-[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-dimWhite text-[14px] md:text-[13px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Features = () => (
  <section id="features" className="flex md:flex-row flex-col px-6 sm:py-6 py-6">
   

    <div className="flex-1  flex-col flex mt-6 items-start">
      <h2 className=" font-semibold xs:text-[48px] text-3xl sm:text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
        What Do We Do At BMC? <br className="sm:block hidden" />
      </h2>
      <p className=" max-w-[470px] mt-5 font-poppins font-normal text-dimWhite text-[15px] md:text-[14px] leading-[30.8px]">
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
      </p>
      <Link href="/register">
      <Button  className='text-white md:flex hidden bg-blueAlt hover:border-blue-600 hover:bg-white hover:text-blue-600 transition-all ease-in-out duration-700  p-6 mt-[10px]'>Book a Session</Button>
      </Link>
    </div>

    <div className="flex-1 justify-center items-center flex md:ml-10 ml-0 md:mt-0 mt-10 relative flex-col">
      {features.map((feature, index) => (
        <FeatureCard key={feature.id} {...feature} index={index} />
      ))}
      <Link className="w-full" href="/register">
      <Button className='text-white md:hidden flex w-full  bg-blueAlt hover:border-blue-600 hover:bg-white hover:text-blue-600 transition-all ease-in-out duration-700  p-6 mt-[10px]'>Book a Session</Button>
      </Link>
    </div>
  </section>
);

export default Features;
