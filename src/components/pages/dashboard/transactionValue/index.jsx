import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

//option of HighChart of TransactionValue
const options = {
  chart: {
    type: "column",
    height: 200,
  },
  title: {
    text: "",
  },
  xAxis: {
    visible: false, // hide the x-axis
    labels: {
      enabled: false, // disable the x-axis labels
    },
  },
  yAxis: {
    title: {
      text: "",
    },
    min: 0,
    max: 100,
    tickAmount: 5, // this is the key line to increase the number of zeros
    gridLineDashStyle: "dash", // this is the key line to make the zero axis dashed
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
          dataLabels: {
            enabled: true,
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
