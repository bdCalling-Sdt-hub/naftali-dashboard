import React, { useState } from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";
import { useTotalEarningQuery } from "../../../redux/apiSlices/dashboardSlice";

const TotalEarning = () => {
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear());
  const { data: totalEarningData, isLoading } =
    useTotalEarningQuery(selectedYear);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const data = totalEarningData?.data || [];
  // console.log(data);

  // Month names array
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  // Map the data to include month names
  const chartData = data.map((item) => ({
    ...item,
    month: monthNames[item.month - 1], // Map month number to name
  }));

  const currentYear = new Date().getFullYear();
  const years = Array.from(
    { length: 12 },
    (_, i) => currentYear - 10 + i
  ).reverse();

  return (
    <div className="bg-white border p-5 rounded-2xl" style={{ width: "100%" }}>
      <div className="flex justify-between items-center mb-3">
        <p className="font-bold">Total Earning</p>
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(parseInt(e.target.value, 10))}
          className="border rounded-md px-3 py-1 cursor-pointer"
          style={{
            maxHeight: "150px",
            overflowY: "scroll",
          }}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
      </div>

      <ResponsiveContainer width="100%" height={200}>
        <AreaChart
          data={chartData}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="totalEarnings"
            stroke="#b58700"
            fill="#f7e6b4"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalEarning;
