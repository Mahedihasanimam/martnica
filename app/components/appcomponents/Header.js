import { UserIcon, Bars3Icon } from "@heroicons/react/24/solid";
import Image from "next/image";
import React from "react";
import logo from "@/public/app_logo.png";
import iconMenu from "@/public/icon_menu_black.png";
import iconUser from "@/public/icon_user_black.png";
import Link from "next/link";

function Header({ onMenuClick}) {
  return (
    // <header className="fixed top-0 left-0 right-0 bg-white shadow-md z-50 ">
    <header className="fixed top-0 left-0 right-0 bg-white  shadow-md z-50 pt-[1px] ">
      <div className=" flex w-full justify-around items-center container mx-auto p-2">
        <div className="
        desktop:h-[92.02px] mobile:h-[72px] tablet:h-[79px]
        w-full  desktop:w-[1200px]   
        desktop:pl-[23px]  desktop:pr-[27px] tablet:pl-[23px]  tablet:pr-[27px] mobile:px-[24px]
        ">
          <div className="mobile:h-[72px] tablet:h-[79px] desktop:h-[92.02px] w-full desktop:w-[1150px] flex justify-between items-center ">
          
            <div className="flex justify-start items-start">
             <Link href={'/'}>
             <Image
                src={logo}
                alt="App Logo"
                width={500}
                height={500}
                className="box-border h-[44px] w-[357.29px] mobile:h-[22.16px] mobile:w-[180px]"
              />
             </Link>
            </div>
            <div className="lg:block md:block hidden">
              <ul className="list-none flex items-end justify-center gap-8 text-[#1E2125]">
                <li><Link href={'/osmrtnice'}>Osmrtnice</Link></li>
                <li><Link href={'/Pogrebi'}>Pogrebi</Link></li>
                <li>Spominske</li>
                <li><Link href={'/cvetlicarne'}>Cvetličarne</Link></li>
              </ul>
            </div>
            <div
              className=" rounded-full hover:bg-gray-100 active:bg-gray-200 transition duration-200 ease-in-out cursor-pointer transform-gpu active:scale-95"
              onClick={onMenuClick}>
              <Image src={iconMenu} className="
              h-5 w-6 tablet:h-8 tablet:w-8 desktop:h-8 desktop:w-8 
              " />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
