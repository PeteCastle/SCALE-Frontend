import React from "react";
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

const Summary = () => {
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
    <div className="col-span-3 border shadow-md rounded-xl flex flex-col py-2 md:p-5">
      <div className="w-11/12 m-auto flex justify-center items-center gap-2 xl:gap-5">
        <div className="flex gap-2 items-center">
          <input
            type="color"
            value={"#E0BD68"}
            name=""
            id=""
            className="w-6 h-6 outline-none border-none"
            disabled
          />
          <label htmlFor="" className="text-xs xl:text-base">
            Detected Mosquito
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="color"
            value={"black"}
            name=""
            id=""
            className="w-6 h-6 outline-none border-none"
            disabled
          />
          <label htmlFor="" className="text-xs xl:text-base">
            Number of Recent Fumigation Efforts
          </label>
        </div>
      </div>
      <div className="w-full h-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
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

export default Summary;
