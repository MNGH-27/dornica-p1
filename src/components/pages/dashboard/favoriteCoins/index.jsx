import { useState, useEffect } from "react";

//service
import { GetTrendCoins } from "../../../../service/coins";

//react toastify
import { toast } from "react-toastify";

//component
import SingleFavoriteCoin from "./singleFavoriteCoin";

export default function FavoriteCoin() {
  //state
  const [isLoading, setIsLoading] = useState(true);
  const [coins, setCoins] = useState([]);

  //fetch data in initail component
  useEffect(() => {
    httpGetCoinsList();
  }, []);

  const httpGetCoinsList = async () => {
    setIsLoading(true);
    try {
      const response = await GetTrendCoins(null, { coinNumber: 10 });
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
    <div className="relative overflow-hidden w-full bg-white rounded-2xl p-5">
      <div className="flex items-center justify-between gap-2">
        <span className="font-semibold">محبوب‌ترین کوین‌ها</span>
        <select className="border border-[#BFBFBF] text-[#BFBFBF] rounded-lg px-2 py-1">
          <option>روز</option>
          <option>هفته</option>
          <option>ماه</option>
          <option>سال</option>
        </select>
      </div>
      <div className="flex items-center justify-between gap-2 font-medium text-sm my-5">
        <span>نام</span>
        <span>24 ساعت گذشته</span>
      </div>
      <div>
        {isLoading
          ? [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((singleLoadingItem) => (
              <LoadingFavotieCoin key={singleLoadingItem} />
            ))
          : coins.map((singleCoin, index) => (
              <SingleFavoriteCoin singleCoin={singleCoin} key={index} />
            ))}
      </div>
      <div className="custome-opacity-gredient absolute bottom-0 h-60 w-full"></div>
    </div>
  );
}

function LoadingFavotieCoin() {
  return (
    <div className="flex items-center justify-between gap-2 border-b py-3">
      <div className="flex items-center gap-2">
        <div className="w-6 h-6 rounded-full bg-gray-400 animate-pulse"></div>
        <span className="w-4 h-1 rounded-full bg-gray-400 animate-pulse"></span>
        <span className="w-4 h-1 rounded-full bg-gray-400 animate-pulse"></span>
      </div>
      <span className="w-4 h-1 rounded-full bg-gray-400 animate-pulse"></span>
    </div>
  );
}
