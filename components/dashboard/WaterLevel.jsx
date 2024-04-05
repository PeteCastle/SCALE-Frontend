import React, { useEffect, useState } from "react";
import {
  BarChart,
  Rectangle,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const WaterLevel = () => {
  const data = [
    {
      name: "12 Hours",
      "Detected Mosquito": 25,
      "Number of Recent Fumigation Efforts": 70,
    },
    {
      name: "8 Hours",
      "Detected Mosquito": 5,
      "Number of Recent Fumigation Efforts": 60,
    },
    {
      name: "4 Hours",
      "Detected Mosquito": 10,
      "Number of Recent Fumigation Efforts": 50,
    },
    {
      name: "2 Hours",
      "Detected Mosquito": 15,
      "Number of Recent Fumigation Efforts": 40,
    },
    {
      name: "1 Hour",
      "Detected Mosquito": 20,
      "Number of Recent Fumigation Efforts": 30,
    },
  ];
  return (
    <div className="xl:col-span-3 xl:row-span-2 bg-[#ECF4C6] rounded-xl shadow-md p-5 flex flex-col gap-5">
      <h1 className="font-bold text-xl xl:text-2xl">Fumigation Water Level</h1>
      <div className="w-full h-60 xl:h-full ">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" tick={{ fontSize: 10 }} interval={0} />
            <YAxis tick={{ fontSize: 10 }} interval={0} />
            <Tooltip />
            {/* <Legend/> */}
            <Bar
              radius={[10, 10, 0, 0]}
              dataKey="Detected Mosquito"
              fill="rgba(224,189,104)"
              activeBar={
                <Rectangle
                  fill="rgba(224,189,104)"
                  stroke="rgba(224,189,104)"
                />
              }
            />
            <Bar
              radius={[10, 10, 0, 0]}
              dataKey="Number of Recent Fumigation Efforts"
              fill="black"
              activeBar={<Rectangle fill="black" stroke="black" />}
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WaterLevel;
