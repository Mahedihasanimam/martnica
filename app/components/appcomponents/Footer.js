'use client'
import Image from "next/image";
import logo from "@/public/app_big_logo.png";
import iconFb from "@/public/icon_facebook.png";

import BottomSlider from "../authcomponents/BottomSlider";
export default function Footer() {
  return (
    <div className="flex w-full bg-[#E3E8EC] mobile:h-[609px] tablet:h-[500px] desktop:h-[480px]  justify-center ">
      <div
        className="
      mobile:w-[360px]  tablet:w-[680px] desktop:w-[1200px] 
      tablet:pl-[42px] tablet:pr-[26px]
       desktop:pl-[62px] desktop:pr-[40.19px]
       ">
        <footer
          className=" flex flex-col
        mobile:w-[311.88px] tablet:w-[612px] desktop:w-[1096.97px]       
        mobile:mt-[40px] tablet:mt-[46px] desktop:mt-[60px] 
        desktop:pl-[0.84px]
        ">
          <div className="flex ">
            <div
              className="
            mobile:hidden tablet:flex-col desktop:flex-col
             tablet:w-[211px] desktop:w-[211px] 
             desktop:mt-[5.73px]
            ">
              <Image
                src={logo}
                alt="App Logo"
                width={210}
                height={77.05}
                className="box-border
                desktop:h-[77.05px] tablet:h-[73.07px]
                desktop:w-[210px] tablet:w-[198px] "
              />
              <div className="desktop:mt-[37px] tablet:mt-[22.93px] items-center desktop:h-[24px] desktop:w-[211px]">
                <h
                  style={{
                    fontSize: "17px",
                    lineHeight: "24px",
                    fontWeight: "normal",
                    color: "#414141",
                    fontVariationSettings: "'XOPQ' 90, 'opsz' 17",
                  }}
                >
                  Naj spomin nanje ne ugasne.
                </h>
              </div>
              <a
                href="#"
                className="flex items-center text-gray-600 mt-[50px] hover:text-blue-500 transition duration-200 ">
                <div className="rounded-lg shadow-custom-light-dark bg-gradient-to-br from-gray-300 to-white p-2 transition duration-300 hover:scale-105 active:scale-95">
                  <Image
                    src={iconFb}
                    alt="Facebook Icon"
                    width={27}
                    height={27}
                  />
                </div>
                <h
                  className="font-variation-customOpt16 ml-[16px]"
                >
                  Facebook
                </h>
              </a>
            </div>
            <div
              className="flex 
              desktop:ml-[118.79px] desktop:pt-[0.19px] tablet:ml-[47px]">
              <div className="">
                <div className="h-[19px] flex items-center">
                  <h3 className="font-semibold text-[#ACAAAA]  text-[16px]">
                    Glavne strani
                  </h3>
                </div>
                <ul className="mt-[24px] ">
                  <li className="flex h-[24px] items-center">
                    <a
                      href="#"
                      className=" text-[#414141] font-variation-customOpt16 hover:text-blue-500 transition duration-200 text-[16px]">
                      Osmrtnice
                    </a>
                  </li>
                  <li className="flex h-[24px] mt-4 items-center">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]">
                      Pogrebi
                    </a>
                  </li>
                  <li className="flex h-[24px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]">
                      Spominska
                    </a>
                  </li>
                  <li className="flex h-[24px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]">
                      Cvetličarne
                    </a>
                  </li>
                  <li className="flex h-[24px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[16px]">
                      Pogrebna podjetja
                    </a>
                  </li>
                </ul>
              </div>
              <div className="desktop:ml-[103.75px] tablet:ml-[51.75px]">
                <div className="h-[19px] flex items-center ">
                  <h3 className="font-semibold text-[#ACAAAA]  text-[16px]">
                    Koristne povezave
                  </h3>
                </div>
                <ul className="mt-[24px] ">
                  <li className="flex h-[24px] items-center">
                    <a
                      href="#"
                      className=" text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[16px]">
                      Pogosta vprašanja
                    </a>
                  </li>
                  <li className="flex h-[24px] mt-4 items-center">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]">
                      Kaj storiti, ko se zgodi
                    </a>
                  </li>
                  <li className="flex h-[24px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]">
                      Kako oddati osmrtnico
                    </a>
                  </li>
                  <li className="flex h-[24px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]">
                      Kontakt
                    </a>
                  </li>
                  <li className="flex h-[24px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[16px]">
                      Partnerji
                    </a>
                  </li>
                  <li className="mobile:hidden tablet:flex desktop:hidden h-[20px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[16px]">
                      Povej naprej
                    </a>
                  </li>
                </ul>
              </div>
              <div className="hidden tablet:hidden desktop:flex flex-col ml-[107.78px]">
                <div className="h-[19px] flex items-center ">
                  <h3 className="font-semibold text-[#ACAAAA]  text-[16px]">
                    Drobni tisk
                  </h3>
                </div>
                <ul className="mt-[24px] ">
                  <li className="flex h-[24px] items-center">
                    <a
                      href="#"
                      className=" text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[16px]">
                      Splošni pogoji poslovanja
                    </a>
                  </li>
                  <li className="flex h-[24px] mt-4 items-center">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]">
                      Politika zasebnosti
                    </a>
                  </li>
                  <li className="flex h-[24px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]">
                      Politika varovanja osebnih podatkov
                    </a>
                  </li>
                  <li className="flex h-[24px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal  hover:text-blue-500 transition duration-200 text-[16px]">
                      Piškotki
                    </a>
                  </li>
                  <li className="flex h-[24px] items-center mt-4">
                    <a
                      href="#"
                      className="text-[#414141] font-normal   hover:text-blue-500 transition duration-200 text-[16px]">
                      Povej naprej
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </footer>
        <div className="flex desktop:flex-row desktop:mt-[92px] desktop:w-[1137px] pr-[1px] ">
          <div className="desktop:w-[427px] h-6 mt-[48px] flex  items-center">
            <div className="hidden desktop:flex font-variation-customOpt12 text-[12px] text-[#414141] ">
              © osmrtnica.com, 2024. Vse pravice pridržane.
            </div>
          </div>
          <div className="border-t border-[#117ab7] flex desktop:w-[710px] ">
            <BottomSlider data={[{}, {}, {}]} />
          </div>
        </div>
      </div>
    </div>
  );
}
