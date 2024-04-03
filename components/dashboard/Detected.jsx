import React from "react";
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

const Detected = () => {
  const dataLine = [
    {
      name: "25-03-2024",
      "Recent Detected Mosquitos": 2400,
    },
    {
      name: "26-03-2024",
      "Recent Detected Mosquitos": 1398,
    },
    {
      name: "27-03-2024",
      "Recent Detected Mosquitos": 9800,
    },
    {
      name: "28-03-2024",
      "Recent Detected Mosquitos": 3908,
    },
    {
      name: "29-03-2024",
      "Recent Detected Mosquitos": 4800,
    },
  ];
  return (
    <div className="xl:col-span-3 border bg-[#ECF5BE] rounded-xl shadow-md p-5 flex flex-col gap-5">
      <h1 className="font-bold text-lg">System Uptime</h1>
      <div className="w-full  h-60 xl:h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={dataLine}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} />
            <YAxis yAxisId="left" tick={{ fontSize: 10 }} interval={0} />
            <Tooltip />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="Recent Detected Mosquitos"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Detected;
