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
        <div className="col-span-1 rounded-md border shadow-md flex flex-col gap-5 md:p-5">
                {/* <p className='font-semibold'>Recent Detected Mosquitos</p> */}
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    width={500}
                    height={300}
                    data={dataLine}
                    margin={{
                      top: 5,
                      right: 30,
                      left: 20,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis
                      dataKey="name"
                      tick={{ fontSize: 10 }}
                      interval={0}
                    />
                    <YAxis
                      yAxisId="left"
                      tick={{ fontSize: 10 }}
                      interval={0}
                    />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
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
    )
}

export default Detected