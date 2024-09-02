// components/Dropdown.js
import iconDropDown from "@/public/icon_dropDown.png";
import Image from "next/image";

const Dropdown = ({ label, isFromNotification, isFromFlower }) => {
  return (
    <div
      className={
        isFromNotification
          ? "dropdown w-[306px] h-[48.48px] "
          : isFromFlower
          ? "dropdown w-[476px] h-[48px] "
          : "dropdown w-[292px] desktop:w-[227px]  h-full "
      }>
      <div
        tabIndex={0}
        role="button"
        className={
          isFromFlower
            ? "relative bg-white hover:ring-2 border-[#7C7C7C] border rounded-lg shadow-sm flex flex-1  items-center justify-between h-full pl-[23.8px] pr-[23.5px] cursor-pointer"
            : "relative bg-white hover:ring-2 border-[#7C7C7C] border rounded-lg shadow-sm flex flex-1  items-center justify-between h-full pl-[15.8px] pr-[15.5px] cursor-pointer"
        }>
        <span
          style={{
            fontSize: "16px",
            lineHeight: "24px",
            fontWeight: 400,
            color: "#7C7C7C",
            fontVariationSettings: "'opsz' 16",
          }}>
          {label}
        </span>
        <Image src={iconDropDown} className=" w-8 h-8" />
      </div>
      <ul
        tabIndex={0}
        className="dropdown-content z-[1] menu p-3 shadow bg-base-100 rounded-box w-52">
        <li>
          <a>Item 1</a>
        </li>
        <li>
          <a>Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
