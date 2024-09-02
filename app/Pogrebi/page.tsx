"use client";
import React, { useState } from "react";
import Header from "../components/appcomponents/Header";
import Footer from "../components/appcomponents/Footer";
import Hero from "../components/commoncomponents/Hero";
import Dropdown from "../components/appcomponents/Dropdown";
import { IoSearchOutline } from "react-icons/io5";
import ObituaryCard from "../components/appcomponents/ObituaryCard";
import Postanipartnar from '../components/appcomponents/Postanipartnar'
import Sponsor from "../components/appcomponents/Sponsor";

import image1 from "../../public/pogrebena.png"
const page = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const onMenuCLick = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const obituaries = [
    {
      name: "Elizabeta Škorjanc",
      dates: "1944 – 29.01.2024 (80 let)",
      location: "Muta",
      image: "/town1.png",
    },
    {
      name: "Marija Špes",
      dates: "1938 – 29.01.2024 (86 let)",
      location: "Sv. Jernej",
      image: "/img2.png",
    },
    {
      name: "Miroslav Vodnik",
      dates: "1938 – 28.01.2024 (86 let)",
      location: "Trebelno",
      image: "/town3.png",
    },
    {
      name: "Miroslav Vodnik",
      dates: "1938 – 28.01.2024 (86 let)",
      location: "Trebelno",
      image: "/town4.png",
    },
  ];
  return (
    <div>
      <Header onMenuClick={onMenuCLick} />
      <Hero
        buttontext={"Pogrebna podjetja"}
        herobg={image1.src}
      />

      <div className="w-fit mx-auto flex items-center justify-center gap-3 my-12">
        <Dropdown
          label={"Izberi regijo"}
          isFromNotification={true}
          isFromFlower={true}
        />
        <div className="bg-[#414141] p-4 text-white rounded-md">
          <IoSearchOutline />
        </div>
      </div>

        {/* card --------------------------------------------------------------------------------------------- */}
       <div className="container mx-auto my-12">
        <h3 className="text-4xl   ">Zasavska regija</h3>
       <div className="lg:flex md:flex flex-row  items-center   gap-11 ">
        <div className=" pt-4 space-y-6 w-full ">
          {obituaries.map((obituary, index) => (
            <ObituaryCard data={obituary} index={index} key={index} />
          ))}
        </div>
        <div className="space-y-6">
          <div className="min-w-52 w-full h-52 border border-[#D4D4D4] flex items-center justify-center text-center p-32 rounded-md">
            <h3 className="text-xl">Kmalu</h3>
          </div>
          <div className="min-w-52 w-full h-96 border border-[#D4D4D4] flex items-center justify-center text-center p-32 rounded-md">
            <h3 className="text-xl">Kmalu</h3>
          </div>
        </div>
      </div>
       </div>


       <div className="bg-[#083545] text-white p-14">
         <div className="space-y-4 container mx-auto">
         <h3 className="text-[#DAEBF1] text-4xl">Sodelujmo!</h3>
          <p className="text-[#D4D4D4]">Imate ideje, vprašanja, predloge?</p>
          <p className="text-[#D4D4D4]">Kontaktirajte nas! Z veseljem vam bomo prisluhnili!</p>
         </div>
       </div>
       <Postanipartnar/>
        <Sponsor/>

        
        <div
          className="   h-[284px] flex justify-center"
          style={{
            backgroundImage: `url(${image1.src})`,
            backgroundSize: "cover",
            backgroundPosition: "start",
          }}
        >
          <div className="flex items-center justify-end w-full container mx-auto">
            <div className=" flex items-center justify-end  w-full px-8 ">
              <div className="text-center text-white">
                <h3
                  style={{
                    fontSize: "40px",
                    lineHeight: "46.88px",
                    fontWeight: 400,
                    marginBottom:'10px',
                    color: "#3C3E41",
                    fontVariationSettings: "'opsz' 40",
                  }}
                >
                 Lokalne cvetličarne
                </h3>
               
                <Dropdown
                label={"Izberi kraj"}
                isFromNotification={false}
                isFromFlower={true}
              />
              </div>
            </div>
          </div>
        </div>
      <Footer />
    </div>
  );
};

export default page;
