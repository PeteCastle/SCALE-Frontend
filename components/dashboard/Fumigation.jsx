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

const Fumigation = () => {
  const dataFumigation = [
    {
      name: "25-03-2024",
      "Number of Recent Fumigation": 2400,
    },
    {
      name: "26-03-2024",
      "Number of Recent Fumigation": 1398,
    },
    {
      name: "27-03-2024",
      "Number of Recent Fumigation": 9800,
    },
    {
      name: "28-03-2024",
      "Number of Recent Fumigation": 3908,
    },
    {
      name: "29-03-2024",
      "Number of Recent Fumigation": 4800,
    },
  ];
  return (
    <div className="col-span-1 rounded-xl border shadow-md flex flex-col gap-5 md:p-5">
      {/* <p className='font-semibold'>Number of Recent Fumigation</p> */}
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          width={500}
          height={300}
          data={dataFumigation}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} />
          <YAxis yAxisId="left" tick={{ fontSize: 10 }} interval={0} />
          <Tooltip />
          <Legend verticalAlign="top" height={36} />
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="Number of Recent Fumigation"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Fumigation;
