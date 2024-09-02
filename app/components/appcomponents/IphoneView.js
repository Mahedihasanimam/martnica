import React from "react";
import Image from "next/image";
import iphoneImage from "@/public/iphone_image.png";

const IphoneView = () => {
  return (
    <div className="bg-[url('../public/image_gradient.png')] bg-cover flex justify-center ">
      <div className="
      desktop:w-[1200px] desktop:h-[739px] 
      tablet:w-[680px] tablet:h-[1017px] 
      
      flex justify-center">
        <div className="
        desktop:w-[936px] desktop:h-[500px] desktop:mt-[98px]
        tablet:w-[495.45px] tablet:mt-[65.19px] tablet:ml-[.19px] tablet:mr[.36]
         
        flex flex-col desktop:flex-row desktop:justify-between
        ">
          <div
            className="
          flex flex-col items-center
          desktop:w-[495.45px] desktop:mt-[90.5px] 
          ">
            <h1
              className="text-[#1E2125] 
            mobile:text-[28px] tablet:text-[40px] desktop:text-[40px] 
            mobile:leading-[32.81px] leading-[46.88px] 
            font-variation-customOpt40 "
            // style={{
            //   fontSize: "40px",
            //   lineHeight: "46.88px",
            //   fontWeight: 400,
            //   color: "#1E2125",
            //   fontVariationSettings: "'opsz' 40",
            // }}
            >
              Obveščanje o pogrebu
            </h1>
            <p
              className="font-variation-customOpt16 mt-4 mb-6 text-[#414141] text-[16px] text-center desktop:text-left leading-[24]px] "
            // style={{
            //   fontSize: "16px",
            //   lineHeight: "24px",
            //   fontWeight: 400,
            //   color: "#414141",
            //   fontVariationSettings: "'opsz' 16",
            //   marginTop: "16px",
            //   marginBottom: "16px",
            //   width: "495px",
            // }}
            >
              V težkih trenutkih je včasih lažje poslati ali deliti po socialnih
              omrežjih, kot obveščati vsakega posebej.
            </p>
            <p
              className="font-variation-customOpt16 mt-4 mb-6 text-[#414141] text-[16px] text-center desktop:text-left leading-[24px]  "
            // style={{
            //   fontSize: "16px",
            //   lineHeight: "24px",
            //   fontWeight: 400,
            //   color: "#414141",
            //   fontVariationSettings: "'opsz' 16",
            //   marginBottom: "24px",
            //   width: "495px",
            // }}
            >
              Na spominski strani pokojnika/ce si prenesete obvestilo o pogrebu,
              ki ga lahko potem pošiljate naprej sorodnikom in znancem.
              Obvestilo je prilagojeno meram mobilnega telefona.
            </p>
            <p
              style={{
                fontSize: "20px",
                lineHeight: "23.44px",
                fontWeight: 500,
                color: "#414141",
                fontVariationSettings: "'opsz' 20",
                marginBottom: "24px",
              }}>
              Obvestilo o pogrebu je BREZPLAČNO.
            </p>
            <button className="flex items-center  rounded-lg h-[47px] w-[194px] justify-center  shadow-custom-light-dark-with-white bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              <div
                style={{
                  fontSize: "20px",
                  lineHeight: "23.44px",
                  fontWeight: 400,
                  color: "#1E2125",
                  textAlign: "center",
                  fontVariationSettings: "'opsz' 20",
                }}>
                Poišči osmrtnico
              </div>
            </button>
          </div>
          <div className="flex justify-center tablet:mt-16">
            <Image
              src={iphoneImage}
              alt="Description of the image"
              width={1000}
              height={1000}
              className="w-[250px] h-[500px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default IphoneView;
