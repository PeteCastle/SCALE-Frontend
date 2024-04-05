import React from "react";
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
    <div className="w-full h-60 xl:h-full">
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
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Operation;
