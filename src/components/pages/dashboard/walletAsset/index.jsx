//pic
import NBChartPIE from "./../../../../assets/img/chart/NBcharts-PIE.png";

export default function WalletAsset() {
  return (
    <>
      <span className="font-semibold">دارایی‌های کیف پول</span>
      <div className="flex items-center justify-between gap-2 h-full">
        <ul className="flex flex-col items-start justify-center gap-2">
          <li className="flex items-center justify-start gap-2">
            <i className="w-2 h-2 rounded-full bg-[#F7931A]" />
            <span className="font-semibold">بیتکوین</span>
            <span className="font-semibold text-[13px] text-[#AEAEAE]">
              45 درصد
            </span>
          </li>
          <li className="flex items-center justify-start gap-2">
            <i className="w-2 h-2 rounded-full bg-[#7EB6F7]" />
            <span className="font-semibold">اتریوم</span>
            <span className="font-semibold text-[13px] text-[#AEAEAE]">
              30 درصد
            </span>
          </li>
          <li className="flex items-center justify-start gap-2">
            <i className="w-2 h-2 rounded-full bg-[#2E2E2E]" />
            <span className="font-semibold">ترون</span>
            <span className="font-semibold text-[13px] text-[#AEAEAE]">
              25 درصد
            </span>
          </li>
        </ul>
        <img
          src={NBChartPIE}
          alt="chart"
          className="w-[100px] md:w-fit xl:w-[100px] 2xl:w-fit"
        />
      </div>
    </>
  );
}
