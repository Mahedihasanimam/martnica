import React from "react";
import Dropdown from "@/app/components/appcomponents/Dropdown";

const NotificationView = () => {
  return (
    <div className="w-full bg-[#fffbf4] flex justify-center ">
      <div className="
      desktop:w-[1200px] desktop:h-[453px]   desktop:pl-[57px] desktop:pr-[55px]
      tablet:w-[680px] tablet:pb-[73.36px] tablet:pt-[78.35px]">
        <div className="flex flex-col desktop:w-[1088px] items-center " >
        <div className="desktop:w-[636px] desktop:h-[297.48px] desktop:mt-[80.26px]  ">
          <div className="w-full flex flex-col items-center  ">
            <h1
              style={{
                fontSize: "32px",
                lineHeight: "37.5px",
                fontWeight: 400,
                color: "#1E2125",
                fontVariationSettings: "'opsz' 32",
              }}>
              Obveščanje o osmrtnicah v domačem kraju
            </h1>
            <div className="flex flex-row  items-center justify-between gap-6 mt-6  w-full ">
              <Dropdown
                label="Izberi mesto"
                isFromNotification={true}
                isFromFlower={true}
              />
              <input
                type="email"
                placeholder="Vpiši svoj e-poštni naslov"
                style={{
                  fontSize: "16px",
                  lineHeight: "24px",
                  width: "306px",
                  height: "48.48px",
                  fontWeight: 400,
                  borderWidth: "1px",
                  borderColor: "#7C7C7C",
                  borderRadius: "8px",
                  paddingLeft: "16.8px",
                  paddingRight: "23.5px",
                  color: "#7C7C7C",
                  backgroundColor: "white",
                  fontVariationSettings: "'opsz' 16",
                }}
              />
            </div>
          </div>
          <div className="flex flex-col  mt-6 ">
            <div className=" flex flex-col pl-1 ">
              <div className="h-6 w-full flex items-center pl-1">
                <label className="flex items-center ">
                  <input type="checkbox" className="mr-3 h-4 w-4" />
                  <div className="flex">
                    <div className="text-[#414141] font-variation-customOpt12 text-[12px]">
                      Strinjam se s
                    </div>
                    <div className="w-[4px]"/>
                    <div>
                    <div className="text-[#414141] font-variation-customOpt12 text-[12px] ">splošnimi pogoji in pravili</div>
                    <div className="h-[1px] bg-[#414141] mt-[-3px]" />
                    </div>
                  </div>
                </label>
              </div>
              <div className="h-6 w-full flex  items-center pl-1 mt-2">
                <label className="flex items-center  text-start  text-[#414141] font-variation-customOpt12 text-[12px]">
                  <input type="checkbox" className="mr-3 h-4 w-4" />
                  Enkrat mesečno prejemam tudi novice, posebne popuste, občasne
                  brezplačne nadgradnje
                </label>
              </div>
            </div>
            <div className="w-full flex flex-col items-center mt-6  pt-[2px] ">
              <button className="w-[276px] h-12">
                <div className="rounded-lg w-[276px] h-full flex justify-center items-center shadow-custom-light-dark  bg-[#CAF0F8] transition duration-100 ">
                  <h className="text-[#1E2125] text-[16px] font-variation-customOpt16">
                    Prijava
                  </h>
                </div>
              </button>
              <div className="flex justify-center items-center h-6 mt-2 ">
                <p className="text-center text-[12px] text-[#414141] font-variation-customOpt12 ">
                  Osmrtnice boste prejemali enkrat dnevno.
                </p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default NotificationView;
