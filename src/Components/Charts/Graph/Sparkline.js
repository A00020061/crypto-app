import React from "react";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from "chart.js";
import { Line } from "react-chartjs-2";
import moment from "moment";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);
const LineGraph = (props) => {
  return (
    <Line
      data={{
        labels: props.data.map((item) => {
          return moment.unix(item[0] / 1000).format("MM-DD-YY");
        }),
        datasets: [
          {
            data: props.data.map((item) => item[1]),
            borderColor: "green",
            pointRadius: 0,
            borderWidth: 1.2,
            fill: false,
          },
          {
            data: props.volume.map((item) => item[1] / 10000000),
            borderColor: "lightblue",
            borderWidth: 1.2,
            pointRadius: 0,
          },
        ],
      }}
      options={{
        responsive: true,
        plugins: {
          legend: {
            display: false,
          },
          title: {
            display: false,
            text: "Chart.js Line Chart",
          },
        },
        scales: {
          y: {
            display: true,
            grid: {
              display: true,
              drawBorder: true,
            },
          },
          x: {
            display: true,
            grid: {
              display: true,
              drawBorder: true,
            },
          },
        },
        tension: 0.5,
      }}
    />
  );
};

export default LineGraph;
