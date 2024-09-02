import React from "react";
import Header from "../components/appcomponents/Header";
import Footer from "../components/appcomponents/Footer";
import Hero from "../components/commoncomponents/Hero";
import heroimg from "../../public/hero3.png";
import Dropdown from "../components/appcomponents/Dropdown";
import { IoSearchOutline } from "react-icons/io5";
import ObituaryCard from "../components/appcomponents/ObituaryCard";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";

import progrebimage from "../../public/pogrebi.png";
import user1 from '../../public/user6.jpeg'
import bannerbg from '../../public/starn.png'
import flower from '../../public/flower50.png'
import Image from "next/image";
import Sponsor from "../components/appcomponents/Sponsor";
const page = ({ onMenuClick }: any) => {
  const obituaries = [
    {
      name: "Miroslav Vodnik",
      dates: "1938 – 28.01.2024 (86 let)",
      location: "Trebelno",
      image: "/user5.jpeg",
    },
    {
      name: "Miroslav Vodnik",
      dates: "1938 – 28.01.2024 (86 let)",
      location: "Trebelno",
      image: "/user5.jpeg",
    },
    {
      name: "Elizabeta Škorjanc",
      dates: "1944 – 29.01.2024 (80 let)",
      location: "Muta",
      image: "/user1.jpeg",
    },
    {
      name: "Marija Špes",
      dates: "1938 – 29.01.2024 (86 let)",
      location: "Sv. Jernej",
      image: "/user2.jpeg",
    },
    {
      name: "Tatjana Štruc",
      dates: "1959 – 29.01.2024 (65 let)",
      location: "Muta",
      image: "/user3.jpeg",
    },
    {
      name: "Alojz Lavbič",
      dates: "1945 – 28.01.2024 (79 let)",
      location: "Dramlje",
      image: "/user4.jpeg",
    },
    {
      name: "Franc Novak",
      dates: "1934 – 28.01.2024 (90 let)",
      location: "Predanovci",
      image: "/user5.jpeg",
    },
    {
      name: "Mario Danilo Primo",
      dates: "1948 – 29.01.2024 (76 let)",
      location: "Ljubljana",
      image: "/user6.jpeg",
    },
    {
      name: "Milan Kelher",
      dates: "1960 – 28.01.2024 (64 let)",
      location: "Velenje",
      image: "/user7.jpeg",
    },
    {
      name: "Miroslav Vodnik",
      dates: "1938 – 28.01.2024 (86 let)",
      location: "Trebelno",
      image: "/user5.jpeg",
    },
  ];

  return (
    <div>
      {/* HEADER SECTION -------------------------------------------------------------------------------- */}
      <Header onMenuClick={onMenuClick} />
      <Hero buttontext={"Osmrtnice"} herobg={heroimg.src} />

      <div className="">
        <div className="w-fit mx-auto lg:flex md:flex flex-wrap space-y-6 items-center justify-center gap-3 my-12 container ">
          <Dropdown
            label={"Išči po imenu / priimku"}
            isFromNotification={true}
            isFromFlower={true}
          />
          <Dropdown
            label={"Išči po kraju"}
            isFromNotification={true}
            isFromFlower={true}
          />
          <Dropdown
            label={"Išči po regiji"}
            isFromNotification={true}
            isFromFlower={true}
          />
          <div className="bg-[#414141] p-4 text-white rounded-md">
            <IoSearchOutline />
          </div>
        </div>

        {/* Hitri izbor SECTION -------------------------------------------------------------------------------- */}
        <div className="lg:flex md:flex flex-wrap items-center justify-between gap-12  my-16 container mx-auto ">
          <div className="space-y-4">
            <h3 className=" text-3xl text-[#1E2125]">Hitri izbor</h3>
            <div className="lg:flex md:flex flex-wrap items-center justify-center gap-6">
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Ljubljana
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Maribor
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Celje
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Ljubljana
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Kranj
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Koper
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Novo Mesto
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Ljubljana
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Domžale
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Velenje
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Nova Gorica
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Koroška
              </button>
              <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
                Zasavje
              </button>
            </div>
          </div>
        </div>

        <div className="my-12 container mx-auto">
          <h3 className=" text-3xl text-[#1E2125]">Zasavska regija</h3>
          <div className="mx-auto grid desktop:grid-cols-2 grid-cols-1 gap-6 pt-6 justify-between ">
            {obituaries.map((obituary, index) => (
              <ObituaryCard data={obituary} index={index} key={index} />
            ))}
          </div>

          <div className="flex items-center justify-center gap-4 font-bold my-12 ">
            <button className=" shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] rounded-md p-4 w-12 h-12 ">
              {" "}
              <FaChevronLeft />{" "}
            </button>
            <button className=" shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] rounded-md p-4 w-12 h-12">
              {" "}
              1{" "}
            </button>
            <button className=" shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] rounded-md p-4 w-12 h-12">
              {" "}
              2{" "}
            </button>
            <button className=" shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] rounded-md p-4 w-12 h-12">
              {" "}
              3{" "}
            </button>
            <button className=" shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] rounded-md p-4 w-12 h-12">
              {" "}
              <FaChevronRight />{" "}
            </button>
          </div>
        </div>

        <div>
          <div className="bg-gradient-to-b from-[#D3D7DA] to-[#8C97A099] p-12">
            <div className="lg:flex md:flex flex-row items-center justify-center gap-20">
                <div>
                    <Image alt="progrebimage" height={100} width={100} src={progrebimage}/>
                </div>
              <div className="text-center">
                <h3 className="text-[#414141] text-[40px]">
                  Pogrebi v naslednjih dneh
                </h3>
                <div className="w-fit mx-auto lg:flex md:flex flex-row items-center space-y-6 justify-center gap-3 my-12">
                  <Dropdown
                    label={"Išči po kraju"}
                    isFromNotification={true}
                    isFromFlower={true}
                  />
                  <Dropdown
                    label={"Išči po regiji"}
                    isFromNotification={true}
                    isFromFlower={true}
                  />
                  <div className="bg-[#414141] p-4 text-white rounded-md">
                    <IoSearchOutline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
  className="bg-cover bg-no-repeat p-24"
  style={{ backgroundImage: `url(${bannerbg.src})` }}
>
            <div className="border-2 border-white bg-gradient-to-r from-[#ffffff] to-[#cfcfcf4d] rounded-md lg:max-w-4xl md:max-w-3xl w-full mx-auto text-center p-24 space-y-8 ">
                <h3 className="text-[#1E2125] text-[40px]  ">Odpri Spominsko stran</h3>
                <p className="text-[#3C3E41] ">Spomini niso večni. Prehitro nam uidejo, čarobni trenutki se pozabijo, slike zbledijo. <br />
                Povežite spomine na najdražje v celoto in jih ohranite. </p>
                <div className="lg:flex md:flex flex-row  items-center justify-center gap-6 space-y-4">
              <input className="p-3 border border-[#7C7C7C] rounded-md lg:px-16 " type="text" placeholder="Ime pokojnika/ce" />
              <input className="p-3 border border-[#7C7C7C] rounded-md lg:px-16" type="text" placeholder="Ime pokojnika/ce" />
                </div>
                <button className="btn shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF] text-[#1E2125] rounded-md p-4 px-8">
                    Nprej
                </button>
            </div>
            <div className="my-12">
                <h3 className="text-[40px] text-[#1E2125]  text-center mb-5">Zadnje Spominske strani </h3>
                <div className="lg:flex md:flex flex-wrap items-center justify-center gap-8">
                <div className="">
                    <Image className="border-4  border-white rounded-lg mb-4" src={user1} height={200} width={200} alt="image"/>
                    <p className="text-[#1E2125] font-bold">Mario Danilo Primo</p>
                </div>
                <div className="">
                    <Image className="border-4  border-white rounded-lg mb-4" src={user1} height={200} width={200} alt="image"/>
                    <p className="text-[#1E2125] font-bold">Mario Danilo Primo</p>
                </div>
                <div className="">
                    <Image className="border-4  border-white rounded-lg mb-4" src={user1} height={200} width={200} alt="image"/>
                    <p className="text-[#1E2125] font-bold0">Mario Danilo Primo</p>
                </div>
                <div className="">
                    <Image className="border-4  border-white rounded-lg mb-4" src={user1} height={200} width={200} alt="image"/>
                    <p className="text-[#1E2125] font-bold">Mario Danilo Primo</p>
                </div>
                </div>
            </div>
        </div>
        <Sponsor/>

        <div className="lg:flex md:flex flex-row items-center justify-center  w-full">
            <div className="lg:w-4/5 md:w-4/5">
                <Image className="min-h-[400px]" src={flower}  alt="image"/>
            </div>
            <div className="bg-[#FFE5B4] py-32 space-y-9  w-full text-center flex-row items-center justify-center">
                <h3 className="text-[#414141] text-[40px] flex items-center justify-center">Lokalne cvetličarne</h3>
                <Dropdown
            label={"Išči po imenu / priimku"}
            isFromNotification={true}
            isFromFlower={true}
          />

            </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default page;
