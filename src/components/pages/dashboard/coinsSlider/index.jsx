import { useEffect, useState } from "react";

//react router dom
import { toast } from "react-toastify";

//component
import SingleCoin from "./singleCoin";

//service
import { GetTrendCoins } from "../../../../service/coins";

//swiper
import { Navigation, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

//Svg
import { ReactComponent as ArrowLeftSvg } from "./../../../../assets/svg/arrowSquerLeft.svg";

export default function CoinsSlider() {
  //state
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  //get coin list in intial component
  useEffect(() => {
    httpGetCoinsList();
  }, []);

  const httpGetCoinsList = async () => {
    setIsLoading(true);
    try {
      const response = await GetTrendCoins(null, { coinNumber: 6 });
      //check response status
      if (response.status === 200) {
        //get coins successfully => add to coins state
        setCoins([...response.data]);
      } else {
        //fail in fetch coins => show error
        toast.error("دریافت بیتکوین با مشکل مواجه شد");
      }
    } catch (error) {
      console.log("error in get trend coin => ", error);
    }
    setIsLoading(false);
  };

  return (
    <div className="relative flex items-center justify-center w-full">
      <button className="coin-swiper-next-btn mx-1 sm:mx-2">
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
          580: {
            slidesPerView: 2,
          },
          909: {
            slidesPerView: 3,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
        allowTouchMove
      >
        {
          //check if loading
          isLoading
            ? //loading component in fetchin coin
              [1, 2, 3, 4, 5].map((signleCoin, index) => (
                <SwiperSlide key={index}>
                  <LoadingSlider />
                </SwiperSlide>
              ))
            : //showing component after coin fetched
              coins.map((signleCoin, index) => (
                <SwiperSlide key={index}>
                  <SingleCoin coinItem={signleCoin} />
                </SwiperSlide>
              ))
        }
      </Swiper>

      <button className="coin-swiper-prev-btn mx-1 sm:mx-2">
        <ArrowLeftSvg />
      </button>
    </div>
  );
}

function LoadingSlider() {
  return (
    <div className="bg-white flex flex-col items-center justify-start gap-3 p-2 sm:p-5 rounded-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start gap-2">
          <div className="bg-gray-400 w-12 h-12 rounded-full animate-pulse"></div>
          <div className="flex flex-col items-center justify-start gap-2">
            <span className="w-10 h-1 rounded-md bg-gray-400 animate-pulse"></span>
            <span className="w-10 h-1 rounded-md bg-gray-400 animate-pulse"></span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-2">
          <span className="w-10 h-1 rounded-md bg-gray-400 animate-pulse"></span>
          <span className="w-10 h-1 rounded-md bg-gray-400 animate-pulse"></span>
        </div>
      </div>
      <div className="w-full h-16 rounded-md bg-gray-400 animate-pulse"></div>
    </div>
  );
}
