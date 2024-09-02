import Image from "next/image";
import React from "react";

// Define the type for the props
interface HeroProps {
  buttontext: any; // Using `any` type for buttontext
  herobg: any; // Using `any` type for herobg
}

// Functional Component
const Hero: React.FC<HeroProps> = ({ buttontext, herobg }) => {
  return (
    <div
      className="min-h-[400px] w-full bg-cover bg-no-repeat mt-24 items-center"
      style={{ backgroundImage: `url(${herobg})` }}
    >
      <div className="relative">
        <button className=" absolute lg:left-[45%] md:left-1/2 left-1/4 mt-36 text-2xl font-semibold  bg-gradient-to-r from-[#FFFFFF] to-[#FFFFFF4D] rounded-md border py-4 px-6">
          {buttontext}
        </button>
      </div>
    </div>
  );
};

export default Hero;
