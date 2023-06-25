//Pic
import BitCoinLogo from "./../../../../../assets/img/Bitcoinlogo.png";

//svg
import { ReactComponent as NbChartSvg } from "./../../../../../assets/svg/chart/NBLineChart.svg";

export default function SingleCoin() {
  return (
    <div className="bg-white flex flex-col items-center justify-start gap-3 p-2 sm:p-5 rounded-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start gap-2">
          <img
            src={BitCoinLogo}
            alt="bit coin logo"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col items-center justify-start">
            <span className="font-semibold">بیتکوین</span>
            <span className="font-semibold text-[#AEAEAE] text-[13px]">
              BTC
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-2">
          <span className="font-semibold text-[#29C57A]">+1.68%</span>
          <span className="font-semibold text-sm text-[#1E1E1E]">
            16,876 دلار
          </span>
        </div>
      </div>
      <NbChartSvg className="w-full" />
    </div>
  );
}
