import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const UserEngagement = () => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 12 }, (_, i) => currentYear - 10 + i);

  const [selectedYear, setSelectedYear] = useState(currentYear.toString());

  // Dummy data for User Engagement
  const dummyChartData = [
    { month: "January", Students: 120, Teachers: 200 },
    { month: "February", Students: 150, Teachers: 220 },
    { month: "March", Students: 180, Teachers: 250 },
    { month: "April", Students: 200, Teachers: 300 },
    { month: "May", Students: 230, Teachers: 320 },
    { month: "June", Students: 190, Teachers: 280 },
    { month: "July", Students: 250, Teachers: 340 },
    { month: "August", Students: 270, Teachers: 360 },
    { month: "September", Students: 210, Teachers: 310 },
    { month: "October", Students: 300, Teachers: 400 },
    { month: "November", Students: 260, Teachers: 350 },
    { month: "December", Students: 310, Teachers: 420 },
  ];

  const chartData = dummyChartData;

  return (
    <div className="bg-white p-5 w-[100%] h-[300px] rounded-2xl border">
      <div className="flex justify-between items-center mb-5">
        <h2 className="font-bold">User Engagement</h2>
        <div className="relative">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(e.target.value)}
            className="border rounded-md px-3 py-2 w-32 cursor-pointer"
            style={{
              maxHeight: "150px",
              overflowY: "scroll",
            }}
          >
            {years
              .slice()
              .reverse()
              .map((year) => (
                <option key={year} value={year}>
                  {year}
                </option>
              ))}
          </select>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={chartData}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 40,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" tickFormatter={(month) => month.slice(0, 3)} />
          <YAxis />
          <Tooltip />
          <Legend verticalAlign="bottom" align="center" />
          <Line
            type="monotone"
            dataKey="Students"
            stroke="#b58700"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Teachers" stroke="#5c2579cc" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default UserEngagement;
