import Image from "next/image";
import React from "react";
import iconArrowRight from "@/public/icon_arrowright.png";

const ObituaryCard = ({ data, key, index }) => {
  return (
    <button className="min-w-[466px] w-full h-[170px] border-2 border-white  shadow-custom-light-dark-box bg-gradient-to-br from-[#E3EAEF] to-[#F3F6F8] rounded-lg flex justify-center items-center ">
      <div className=" min-w-[428px] w-full flex pl-12 py-6 ">
        <div className="rounded-xl mr-[29px] shadow-custom-light-dark-box-image p-1 bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] ">
          <Image
            src={data.image}
            alt="Description of the image"
            width={1000}
            height={1000}
            className=" h-[130px] w-[95px]  rounded-lg"
          />
        </div>

        <div className=" flex-1 flex items-start flex-col  truncate overflow-hidden whitespace-nowrap  ">
          <div className="flex flex-row w-full items-start pt-[4px] pr-[2px]  ">
            <div className="flex flex-1 flex-col">
              <h2
                style={{
                  fontSize: "24px",
                  lineHeight: "28.13px",
                  fontWeight: 400,
                  color: "#1E2125",
                  textAlign: "left",
                  fontVariationSettings: "'opsz' 24",
                }}>
                {data.name}
              </h2>
              <p
                style={{
                  fontSize: "16px",
                  marginTop: "16px",
                  marginBottom: "4px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  color: "#414141",
                  textAlign: "left",
                  fontVariationSettings: "'opsz' 16",
                }}>
                {data.dates}
              </p>
              <p
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  color: "#414141",
                  textAlign: "left",
                  fontVariationSettings: "'opsz' 16",
                }}>
                {data.location}
                {key}
              </p>
            </div>
            {index === 5 && (
              <div>
                <Image
                  src={"/icon_cross.png"}
                  alt="Description of the image"
                  width={1000} 
                  height={1000}
                  className="h-[65px] w-[51px]"
                />
              </div>
            )}
          </div>

          <div className="flex h-6 w-full justify-end items-center mt-[7.5px]  pr-[2px]">
            <a href="#"      
            style={{
              fontSize: "14px",
              lineHeight: "16.41px",
              fontWeight: 400,
              color: "#7C7C7C",
              fontVariationSettings: "'opsz' 14",
              marginTop:1
            }}
            >
              Osmrtnica
            </a>
            <Image
            src={iconArrowRight}
            alt="Description of the image"
            width={1000}
            height={1000}
            className=" h-[24px] w-[24px]"
          />
          </div>
        </div>
      </div>
    </button>
  );
};

export default ObituaryCard;
