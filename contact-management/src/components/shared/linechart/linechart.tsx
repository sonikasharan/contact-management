// src/LineChart.tsx

import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Title,
  Tooltip,
  Legend,
  PointElement
);

interface Data {
  cases: { [key: string]: number };
  deaths: { [key: string]: number };
  recovered: { [key: string]: number };
}

interface LineChartData {
  historicalData: any;
}

const LineChart: React.FC<LineChartData> = ({ historicalData }) => {
  const [selectedKey, setSelectedKey] = useState<keyof Data>("cases");
  const labels = Object.keys(historicalData[selectedKey]);
  const values = Object.values(historicalData[selectedKey]);

  const chartData = {
    labels,
    datasets: [
      {
        label: selectedKey,
        data: values,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };
  console.log("chartData", chartData);

  return (
    <div className="h-full w-full py-6 px-3 relative border-2  rounded-md">
      <select
        onChange={(e) => setSelectedKey(e.target.value as keyof Data)}
        value={selectedKey}
        className="  absolute  top-1 right-1 float-end w-[150px] px-3 py-2 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
      >
        <option value="cases">Cases</option>
        <option value="deaths">Deaths</option>
        <option value="recovered">Recovered</option>
      </select>
      <div className="h-full w-full">
        <Line options={options} data={chartData} />
      </div>
    </div>
  );
};

export default LineChart;
