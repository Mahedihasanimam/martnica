import Image from "next/image";
import React from "react";
import image1 from "../../../public/one.png";
import image2 from "../../../public/Group 14 (1).png";
import image3 from "../../../public/three.png";
import image4 from "../../../public/four.png";

const Sponsor = () => {
  return (
    <div className="mb-12 container mx-auto">
      <div className="text-center my-12">
        <h3 className="text-xl">Sponsorji</h3>
      </div>
      <div className="lg:flex items-center text-center mx-auto w-fit space-y-8 justify-around flex-wrap gap-8">
        <div className="">
          <Image height={200} width={200} src={image1} />
        </div>
        <div className="">
          <Image  height={50} width={50} src={image2} />
        </div>
        <div className="">
          <Image height={200} width={200} src={image3} />
        </div>
        <div>
          <Image height={200} width={200} src={image4} />
        </div>
        <div className="">
          <Image height={200} width={200} src={image1} />
        </div>
        <div className="">
          <Image height={200} width={200} src={image1} />
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
