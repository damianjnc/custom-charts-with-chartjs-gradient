import React, { useState } from "react";
import { Line } from "react-chartjs-2";

const setGradientColor = (canvas, color) => {
  console.log("runs");
  const ctx = canvas.getContext("2d");
  const gradient = ctx.createLinearGradient(0, 0, 600, 550);
  gradient.addColorStop(0, color);
  gradient.addColorStop(0.95, "rgba(133, 122, 144, 0.5)");

  return gradient;
};

const getChartData = data => setGradientColor => canvas => {
  if (data.datasets) {
    let colors = ["rgba(255, 0, 255, 0.75)", "rgba(0, 255, 0, 0.75)"];
    data.datasets.forEach((set, index) => {
      set.backgroundColor = setGradientColor(canvas, colors[index]);
      set.borderColor = "white";
      set.borderWidth = 2;
    });
  }
  return data;
};

export default function App() {
  const [data, setData] = useState({
    labels: ["1", "2", "3", "4", "5"],
    datasets: [
      {
        label: "Videos Made",
        backgroundColor: "rgba(255, 0, 255, 0.75)",
        data: [4, 5, 1, 10, 32, 2, 12]
      },
      {
        label: "Subscriptions",
        backgroundColor: "rgba(0, 255, 0, 0.75)",
        data: [14, 15, 21, 0, 12, 4, 2]
      }
    ]
  });

  return (
    <div style={{ position: "relative", width: 600, height: 500 }}>
      <h3>Charts</h3>
      <Line
        options={{ responsive: true }}
        data={getChartData(data)(setGradientColor)}
      />
    </div>
  );
}
