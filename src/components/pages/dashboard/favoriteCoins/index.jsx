//component
import SingleFavoriteCoin from "./singleFavoriteCoin";

export default function FavoriteCoin() {
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
        <SingleFavoriteCoin />
        <SingleFavoriteCoin />
        <SingleFavoriteCoin />
        <SingleFavoriteCoin />
        <SingleFavoriteCoin />
        <SingleFavoriteCoin />
        <SingleFavoriteCoin />
        <SingleFavoriteCoin />
        <SingleFavoriteCoin />
      </div>
      <div className="custome-opacity-gredient absolute bottom-0 h-60 w-full"></div>
    </div>
  );
}
