import Image from "next/image";
import React from "react";
import cardimage from "../../../public/homeicon.png";
import flowericon from "../../../public/flowericon.png";
import notification from "../../../public/notificationicon.png";

const Postanipartnar = () => {
  return (
    <div className="bg-[#DAEBF1] p-14">
        <h3 className="text-4xl text-center my-6">Postani partner!</h3>
      <div className=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto my-12">
        <div className="bg-gradient-to-tr from-[#FFFFFF] top-[#FFFFFF4D] rounded-3xl border-2 border-white p-12 shadow-md  space-y-4">
          <div className=" ">
            <Image src={cardimage} />
          </div>
          <h3 className="text-[#22281C] text-2xl">Pogrebna podjetja</h3>
          <p className="text-[#414141]">
            Celovita predstavitev podjetja in številne druge možnosti za
            sodelovanje kasneje.
          </p>
          <p className="text-[#414141]">
            Olajšamo vam delo in prihranimo vaš čas.
          </p>
        </div>
        <div className="bg-gradient-to-tr from-[#FFFFFF] top-[#FFFFFF4D] rounded-3xl border-2 border-white p-12 shadow-md  space-y-4">
          <div className=" ">
            <Image src={flowericon} />
          </div>
          <h3 className="text-[#22281C] text-2xl">Cvetličarne</h3>
          <p className="text-[#414141]">
            Naj bo vaša spletna predstavitev samo začetek našega širšega
            sodelovanja.
          </p>
          <p className="text-[#414141]">
            Bodite na pravem mestu, ko vas rabijo.
          </p>
        </div>
        <div className="bg-gradient-to-tr from-[#FFFFFF] top-[#FFFFFF4D] rounded-3xl border-2 border-white p-12 shadow-md  space-y-4">
          <div className=" ">
            <Image src={notification} />
          </div>
          <h3 className="text-[#22281C] text-2xl">Oglaševalci in drugi</h3>
          <p className="text-[#414141]">
            Celovita predstavitev podjetja in številne druge možnosti za
            sodelovanje kasneje.
          </p>
          <p className="text-[#414141]">
            Olajšamo vam delo in prihranimo vaš čas.
          </p>
        </div>
      </div>
      <button className="block mx-auto  rounded-lg h-[47px] w-[194px]   shadow-custom-light-dark-with-white bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              <div
              className=""
                style={{
                  fontSize: "20px",
                  lineHeight: "23.44px",
                  fontWeight: 400,
                  color: "#1E2125",
                  textAlign: "center",
                  fontVariationSettings: "'opsz' 20",
                }}>
               Kontaktirajte nas
              </div>
            </button>
    </div>
  );
};

export default Postanipartnar;
