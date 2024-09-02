import React from "react";
import Image from "next/image";
import ipadImage from "@/public/ipad_image.png";

const IpadView = () => {
  return (
    <div className="w-full bg-[#F8F7F4] flex justify-center">
      <div className="
      flex mobile:flex-col-reverse tablet:flex-col-reverse desktop:flex
      mobile:w-[360px] tablet:w-[680px] desktop:w-[1200px] 
      mobile:h-[885px] tablet:h-[1204px] desktop:h-[891px]">
        <div className="
        tablet:h-[767px] desktop:h-[868.27px] 
        tablet:w-[504px] desktop:w-[570px] 
        desktop:pt-[58px] desktop:pb-[90px] 
        desktop:pl-[55.54px] desktop:pr-[43.53px] 
        mt-[40px] desktop:mt-[18px] mobile:mx-auto tablet:mx-auto 
        desktop:ml-[71px] tablet:mb-[74px] ">
          <Image
            src={ipadImage}
            alt="Description of the image"
            width={1000} // Desired width
            height={1000} // Desired height
            className="w-['100%'] h-['100%']"
          />
        </div>

        <div className="
        mobile:mt-[37px]   desktop:mt-[179px] 
        mobile:w-[303px] tablet:w-[467px]  desktop:w-[504px] 
        mobile:mx-auto tablet:mx-auto desktop:ml-3
        flex flex-col mobile:items-center tablet:items-center
        ">
          <div className="flex items-center mobile:h-[33px] tablet:h-[47px] desktop:h-[47px] ">
            <h1
              className="text-[#22281C] 
          mobile:text-[28px] tablet:text-[40px] desktop:text-[40px] 
          mobile:leading-[32.81px] leading-[46.88px] 
          font-variation-customOpt40 "
            // style={{
            //   fontSize: "40px",
            //   lineHeight: "46.88px",
            //   fontWeight: 400,
            //   color: "#22281C",
            //   fontVariationSettings: "'opsz' 40",
            // }}
            >
              Osmrtnica
            </h1>
          </div>
          <p
            className="font-variation-customOpt16 mt-4 mb-6 text-[#414141] text-[16px] text-center desktop:text-left "
          // style={{
          //   fontSize: "16px",
          //   lineHeight: "24px",
          //   fontWeight: 400,
          //   color: "#414141",
          //   fontVariationSettings: "'opsz' 16",
          //   marginTop: "16px",
          //   marginBottom: "24px",
          //   width: "428px",
          //   textAlign:'center'
          // }}
          >
            Stran, kjer izvemo vse o pogrebu, se vpišemo v Žalno knjigo,
            izrečemo sožalje in prižgemo virtualno svečko.
          </p>
          <p
            style={{
              fontSize: "20px",
              lineHeight: "23.44px",
              fontWeight: 500,
              color: "#22281C",
              fontVariationSettings: "'opsz' 20",
              marginBottom: "62px",
            }}>
            Vse navedeno je BREZPLAČNO.
          </p>
          <button className="flex items-center  rounded-lg h-[47px] w-[173px] justify-center  shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
            <div
              style={{
                fontSize: "20px",
                lineHeight: "23.44px",
                fontWeight: 400,
                color: "#1E2125",
                textAlign: "center",
                fontVariationSettings: "'opsz' 20",
              }}>
              Več informacij
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default IpadView;
