import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const options = {
  chart: {
    plotBackgroundColor: null,
    plotBorderWidth: null,
    plotShadow: false,
    type: "pie",
  },
  title: {
    text: "",
  },
  tooltip: {
    pointFormat: "{series.name}: <b>{point.percentage:.1f}%</b>",
  },
  accessibility: {
    point: {
      valueSuffix: "%",
    },
  },
  series: [
    {
      name: "دارایی های کیف پول",
      colorByPoint: true,
      data: [
        {
          name: "بیتکوین",
          y: 45,
          color: "#F7931A",
        },
        {
          name: "اتریوم",
          y: 30,
          color: "#7EB6F7",
        },
        {
          name: "ترون",
          color: "#2E2E2E",
          y: 25,
        },
      ],
    },
  ],
};

export default function WalletAsset() {
  return (
    <>
      <span className="font-semibold">دارایی‌های کیف پول</span>
      <div className="flex flex-col overflow-hidden 2xl:flex-row items-center justify-between gap-2 h-full">
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
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </>
  );
}
