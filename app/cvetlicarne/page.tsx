import React from "react";
import Header from "../components/appcomponents/Header";
import Footer from "../components/appcomponents/Footer";
import Hero from "../components/commoncomponents/Hero";
import heroimg from "../../public/hero1.png";
import Dropdown from "../components/appcomponents/Dropdown";
import ObituaryCard from "../components/appcomponents/ObituaryCard";
import PrednostiCard from "../components/appcomponents/PrednostiCard";
import Sponsor from "../components/appcomponents/Sponsor";
import image1 from "../../public/hero1.png";
import Image from "next/image";
const page = ({ onMenuClick }: any) => {
  const obituaries = [
    {
      name: "Elizabeta Škorjanc",
      dates: "1944 – 29.01.2024 (80 let)",
      location: "Muta",
      image: "/img1.png",
    },
    {
      name: "Miroslav Vodnik",
      dates: "1938 – 28.01.2024 (86 let)",
      location: "Trebelno",
      image: "/img3.png",
    },
    {
      name: "Marija Špes",
      dates: "1938 – 29.01.2024 (86 let)",
      location: "Sv. Jernej",
      image: "/img2.png",
    },

  ];
  return (
    <div className="">
      {/* HEADER SECTION -------------------------------------------------------------------------------- */}
      <Header onMenuClick={onMenuClick} />

      {/* HERO SECTION -------------------------------------------------------------------------------- */}
      <Hero
        buttontext={"Cvetličarne"}
        herobg={image1.src}
      />
      {/* Hitri izbor SECTION -------------------------------------------------------------------------------- */}
      <div className="lg:flex md:flex flex-wrap items-center justify-between gap-12 container mx-auto my-16 ">
        <Dropdown
          label={"Išči po krajih"}
          isFromFlower={true}
          isFromNotification={false}
        />
        <div className="space-y-4">
          <h3 className="font-bold text-lg">Hitri izbor</h3>
          <div className="lg:flex md:flex flex-wrap items-center justify-center gap-6">
            <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
              Ljubljana
            </button>
            <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
              Ljubljana
            </button>
            <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
              Ljubljana
            </button>
            <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
              Ljubljana
            </button>
            <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
              Ljubljana
            </button>
            <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
              Ljubljana
            </button>
            <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
              Ljubljana
            </button>
            <button className="btn btn-xs border bg-[#E3E8EC] border-[#C3C6C8] rounded-sm">
              Ljubljana
            </button>
          </div>
        </div>
      </div>

      {/* card --------------------------------------------------------------------------------------------- */}
      <div className="lg:flex md:flex flex-row  items-center  container mx-auto gap-11 my-12">
        <div className="pt-[47.93px] space-y-6 w-full ">
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
      <div className="bg-gradient-to-t from-[#F2F1EA] to-[#F7F9F2] py-12">
        <div className="text-center w-full mx-aut my-8">
          <h3 className="text-4xl font-semibold">
            Prednosti lokalnih cvetličarn
          </h3>
          <p className="text-lg font-semibold">
            (napram cvetju iz velikih trgovin)
          </p>
        </div>
        <div className=" grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-14 container mx-auto ">
          <PrednostiCard
            index={"01"}
            title={" Znanja in dolgoletne izkušnje"}
            decription={
              "Pogosto premalo izpostavljena prednost lokalnih cvetličarjev. So eksperti na svojem področju, ki radi delijo svoje znanje in postrežejo nam z najboljšimi nasveti, kar v veliki trgovini ni možno."
            }
            cardbg={
              "https://s3-alpha-sig.figma.com/img/643a/bb45/4cc6d9b09c4c8de7d69b2d9c7c25c6cf?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=b8aCfSsAkareNwUPWkXusv1aP9daP~YIi4rZs-z2tVrUiiXZqA5bO3373bgOkXYYONsnnKNk66YNuYMH4iT8cTOK6DfvN4SfNkTNPnUqWbu4o8-aZYr0NNXvHyJRpbmu336spRnb5vRZiTBZ2iNHgLnQogNBhWt8SfgpuFH2tW~tG3WK-C3~L~BEDWDuwqHEnfFdfmshiWLvthx3DdiKDlV5dDDNnRZPOCo-q-s0PvJdyv2CYYdYPV-NeefyvrPgFpJFjZa1k58CgQbQlcgwzWZBsCZOV60K9hffhLnShnHvJKrCyN5FVyxKyh63H0R1vA64O08i69d4l6vkOTWhGA__"
            }
          />

          <div
            className="border-4 border-white rounded-md shadow-lg relative
            p-8 h-[700px]   space-y-6 bg-cover"
            style={{
              backgroundImage: `url(${"https://s3-alpha-sig.figma.com/img/a823/9c88/be0b4887bd82c87ce79096cefe335025?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=cLSTfb3fbWhtbXru8RYwIGbnIBoN7nIv6lVUJtXzl3RXXwQOofN-O5G9fqwQyPlLgElNdImPUNYvKeR3XsV-Dpe6ZVJH9olCWoxZKMGWg9BAAY8en~e01VbGIpN60pd0TKgsS5mMIMVmBRJNnFkoUYGSHyCXeoDCd64e~qACIovSx7xPplAs5E933tULOrkMU3u0aJsgIjGItxiBZHtvP6K0Qn5pO7-gZzpz4aItzn-ja99mjCkm0Ezv2WNixRk7YUS9bpkNGPXR8uTtnb5cUU8fyWMPJY1bPNPRQq~3FVuNsFwZFLAhfTsR-kzHtUo1RwDgxTUyB0rXAdIhpee7dQ__"})`,
            }}
          >
            <h3
              className="pt-12"
              style={{
                marginTop: "2px",
                fontWeight: "200",
                textShadow: "1px 1px 2px #fff",
                color: "#EDF1F3",
                textShadow: "2px 2px 2px #006598",
                fontSize: "128px",
                lineHeight: "75px",
                fontVariationSettings: "'opsz' 64",
              }}
            >
              02
            </h3>

            <div className="bg-[#FFFFFF80] p-4 absolute right-2 left-2 bottom-2 space-y-4 ">
              <h3 className="  text-[#1E2125] text-lg">
                Obstojnost cvetja je praviloma večja
              </h3>
              <p className=" text-[#414141]">
                Pogosto premalo izpostavljena prednost lokalnih cvetličarjev. So
                eksperti na svojem področju, ki radi delijo svoje znanje in
                postrežejo nam z najboljšimi nasveti, kar v veliki trgovini ni
                možno.
              </p>
            </div>
          </div>

          <PrednostiCard
            index={"03"}
            title={" Znanja in dolgoletne izkušnje"}
            decription={
              "Pogosto premalo izpostavljena prednost lokalnih cvetličarjev. So eksperti na svojem področju, ki radi delijo svoje znanje in postrežejo nam z najboljšimi nasveti, kar v veliki trgovini ni možno."
            }
            cardbg={
              "https://s3-alpha-sig.figma.com/img/bd13/0442/dfa74d9f3b6714095e28c4594ec029bd?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=gN~8Pf2eYeeKMzlK9sMOT-bD5imGMVqwznuIoRafljf8Dh32Ke~keQ5LoJTL6GrrigQMRzF9NNP1s9Scd5oOnT4q0k0eor174nVRgxvhBhlVTe9ZcnUOU7wQaya22JGX~Cm~BT5P7b8BUfCXFshzYIWmTe7aSQ5XaYP~JbYWKMETt397qeU70WASQMa27NcpjzjPnF5hpbCOr6ak6N2B3tL3lXyXrvpxXthoYSO6qgS88KLffgm7rxwjHuLlWcUoT7B4Rh2e-YKYePwJAnBVcilyxmOX6gK4AT0~9hzWTqWkEmcVyEVtotKeiftPD~uic0NlObQvSKBv80qVFbohFQ__"
            }
          />
        </div>
      </div>

      <div>
        <h3 className="text-4xl font-semibold text-center mx-auto my-12">
          Podprimo lokalno!
        </h3>

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
                    color: "#FFFFFF",
                    fontVariationSettings: "'opsz' 40",
                  }}
                >
                  Imate cvetličarno?
                </h3>
                <p className="font-bold mb-8">Sodelujmo!</p>
                <button className="btn">Naprej </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* SPONSOR ------------------------------------- */}
      <Sponsor />
      <Footer />
    </div>
  );
};

export default page;
