import React, { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { url } from "../../utils/contants";
const Operation = () => {
  const [data, setData] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/v1/dashboard/fumigations/week`);
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error);
        }

        const json = await response.json();
        const colors = ['#6C724B', '#B7BE92', '#ECF4C3', '#D6E19F']; // Define your static colors here
        const total = Object.values(json).reduce((acc, value) => acc + value, 0);
        const result = Object.entries(json).map(([week, value], index) => {
          const dataObj = {
            week: week,
            value: value / total * 100,
            color: colors[index % colors.length] // Assign color based on index modulo length of colors array
          };
          return dataObj;
        });
        console.log(result);
        setData(result);
      } catch (err) {
        console.log(err.message);
      }
    };
    fetchData();
  }, []);


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
    <>
      <div className="w-11/12 m-auto flex flex-wrap justify-center items-center gap-2 xl:gap-5">
        {data && data.length > 0 ? data.map((val,key) => (
          <div className="flex gap-2 items-center">
          <input
            type="color"
            value={val.color}
            className="w-6 h-6 outline-none border-black"
            disabled
          />
          <label htmlFor="" className="text-xs xl:text-base">
            {val.week}
          </label>
        </div>
        )) : ''}
      </div>
      <div className="w-full h-60 xl:h-full">
        {data && data.length > 0 ?
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip content={<CustomTooltip />} />
              <Pie
                width={500}
                height={300}
                data={data}
                dataKey="value"
                nameKey="week"
                cx="50%"
                cy="50%"
                innerRadius={10}
              >
                {data.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={entry.color}
                    fontStyle={"black"}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          : ''}
      </div>
    </>
  );
};

export default Operation;
