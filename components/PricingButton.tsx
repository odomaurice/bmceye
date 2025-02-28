import React from "react";

interface btnInterface {
  index: number;
  text: string;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
  currentIndex: number;
  multipleValue: number;
  duration: string;
}
const PricingButton = ({
  index,
  text,
  currentIndex,
  setIndex,
}: btnInterface) => {
  return (
    <div
      onClick={() => {
        setIndex(index);
      }}
      className={` md:text-[10px] px-3 text-[8px]   md:px-6 py-1 cursor-pointer  ${
        currentIndex == index
          ? "bg-blue-600 text-white"
          : "bg-transparent text-black font-bold hover:bg-blue-600 hover:text-white"
      } rounded-md tranform ease-in-out duration-200`}
    >
      <p>{text}</p>
    </div>
  );
};

export default PricingButton;
