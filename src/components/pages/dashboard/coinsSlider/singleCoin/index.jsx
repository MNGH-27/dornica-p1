import { useEffect, useState } from "react";

import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

export default function SingleCoin({ coinItem }) {
  const [chart, setChart] = useState({
    chart: {
      type: "area",
      height: "150",
      responsive: {
        rules: [
          {
            condition: {
              maxWidth: 500,
            },
            chartOptions: {
              legend: {
                enabled: false,
              },
            },
          },
        ],
      },
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["1h", "24h", "7d", "14d"],
      visible: false, // hide the x-axis
      labels: {
        enabled: false, // disable the x-axis labels
      },
    },
    yAxis: {
      visible: false, // hide the x-axis
      labels: {
        enabled: false, // disable the x-axis labels
      },
    },
    plotOptions: {
      area: {
        threshold: null, // set the threshold to null to fill the area without considering the zero line
        lineWidth: 4, // increase the width of the attaching line
        lineColor: "#2AC479", // change the color of the attaching line
        marker: {
          radius: 3, // decrease the size of the dots
        },
      },
    },
    series: {
      name: "",
      data: [5, 3, 4, 7],
      stack: "coins",
      color: {
        linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
        stops: [
          [0, "#2AC479"],
          [1, "#2AC47900"],
        ],
      },
      marker: {
        fillColor: "#FFFFFF",
        lineWidth: 2,
        lineColor: null, // null to use the same color as the series
      },
    },
  });

  useEffect(() => {
    //create array of currency for chart
    const chartArray = [
      +coinItem.price_change_percentage_1h_in_currency.toFixed(2),
      +coinItem.price_change_percentage_24h_in_currency.toFixed(2),
      +coinItem.price_change_percentage_7d_in_currency.toFixed(2),
      +coinItem.price_change_percentage_14d_in_currency.toFixed(2),
    ];

    //create template object to change data
    const tempObj = chart;

    //change name of chart to current chart
    chart.series.name = coinItem.name;
    //add data to chart
    chart.series.data = chartArray;

    //add data to state
    setChart({ ...tempObj });
  }, []);

  return (
    <div className="overflow-hidden bg-white flex flex-col items-center justify-center gap-3 p-2 sm:p-5 rounded-2xl">
      <div className="flex items-center justify-between w-full">
        <div className="flex items-center justify-start gap-2">
          <img
            src={coinItem.image}
            alt="bit coin logo"
            className="w-12 h-12 rounded-full"
          />
          <div className="flex flex-col items-center justify-start">
            <span className="font-semibold">{coinItem.name}</span>
            <span className="font-semibold text-[#AEAEAE] text-[13px]">
              {coinItem.symbol}
            </span>
          </div>
        </div>
        <div className="flex flex-col items-center justify-start gap-2">
          <span
            dir="ltr"
            className={`font-semibold ${
              +coinItem.price_change_percentage_1h_in_currency > 0
                ? "text-[#29C57A]"
                : "text-[#EA3838]"
            }`}
          >
            {+coinItem.price_change_percentage_1h_in_currency.toFixed(2)}%
          </span>
          <span className="font-semibold text-sm text-[#1E1E1E]">
            {coinItem.current_price} دلار
          </span>
        </div>
      </div>
      <div className="w-full mx-auto">
        <HighchartsReact highcharts={Highcharts} options={chart} />
      </div>
    </div>
  );
}
