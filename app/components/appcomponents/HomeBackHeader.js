import homebg from '/public/homebackground.png';

const HomeBackHeader = () => {
  return (
    <div
      style={{ backgroundImage: `url(${homebg.src})` }}
      className="container mx-auto bg-contain bg-no-repeat h-[605.27px] desktop:mt-[92.02px] mobile:mt-[72px] tablet:mt-[79px] desktop:min-w-[1200px] desktop:max-w-[1280px] w-full flex items-end"
    >
      <div className="relative w-full mb-[47px] flex justify-center">
        <div className="flex pl-[180px] w-[1280px]">
          <HeaderHeadingText head={"OSMRTNICE"} index={"01."} id={1} />
          <HeaderHeadingText head={"POGREBI"} index={"02."} id={2} />
          <HeaderHeadingText head={"SPOMINSKA"} index={"03."} id={3} />
          <HeaderHeadingText head={"CVETLIČARNE"} index={"04."} id={4} />
        </div>
      </div>
    </div>
  );
};


export default HomeBackHeader;

const HeaderHeadingText = ({ head, index, id }) => {
  return (
    <div className="flex flex-row items-end desktop:w-[220px] tablet:w-[206.25px] ">
      <div className="w-[1.5px] h-[60px] bg-[#FFFFFF80] mr-[15px]" />
      <div>
        <div className="h-[75px]">
          <p
            className="desktop:flex hidden"
            style={{
              marginTop: "2px",
              fontWeight: "200",
              textShadow: "1px 1px 2px #fff",
              color: "#7C7C7C",
              fontSize: "64px",
              lineHeight: "75px",
              fontVariationSettings: "'opsz' 64",
            }}>
            {index}
          </p>
          <p
            className="desktop:hidden flex"
            style={{
              marginTop: "2px",
              fontWeight: "200",
              textShadow: "1px 1px 2px #fff",
              color: "#7C7C7C",
              fontSize: "40px",
              lineHeight: "75px",
              fontVariationSettings: "'opsz' 40",
            }}>
            {index}
          </p>
        </div>
        <div className=" flex items-center h-[33px]">
          <p
            className="desktop:flex hidden"
            style={{
              marginTop: "5px",
              color: "#DEDEDE",
              fontWeight: "500",
              fontSize: "28px",
              lineHeight: "32.81px",
              fontVariationSettings: "'opsz' 28",
            }}
            // className="text-[#DEDEDE] font-medium  tracking-wide text-[28px]"
          >
            {head}
          </p>
          <p
            className="desktop:hidden flex"
            style={{
              marginTop: "5px",
              color: "#DEDEDE",
              fontWeight: "500",
              fontSize: "20px",
              lineHeight: "32.81px",
              fontVariationSettings: "'opsz' 20",
            }}
            // className="text-[#DEDEDE] font-medium  tracking-wide text-[28px]"
          >
            {head}
          </p>
        </div>
      </div>
    </div>
  );
};
