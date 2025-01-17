'use client'
import { useState } from "react";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
  } from "@/components/ui/accordion"

  
  const FAQ = () => {

  const [openItem, setOpenItem] = useState<string | undefined>(undefined);

  const handleChange = (value: string) => {
    setOpenItem(value === openItem ? undefined : value); // Toggle the accordion item
  };

    return (
        <section className="w-full my-12">
            <h3 className="md:text-[40px] text-3xl font-subtext text-center font-bold mt-16 mb-6 ">Frequently Asked Questions</h3>
            <Accordion
        type="single"
        collapsible
        className="w-full md:px-12"
        value={openItem} // Controlled accordion state
        onValueChange={handleChange} // Handle the change in the accordion state
      >
        <AccordionItem value="item-1">
          <AccordionTrigger>Is it accessible?</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger>Is it styled?</AccordionTrigger>
          <AccordionContent>
            Yes. It comes with default styles that matches the other
            components&apos; aesthetic.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes. It&apos;s animated by default, but you can disable it if you
            prefer.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      </section>
    )
  }
export default FAQ  