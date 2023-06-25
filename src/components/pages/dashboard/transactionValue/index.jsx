import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
const options = {
  chart: {
    type: "column",
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: ["", "", "", "", "", "", "", "", "", "", "", ""],
  },
  yAxis: {
    title: {
      text: "",
    },
    min: 0,
    max: 100,
  },
  series: [
    {
      name: "",
      data: [
        {
          y: 40,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 88,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 60,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 44,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 19,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 61,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 59,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 79,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 76,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 54,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 64,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
        {
          y: 97,
          color: {
            linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
            stops: [
              [0, "#388AEA"],
              [1, "#388AEA00"],
            ],
          },
        },
      ],
    },
  ],
};
export default function TransactionValue() {
  return (
    <>
      <span className="font-semibold">ارزش معاملات هفته گذشته</span>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </>
  );
}
