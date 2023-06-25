//pic
import BitCoinLogo from "./../../../../../assets/img/Bitcoinlogo.png";

export default function SingleFavoriteCoin() {
  return (
    <div className="flex items-center justify-between gap-2 border-b py-3">
      <div className="flex items-center gap-2">
        <img
          alt="bit coin svg"
          src={BitCoinLogo}
          className="w-6 h-6 rounded-full"
        />
        <span className="text-sm font-semibold">بیتکوین</span>
        <span className="text-xs font-semibold text-[#B3B3B3]">BTC</span>
      </div>
      <span className="text-sm font-semibold text-[#2AC479]">+1.68%</span>
    </div>
  );
}
