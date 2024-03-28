import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  BarChart,
  Rectangle,
  Bar,
  Cell,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import arrow from '/arrow.svg'


const Dashboard = () => {
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

  const dataLine = [
    {
      name: "Page A",
      "Recent Detected Mosquitos": 2400,
    },
    {
      name: "Page B",
      "Recent Detected Mosquitos": 1398,
    },
    {
      name: "Page C",
      "Recent Detected Mosquitos": 9800,
    },
    {
      name: "Page D",
      "Recent Detected Mosquitos": 3908,
    },
    {
      name: "Page E",
      "Recent Detected Mosquitos": 4800,
    },
    {
      name: "Page F",
      "Recent Detected Mosquitos": 3800,
    },
    {
      name: "Page G",
      "Recent Detected Mosquitos": 4300,
    },
  ];

  const dataFumigation = [
    {
      name: "Page A",
      "Number of Recent Fumigation": 2400,
    },
    {
      name: "Page B",
      "Number of Recent Fumigation": 1398,
    },
    {
      name: "Page C",
      "Number of Recent Fumigation": 9800,
    },
    {
      name: "Page D",
      "Number of Recent Fumigation": 3908,
    },
    {
      name: "Page E",
      "Number of Recent Fumigation": 4800,
    },
    {
      name: "Page F",
      "Number of Recent Fumigation": 3800,
    },
    {
      name: "Page G",
      "Number of Recent Fumigation": 4300,
    },
  ];

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
    <section className="w-full h-full min-h-screen">
      <div className="h-full w-11/12 m-auto">
        <h1 className="font-bold text-2xl py-5">Live Summary</h1>
        <div className="h-full grid grid-cols-auto grid-rows-2 gap-5 pb-5">
          <div className="col-span-1 row-span-1 grid grid-cols-1 md:grid-cols-5 gap-5">
            <div className="col-span-3 border shadow-md rounded-xl flex flex-col py-2 md:p-5">
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
                    <XAxis dataKey="name" />
                    <YAxis />
                    <Tooltip />
                    <Legend verticalAlign="top" height={36} />
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
            <div className="col-span-3 md:col-span-2 border shadow-md flex flex-col rounded-md">
              <div className="w-full h-fit flex items-center justify-between p-5">
                <div className="w-fit h-full flex items-center">
                    <div>
                        <h1 className="font-bold text-xl xl:text-4xl">March 2024</h1>
                        <p className="font-regular text-xs xl:text-xl">Fumigation Operation</p>
                    </div>
                </div>
                <div className="w-fit h-full flex items-center gap-5">
                    <button className="w-full h-full max-w-8 xl:max-w-12 max-h-8 xl:max-h-12 border rounded-full p-1  xl:py-3 xl:px-3 hover:bg-gray-400 ease-in-out">
                        <figure className="w-full h-full">
                            <img src={arrow} className="w-full h-full object-contain rotate-180" alt="" />
                        </figure>
                    </button>
                    <button className="w-full h-full max-w-8 xl:max-w-12 max-h-8 xl:max-h-12 border rounded-full p-1 xl:py-3 xl:px-3 hover:bg-gray-400 ease-in-out">
                        <figure className="w-full h-full">
                            <img src={arrow} className="w-full h-full object-contain" alt="" />
                        </figure>
                    </button>
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
                    innerRadius={30}
                  >
                    {dataPie.map((entry, index) => (
                      <Cell
                        key={`cell-${index}`}
                        fill={entry.color}
                        fontStyle={"black"}
                      />
                    ))}
                  </Pie>
                  <Legend
                            // wrapperStyle={{display:'flex', justifyContent:'center', alignItems:'center',background:'#123235', border:'1px solid black', flexWrap:'wrap', width:'200px' }}
                            iconSize={20}
                            layout="horizontal"
                            verticalAlign="top"
                            align="center"
                        />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          <div className="col-span-1 row-span-1 flex flex-col">
            <h1 className="py-5 font-bold text-2xl">Statistics</h1>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-5">
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
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
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
                    <XAxis dataKey="name" />
                    <YAxis yAxisId="left" />
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
