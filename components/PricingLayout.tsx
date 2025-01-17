"use client";
import React, { useState } from "react";
import PricingButton from "./PricingButton";
import {
  patientMonthlyPlan,
  patientSemiAnnualPlan,
  patientYearlyPlan,
} from "@/constants/pricing";
import EachPricing from "./EachPricing";

export interface pricingChange {
  priceAmt: number;
  duration: string;
}
const PricingLayout = () => {
  const [currentIndex, setIndex] = useState<number>(0);

  return (
    <div  id="pricing"
      className=" py-3 items-center my-12 justify-center  w-full h-screen "
    >
         <h3 className="text-[40px] font-subtext text-center font-bold mt-12 mb-6 ">Best & Simple Pricing</h3>
      <div
        onClick={(e) => e.stopPropagation()}
        className=" relative w-full  h-full bg-pink-50 rounded-md flex flex-col gap-4 px-6 py-5 overflow-auto"
      >
        
        <div className=" bg-gray-100 w-fit px-4 py-2 rounded-md flex self-center items-center gap-3">
          <PricingButton
            multipleValue={1}
            duration="Month"
            setIndex={setIndex}
            currentIndex={currentIndex}
            text="Monthly"
            index={0}
          />
          <PricingButton
            duration="Semi year"
            multipleValue={5}
            setIndex={setIndex}
            currentIndex={currentIndex}
            text="Semi-yealy"
            index={1}
          />
          <PricingButton
            duration="Year"
            multipleValue={10}
            setIndex={setIndex}
            currentIndex={currentIndex}
            text="Yearly"
            index={2}
          />
        </div>
        <div>
          <p className=" text-[20px] font-bold">
            Upgrade and get more of us
          </p>
          {/* <p className=" text-[10px] sm:text-sm font-semibold text-slate-600">
            {" "}
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
            nulla
          </p> */}
        </div>
        <div>
          <hr className=" border" />
          <p className="mt-2 font-bold text-gray-500 text-[18px]">
            Subscription Bundles
          </p>
        </div>
        <div className=" grid grid-cols-1  sm:grid-cols-2 mt-5 gap-3">
          {/* render monthly if user selects monthly */}
          {currentIndex === 0 &&
            patientMonthlyPlan.map((plan, index) => (
              <EachPricing plan={plan} key={index} />
            ))}
          {/* render semi yealy if user selects that */}
          {currentIndex === 1 &&
            patientSemiAnnualPlan.map((plan, index) => (
              <EachPricing plan={plan} key={index} />
            ))}
          {/* render for yearly when selected by the user */}
          {currentIndex === 2 &&
            patientYearlyPlan.map((plan, index) => (
              <EachPricing plan={plan} key={index} />
            ))}
        </div>
        
      </div>
    </div>
  );
};

export default PricingLayout;
