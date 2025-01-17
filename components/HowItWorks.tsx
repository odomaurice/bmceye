import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import Image from "next/image"

const HowItWorks = () => {
  return (
     <section id="how-it-works" className=" font-subtext my-12">
        <div className="flex-1 py-6 flex-col flex justify-center items-center">
        <h3 className="text-[40px] font-bold text-center">How it Works</h3>
        <p className="max-w-[470px]  text-center">Our Two easy steps are relatively easy and seamless. </p>
        </div>

        
        
    <Tabs defaultValue="register" className="md:w-[70%]  w-full mx-auto">
      <TabsList className="grid  w-full grid-cols-2">
        <TabsTrigger className="" value="register">Register</TabsTrigger>
        <TabsTrigger value="book-appointment">Book Appointment</TabsTrigger>
        
      </TabsList>
      <TabsContent value="register">
        <Card>
          <CardHeader>
        <CardTitle className="text-blueAlt  border-b-[3px] rounded-b-md border-blueAlt w-[30px] ">01</CardTitle>
        <h3 className="text-[20px] font-bold">Register</h3>
            <CardDescription className="max-w-[420px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 mx-auto">
          <div className="md:w-[480px]  md:h-[480px] w-[450px] h-[450px] mx-auto rounded-full shadow-xl bg-blue-300 md:flex hidden justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative overflow-hidden">
  <Image 
    src="/register.png"
    alt="About section image"
    className="w-[450px]  h-[450px]  object-contain mt-6"
    width={300}
    height={300}
    priority
  />
</div>
<Image 
    src="/register.png"
    alt="About section image"
    className="w-[450px]  h-[450px] md:hidden  object-contain mt-6"
    width={300}
    height={300}
    priority
  />

            
          
           
        
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="book-appointment">
        <Card>
          <CardHeader>
          <CardTitle className="text-blueAlt  border-b-[3px] rounded-b-md border-blueAlt w-[30px] ">02</CardTitle>
          <h3 className="text-[20px] font-bold">Book Appointment</h3>
            <CardDescription className="max-w-[420px]">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2 mx-auto">
          <div className="md:w-[480px] md:h-[480px] w-[450px] h-[450px] mx-auto rounded-full shadow-xl bg-blue-300 md:flex hidden justify-center items-center md:ml-10 ml-0 md:mt-0 mt-10 relative overflow-hidden">
  <Image 
    src="/book-doc.png"
    alt="About section image"
    className="w-[450px] h-[450px] overflow-hidden object-contain mt-6"
    width={300}
    height={300}
    priority
  />
</div>
<Image 
    src="/book-doc.png"
    alt="About section image"
    className="w-[450px] h-[450px] md:hidden overflow-hidden object-contain mt-6"
    width={300}
    height={300}
    priority
  />

            
          
           
        
          </CardContent>
          
          
        </Card>
      </TabsContent>
    </Tabs>
    </section>
  )
}

export default HowItWorks
