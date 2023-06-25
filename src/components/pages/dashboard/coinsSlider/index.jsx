import { useEffect } from "react";

//component
import SingleCoin from "./singleCoin";

//swiper
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

//Svg
import { ReactComponent as ArrowLeftSvg } from "./../../../../assets/svg/arrowSquerLeft.svg";

export default function CoinsSlider() {
  return (
    <div className="relative flex items-center justify-center w-full">
      <button className="coin-swiper-next-btn mx-2">
        <ArrowLeftSvg className="rotate-180" />
      </button>

      <Swiper
        // install Swiper modules
        className="max-w-[100%]"
        modules={[Navigation, A11y]}
        spaceBetween={25}
        navigation={{
          nextEl: ".coin-swiper-next-btn",
          prevEl: ".coin-swiper-prev-btn",
        }}
        breakpoints={{
          428: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          1024: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        allowTouchMove
      >
        {[1, 2, 3, 4, 5].map((signleCoin, index) => (
          <SwiperSlide key={index}>
            <SingleCoin />
          </SwiperSlide>
        ))}
      </Swiper>

      <button className="coin-swiper-prev-btn mx-2">
        <ArrowLeftSvg />
      </button>
    </div>
  );
}
