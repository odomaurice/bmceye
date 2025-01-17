//import CIA from '@/images/2FA.svg';
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"

const About = () =>  (
    <section id="about" className="flex w-full bg-pink-50 md:flex-row flex-col sm:py-16 px-6 py-6">
      <div className="flex justify-center w-full flex-1 items-start   flex-col">
        <h2 className=" font-semibold xs:text-[48px] text-3xl  sm:text-[50px] text-gray-900  leading-[50px] w-full">Book a Session Today.</h2>
        <p className={` font-normal text-gray-800 text-[14px] leading-[25px] max-w-[470px] mt-5`}>
        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.

        </p>
        
        <Link href="/register">
      <Button  className='text-white bg-blueAlt hover:border-blue-600 hover:bg-white hover:text-blue-600 transition-all ease-in-out duration-700  p-6 mt-[10px]'>Book a Session</Button>
      </Link>
  

      </div>

      <div className="flex-1 rounded-full shadow-xl bg-blue-300 flex  justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative">
        <Image 
            src={"/about.png"}
            alt='card_img'
            className='w-[70%] mt-6'
            width={500}
            height={500}
        
        />

         

      </div>

    </section>
  )


export default About