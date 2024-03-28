import React from "react";
import arrow from "/arrow.svg";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
const Operation = () => {
  const dataPie = [
    { name: "Week 1", value: 7.7, color: "#6C724B" },
    { name: "Week 2", value: 46.2, color: "#B7BE92" },
    { name: "Week 3", value: 15.4, color: "#ECF4C3" },
    { name: "Week 4", value: 30.8, color: "#D6E19F" },
  ];

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="p-3 border rounded-xl bg-white/50 font-semibold">
          <p>{`${payload[0].name} : ${payload[0].value.toFixed(2)}%`}</p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="col-span-3 md:col-span-2 border shadow-md flex flex-col rounded-md">
      <div className="w-full h-fit flex items-center justify-between p-5">
        <div className="w-fit h-full flex items-center">
          <div>
            <h1 className="font-bold text-xl xl:text-4xl">March 2024</h1>
            <p className="font-regular text-xs xl:text-xl">
              Fumigation Operation
            </p>
          </div>
        </div>

        <div className="w-fit h-full flex items-center gap-5">
          <button className="w-full h-full max-w-8 xl:max-w-12 max-h-8 xl:max-h-12 border rounded-full p-1  xl:py-3 xl:px-3 hover:bg-gray-400 ease-in-out">
            <figure className="w-full h-full">
              <img
                src={arrow}
                className="w-full h-full object-contain rotate-180"
                alt=""
              />
            </figure>
          </button>
          <button className="w-full h-full max-w-8 xl:max-w-12 max-h-8 xl:max-h-12 border rounded-full p-1 xl:py-3 xl:px-3 hover:bg-gray-400 ease-in-out">
            <figure className="w-full h-full">
              <img
                src={arrow}
                className="w-full h-full object-contain"
                alt=""
              />
            </figure>
          </button>
        </div>
      </div>
      <div className="w-11/12 m-auto flex justify-center items-center gap-2 xl:gap-5">
        <div className="flex gap-2 items-center">
          <input
            type="color"
            value={"#6C724B"}
            name=""
            id=""
            className="w-6 h-6 outline-none border-none"
            disabled
          />
          <label htmlFor="" className="text-xs xl:text-base">
            Week 1
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="color"
            value={"#B7BE92"}
            name=""
            id=""
            className="w-6 h-6 outline-none border-none"
            disabled
          />
          <label htmlFor="" className="text-xs xl:text-base">
            Week 2
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="color"
            value={"#ECF4C3"}
            name=""
            id=""
            className="w-6 h-6 outline-none border-none"
            disabled
          />
          <label htmlFor="" className="text-xs xl:text-base">
            Week 3
          </label>
        </div>
        <div className="flex gap-2 items-center">
          <input
            type="color"
            value={"#D6E19F"}
            name=""
            id=""
            className="w-6 h-6 outline-none border-none"
            disabled
          />
          <label htmlFor="" className="text-xs xl:text-base">
            Week 4
          </label>
        </div>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Tooltip content={<CustomTooltip />} />
          <Pie
            width={500}
            height={300}
            data={dataPie}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={10}
          >
            {dataPie.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={entry.color}
                fontStyle={"black"}
              />
            ))}
          </Pie>
          {/* <Legend
                            // wrapperStyle={{display:'flex', justifyContent:'center', alignItems:'center',background:'#123235', border:'1px solid black', flexWrap:'wrap', width:'200px' }}
                            iconSize={20}
                            layout="horizontal"
                            verticalAlign="top"
                            align="center"
                        /> */}
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Operation;
