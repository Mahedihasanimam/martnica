import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";

const BottomSlider = ({ data }) => {
  return (
    <section className="w-full desktop:pl-[54.51px] desktop:pr-[19.26px] flex flex-row">
      <div className="hidden h-[71px] w-full desktop:flex">
        <Swiper
          direction="vertical"
          pagination={{
            type: "bullets",
            clickable: true,
            el: ".custom-pagination",
            bulletClass: "custom-bullet",
            bulletActiveClass: "custom-bullet-active",
          }}
          autoplay={{ delay: 2000 }}
          loop={true}
          modules={[Autoplay, Pagination]}
          className="h-[71px] w-[650.23px]"
        >
          {data.map(({ id }) => (
            <SwiperSlide
              key={id}
              className="flex items-end justify-center pr-[-1px]"
            >
              <div className="bg-gradient-to-r from-gray-700 to-blue-900 text-white 
              h-[71px] w-[600px] rounded-b-lg flex flex-row items-center justify-between pl-[24.2px] pr-[17.16px]">
                <div>
                  <h2 className="font-variation-customOpt16wght700 font-bold text-[16px] tracking-[0.3px]">
                    Imate cvetličarno?
                  </h2>
                  <p className="font-variation-customOpt12 text-[12px] font-normal">
                    Otvoritvena akcija BREZ RIZIKA pravkar poteka. Sodelujmo!
                  </p>
                </div>
                <div className="flex w-[140.17px] h-[34px] items-center justify-center rounded-lg bg-blue-100 transition-colors hover:bg-blue-200">
                  <p className="text-[14px] self-center text-blue-800 line-clamp-1">
                    Več informacij
                  </p>
                </div>
              </div>
            </SwiperSlide>
          ))}
          <div className="custom-pagination flex flex-row desktop:flex-col ml-[13px]"></div>
        </Swiper>
      </div>
      <style jsx global>{`
        .custom-pagination {
          position: absolute;
          z-index: 50;
          transform: translateY(-50%);
          gap: 5px;
          left: 40px;
        }
        .customx-pagination {
          position: absolute;
          z-index: 50;
          right: 5px;
          gap: 5px;
        }
        .custom-bullet {
          width: 16px;
          height: 16px;
          background: linear-gradient(135deg, #c3c6c8 0%, #e3e5e5 100%);
          border-radius: 50%;
          opacity: 0.5;
          cursor: pointer;
        }
        .custom-bullet-active {
          background: linear-gradient(135deg, #d9d9d9 0%, #ffffff 100%);
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
          opacity: 1;
        }
      `}</style>
    </section>
  );
};

export default BottomSlider;
