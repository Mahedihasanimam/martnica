import Layout from "@/app/components/appcomponents/Layout";
import ObituaryCard from "@/app/components/appcomponents/ObituaryCard";
import HomeBackHeader from "@/app/components/appcomponents/HomeBackHeader";
import Dropdown from "@/app/components/appcomponents/Dropdown";
import NotificationView from "@/app/components/appcomponents/NotificationView";
import IphoneView from "@/app/components/appcomponents/IphoneView";
import IpadView from "@/app/components/appcomponents/IpadView";
import commingsoon from "@/public/new.jpg";
import { MagnifyingGlassIcon } from "@heroicons/react/24/solid";

import Image from "next/image";
import flowerImage from "@/public/image_flower.png";

export default function Home() {
  const obituaries = [
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
    <Layout>
      <div className="flex flex-1 flex-col bg-[#ebf0f3]">
        <HomeBackHeader />
        <div className=" flex flex-col items-center 
        desktop:w-[1200px] tablet:w-[680px] mobile:[360px] mx-auto ">
          <div
          className="hidden desktop:flex"
            style= {{
              margin: "60.73px auto 71.07px auto",
              fontSize: "40px",
              lineHeight: "46.88px",
              fontWeight: 400,
              color: "#1E2125",
              textAlign: "center",
              fontVariationSettings: "'opsz' 40",             
            }}>
            Zadnje osmrtnice
          </div>
          <div
          className="flex  desktop:hidden"
            style= {{
              margin: "60.73px auto 48px auto",
              fontSize: "40px",
              lineHeight: "46.88px",
              fontWeight: 400,
              color: "#1E2125",
              textAlign: "center",
              fontVariationSettings: "'opsz' 40",             
            }}>
            Zadnje osmrtnice
          </div>

          <div className="flex flex-col desktop:flex-row 
          desktop:w-[777px] tablet:w-[600px] mobile:w-[296]
           items-center justify-center space-x-[16px] ">
            <div className="flex  flex-row space-x-[16px]  h-[48px] ">
              <div className="hidden desktop:flex">
                <input
                  type="email"
                  placeholder="Išči po imenu / priimku"
                  style={{
                    fontSize: "16px",
                    lineHeight: "24px",
                    width: "227px",
                    height: "100%",
                    fontWeight: 400,
                    borderWidth: "1px",
                    borderColor: "#7C7C7C",
                    borderRadius: "8px",
                    paddingLeft: "15.8px",
                    paddingRight: "15.8px",
                    color: "#7C7C7C",
                    backgroundColor: "white",
                    fontVariationSettings: "'opsz' 16",
                  }}
                />
              </div>
              <Dropdown
                label={"Išči po kraju"}
                isFromNotification={false}
                isFromFlower={false}
              />
              <Dropdown
                label={"Išči po regiji"}
                isFromNotification={false}
                isFromFlower={false}
              />
            </div>

            <div className="hidden desktop:flex justify-center  w-12 items-center h-full lg:aspect-square rounded-lg bg-[#414141]">
              <MagnifyingGlassIcon className="w-5 h-5 text-white hidden lg:block" />
            </div>
          </div>

          <div className="mx-auto grid desktop:grid-cols-2 grid-cols-1 gap-6 pt-[47.93px] justify-between ">
            {obituaries.map((obituary, index) => (
              <ObituaryCard data={obituary} index={index} key={index} />
            ))}
          </div>

          <div className="flex justify-center pt-[45px] pb-[62px] ">
            <button className="flex items-center  rounded-lg h-12 w-[125px] justify-center  shadow-custom-light-dark bg-gradient-to-br from-[#E3E8EC] to-[#FFFFFF]">
              <div
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  fontWeight: 400,
                  color: "#1E2125",
                  textAlign: "center",
                  fontVariationSettings: "'opsz' 16",
                }}>
                Prikaži več
              </div>
            </button>
          </div>
        </div>
        <IpadView />
        <IphoneView />

        <div className="bg-black h-[284px] flex justify-center">
          <div className="flex items-center justify-between  w-[1200px]  ">
            <Image
              src={flowerImage}
              alt="Description of the image"
              width={1000}
              height={1000}
              className="h-[284px] w-[581px] "
            />

            <div className="flex flex-col mr-[58px] items-center ">
              <div
                style={{
                  fontSize: "40px",
                  lineHeight: "46.88px",
                  fontWeight: 400,
                  color: "#FFFFFF",
                  fontVariationSettings: "'opsz' 40",
                  marginBottom: "48px",
                }}>
                Lokalne cvetličarne
              </div>
              <Dropdown
                label={"Mesto"}
                isFromFlower={true}
                isFromNotification={false}
              />
            </div>
          </div>
        </div>

        <NotificationView />
      </div>
    </Layout>
  );
}
