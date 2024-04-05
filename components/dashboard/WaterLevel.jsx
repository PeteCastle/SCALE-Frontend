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
import { url } from "../../utils/contants";

const WaterLevel = () => {

  const [data, setData] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/v1/dashboard/water_level/status`);

        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }
        const json = await response.json();
        const data = Object.entries(json).map(([name, Water]) => ({ name, Water }));
        setData(data);
        console.log(data);
      } catch (err) {
        console.error("Unable to fetch data, server error");
      }
    };

    fetchData()
  }, []);

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
            <XAxis dataKey={"name"}  tick={{ fontSize: 10 }} interval={0} />
            <YAxis tick={{ fontSize: 10 }} interval={0} />
            <Tooltip />
            {/* <Legend/> */}
            <Bar
              radius={[10, 10, 0, 0]}
              dataKey="Water"
              fill="rgba(224,189,104)"
              activeBar={
                <Rectangle
                  fill="rgba(224,189,104)"
                  stroke="rgba(224,189,104)"
                />
              }
            />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default WaterLevel;
