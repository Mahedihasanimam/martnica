import React from "react";
import Header from "../components/appcomponents/Header";

import bannerbg from "../../public/herobg.png";
import user1 from "../../public/user6.jpeg";
import imageicon from "../../public/icon_cross.png";
import light from "../../public/light.png";
import usericon from "../../public/icon_user_black.png";
import user5 from "../../public/mom.png";
import { CiEdit } from "react-icons/ci";
import { CiFlag1 } from "react-icons/ci";
import Image from "next/image";
import { MdOutlineMail } from "react-icons/md";
import { CiFacebook } from "react-icons/ci";
import { FiUserPlus } from "react-icons/fi";
import Carose from '../components/appcomponents/Carose'
const page = ({ onMenuClick }: any) => {
  return (
    <div className="bg-[#F2F6F9]">
      <Header onMenuClick={onMenuClick} />
      {/* Header section -------------------------------- */}
      <div
        className="bg-cover bg-no-repeat p-8  md:p-16 lg:pt-36"
        style={{ backgroundImage: `url(${bannerbg.src})` }}
      >
        <div className="container mx-auto flex flex-col lg:flex-row items-start justify-between">
          
          {/* Left area */}
          <div className="lg:max-w-lg w-full space-y-6">
            <h3
              style={{ textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)" }}
              className="text-[#414141] text-4xl md:text-5xl lg:text-6xl text-center font-great-vibes font-bold"
            >
              V spomin
            </h3>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-4">
              <Image
                className="border-4 border-gray-100 rounded-lg mb-4 shadow-custom-light-dark-box-image"
                src={user1}
                height={150}
                width={150}
                alt="image"
              />
              <Image alt="icon" src={imageicon} width={30} height={30} />
            </div>

            <div className="text-center max-w-lg space-y-3">
              <h3 className="text-2xl md:text-3xl lg:text-4xl text-[#1E2125]">Mario Danilo Primo</h3>
              <p className="text-lg md:text-xl text-[#414141]">14.01.1948 - 21.02.2024</p>
              <p className="text-lg">Ljubljana</p>

              <h3 className="text-xl md:text-2xl lg:text-3xl flex items-end justify-end text-[#414141] font-great-vibes pt-6 max-w-sm">
                The song is ended but the melody lingers on. <br />
                Irving Berlin
              </h3>
            </div>
          </div>

          {/* Right area */}
          <div className="space-y-6">
            <div className="p-6 md:p-8 lg:p-12 rounded-lg shadow-custom-light-dark-with-white bg-gradient-to-tr from-[#E3E8EC] to-[#FFFFFF] space-y-4">
              <h3 className="text-xl md:text-2xl font-normal text-[#1E2125]">Osmrtnica</h3>
              <hr />
              <p className="text-[#414141]">
                Sporočamo žalostno vest, da je nas je v 76. letu starosti zapustil <br /> naš predragi Mario Danilo Primo. Vsi njegovi.
              </p>
            </div>

            {/* Edit icon */}
            <div className="flex items-center justify-end gap-4 my-4">
              <CiEdit size={24} />
              <span className="text-[#414141]">
                Spremeni / dopolni podatke na strani
              </span>
            </div>

            <div className="p-6 md:p-8 lg:p-12 rounded-lg shadow-custom-light-dark-with-white bg-gradient-to-tr from-[#E3E8EC] to-[#FFFFFF] space-y-4">
              <h3 className="text-xl md:text-2xl font-normal text-[#1E2125]">Dogodki</h3>
              <hr />
              <div className="flex flex-col md:flex-row justify-between gap-6 pb-8">
                <div className="w-fit px-4 py-2 rounded-lg bg-[#2592c9] text-white">
                  <h3 className="text-2xl md:text-4xl font-bold">9</h3>
                  <p className="text-sm md:text-lg">sep</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg md:text-2xl text-[#1E2125]">Zadnje slovo</h3>
                  <p className="text-[#414141]">Torek, 9:00</p>
                  <p className="text-[#414141]">
                    Poslovilna vežica, Pokopališče v Gabrskem, Trbovlje
                  </p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="w-fit px-4 py-2 rounded-lg bg-[#2592c9] text-white">
                  <h3 className="text-2xl md:text-4xl font-bold">11</h3>
                  <p className="text-sm md:text-lg">sep</p>
                </div>
                <div className="space-y-1">
                  <h3 className="text-lg md:text-2xl text-[#1E2125]">Pogreb</h3>
                  <p className="text-[#414141]">Torek, 9:00</p>
                  <p className="text-[#414141]">
                    Poslovilna vežica, Pokopališče v Gabrskem, Trbovlje
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 md:p-8 lg:p-12 rounded-lg shadow-custom-light-dark-with-white bg-gradient-to-tr from-[#E3E8EC] to-[#FFFFFF] space-y-4 my-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl md:text-2xl font-normal text-[#1E2125]">
                  Prižgi svečko v spomin
                </h3>
                <p className="text-lg">Skupno ta teden: 28</p>
              </div>
              <hr />
              <div className="flex items-center justify-between">
                <Image alt="image" src={light} width={50} height={50} />
                <div className="space-y-2 font-semibold">
                  <p className="text-[#414141]">Skupno obiskov: 477</p>
                  <p className="text-[#414141]">Skupno svečk: 158</p>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-4 my-6">
              <Image alt="image" height={20} width={20} src={usericon} />
              <span className="text-[#414141]">
                Spremeni / dopolni podatke na strani
              </span>
            </div>

            <div className="p-6 md:p-8 lg:p-12 rounded-lg shadow-custom-light-dark-with-white bg-gradient-to-tr from-[#E3E8EC] to-[#FFFFFF] space-y-4">
              <h3 className="text-xl md:text-2xl font-normal text-[#1E2125]">
                Povabi družino in prijatelje
              </h3>
              <hr />
              <div className="flex flex-wrap space-y-4 md:space-y-0 justify-between">
                <button className="btn bg-[#F8ECDA] border-2 border-[#D8A800] rounded-md px-4 md:px-8 text-[#D8A800]">
                  <MdOutlineMail size={25} /> Obvesti jih
                </button>
                <button className="btn bg-[#DAF3F8] border-2 border-[#00B4D8] rounded-md px-4 md:px-8 text-[#00B4D8]">
                  <CiFacebook size={25} /> Deli na Facebooku
                </button>
              </div>
              <p className="text-[#414141] text-center">
                Kopiraj povezavo do te strani <br />
                www.ourwebsite.com/slo/angela.frederickson.10478
              </p>
            </div>

            <div className="flex items-center justify-end gap-4 my-6">
              <CiFlag1 size={24} />
              <span className="text-[#414141]">Sporoči napake</span>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <div className="max-w-sm mx-auto  space-y-4 text-[#414141] ">
          <Image
            className="rounded-lg mx-auto"
            width={200}
            height={200}
            alt="image"
            src={user5}
          />

          <div className="text-center">
            <p>
              Max Johnson, 15.12.2003 <br />
              Mary Oswald Johnson, 17.12.2003
            </p>{" "}
            <br />
            <p>Prižgi svečko v spomin</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto my-20 space-y-6  ">
  <div className="text-center space-y-3">
    <h3 className="text-3xl md:text-5xl text-[#1E2125]">Žalna knjiga</h3>
    <p className="text-[#414141]">Vpiši se v Žalno knjigo</p>
  </div>

  <div className="flex items-center justify-center my-12 ">
    <div className="flex flex-wrap justify-center space-x-4 md:space-x-6">
    <button className="flex items-center  rounded-md h-16 w-[125px] justify-center  shadow-custom-light-dark bg-[#FFFFFF]  border  -mr-8 ">
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  color: "#1E2125",
                  textAlign: "center",
                  fontVariationSettings: "'opsz' 16",
                }}>
                <FiUserPlus/>
                Prikaži več
              </div>
            </button>
      {/* JK */}
      <div className="flex items-center justify-center p-4 md:p-6 rounded-full border-2 border-pink-300 text-pink-500 bg-white shadow bg-[#F1A5F366]" >
        JK
      </div>

      {/* A */}
      <div className="flex items-center justify-center p-4 md:p-6 px-6 md:px-8 rounded-full border-2 border-gray-100 text-gray-500 shadow bg-[#FFFFFF]"style={{marginLeft:'-20px'}}>
        A
      </div>

      {/* K */}
      <div className="flex items-center justify-center p-4 md:p-6 px-6 md:px-8 rounded-full border-2 border-blue-300 text-blue-500 bg-white shadow"style={{marginLeft:'-20px'}}>
        K
      </div>

      {/* B */}
      <div className="flex items-center justify-center p-4 md:p-6 px-6 md:px-8 rounded-full border-2 border-red-300 text-red-500 bg-white shadow"style={{marginLeft:'-20px'}}>
        B
      </div>

      {/* AS */}
      <div className="flex items-center justify-center p-4 md:p-6 rounded-full border-2 border-gray-300 text-gray-500 bg-white shadow"style={{marginLeft:'-20px'}}>
        AS
      </div>

      {/* M */}
      <div className="flex items-center justify-center p-4 md:p-6 px-6 md:px-8 rounded-full border-2 border-teal-300 text-teal-500 bg-white shadow"style={{marginLeft:'-20px'}}>
        M
      </div>

      {/* +23 */}
      <div className="flex items-center justify-center p-4 md:p-6 rounded-full border-2 border-gray-300 text-gray-500 bg-white shadow"style={{marginLeft:'-20px'}}>
        +23
      </div>
    </div>
  </div>


  <div className="w-full">
   <div className="my-12  mx-auto text-center space-y-4">
   <h3 className="text-4xl text-[] ">Nepozabni trenutki</h3>
    <button className="flex items-center mx-auto  rounded-lg h-12 w-[125px] justify-center  shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  color: "#1E2125",
                  textAlign: "center",
                  fontVariationSettings: "'opsz' 16",
                }}>
               <span className="border border-black px-1 rounded-full">+</span> Dodaj slike
              </div>
            </button>
   </div>
  <Carose/>
  </div>
</div>


    </div>
  );
};

export default page;
