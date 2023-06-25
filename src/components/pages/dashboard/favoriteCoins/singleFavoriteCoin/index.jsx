export default function SingleFavoriteCoin({ singleCoin }) {
  return (
    <div className="flex items-center justify-between gap-2 border-b py-3">
      <div className="flex items-center gap-2">
        <img
          alt="bit coin svg"
          src={singleCoin.image}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm font-semibold">{singleCoin.name}</span>
        <span className="text-xs font-semibold text-[#B3B3B3]">
          {singleCoin.symbol}
        </span>
      </div>
      <span
        dir="ltr"
        className={`font-semibold text-sm ${
          +singleCoin.price_change_percentage_1h_in_currency > 0
            ? "text-[#29C57A]"
            : "text-[#EA3838]"
        }`}
      >
        {+singleCoin.price_change_percentage_1h_in_currency.toFixed(2)}%
      </span>
    </div>
  );
}
