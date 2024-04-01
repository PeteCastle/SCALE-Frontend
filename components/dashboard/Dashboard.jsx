import React, { useEffect, useState } from "react";
import arrow from "/arrow.svg";
import fumigation from "/mosquito-fumigation.svg";
import arrowred from "/arrow-red.svg";
import arrowgreen from "/arrow-green.svg";
import iconsearch from "/search-fumigation.svg";
import clock from "/clock-icon.svg";
import star from "/star-icon.svg";
import target from "/target-icon.svg";
import bulb from "/bulb-icon.svg";
import Summary from "./Summary";
import Operation from "./Operation";
import Detected from "./Detected";
import Fumigation from "./Fumigation";
import {
  LineChart,
  Line,
  PieChart,
  Pie,
  Cell,
  BarChart,
  Rectangle,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const Dashboard = () => {

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
    <section className="w-full h-auto min-h-screen py-5 gap-5">
      <div className="w-11/12 xl:w-4/5 h-2/5 xl:h-[700px] mb-5 m-auto bg-[#F9F5E6] border-2 p-3 xl:p-5 rounded-xl shadow-md flex flex-col">
        <h1 className="font-bold pb-3 text-xl xl:text-3xl">Live Dashboard</h1>
        <div className="w-full xl:h-full h-60 ">
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

      <div className="w-11/12 xl:w-4/5 h-2/5 xl:h-[500px] mb-5 m-auto">
        <div className="w-full h-full grid gap-5 xl:grid-cols-2">
          <div className="col-span-1">
            <div className="w-full h-full border"></div>
          </div>
          <div className="w-full h-full col-span-1">
            <div className="w-full border h-full max-h-[350px] xl:max-h-none flex flex-col xl:p-5">
              <div className="w-11/12 m-auto flex flex-wrap justify-center items-center gap-2 xl:gap-5">
                <div className="flex gap-2 items-center">
                  <input
                    type="color"
                    value={"#6C724B"}
                    name=""
                    id=""
                    className="w-6 h-6 outline-none border-black"
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
                    className="w-6 h-6 outline-none border-black"
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
                    className="w-6 h-6 outline-none border-black"
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
                    className="w-6 h-6 outline-none border-black"
                    disabled
                  />
                  <label htmlFor="" className="text-xs xl:text-base">
                    Week 4
                  </label>
                </div>
              </div>
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
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 xl:w-4/5 h-2/5 xl:h-[500px] mb-5 m-auto">
        <div className="w-full  h-full flex flex-col xl:grid xl:grid-cols-4 gap-5 xl:grid-rows-2">
          <div className="col-span-1 xl:row-span-2 grid grid-cols-1 grid-rows-2 gap-5 ">
            <div className="relative col-span-1 row-span-1 border bg-[#EBEEE8] rounded-md shadow-md p-5 flex flex-col gap-3">
              <p className="font-semibold">Mosquito Fumigation Count</p>
              <figure>
                <img src={fumigation} alt="" />
              </figure>
              <p className="text-4xl font-bold">20.00</p>
              <p
                className={`absolute bottom-10 right-10 flex gap-1 items-center text-4xl text-red-800 font-semibold`}
              >
                <img src={arrowred} alt="" />
                <p>{`180%`}</p>
              </p>
            </div>
            <div className="relative col-span-1 row-span-1 border bg-[#EBEEE8] rounded-md shadow-md p-5 flex flex-col gap-3">
              <p className="font-semibold">Mosquito Detection Count</p>
              <figure>
                <img src={iconsearch} alt="" />
              </figure>
              <p className="text-4xl font-bold">20.00</p>
              <p
                className={`absolute bottom-10 right-10 flex gap-1 items-center text-4xl text-green-800 font-semibold`}
              >
                <img src={arrowgreen} alt="" />
                <p>{`180%`}</p>
              </p>
            </div>
          </div>
          <div className="xl:col-span-3 xl:row-span-2 bg-[#ECF4C6] rounded-xl shadow-md p-5 flex flex-col gap-5">
            <h1 className="font-bold text-xl xl:text-2xl">
              Fumigation Water Level
            </h1>
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
        </div>
      </div>

      <div className="w-11/12 xl:w-4/5 h-2/5 xl:h-[500px] m-auto">
        <div className="w-full h-full grid xl:grid-cols-5 gap-5">
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
          <div className="xl:col-span-2 pt-5 flex flex-col gap-5">
            <h1 className="font-bold text-2xl pl-5">KPIs</h1>
            <div className="h-full grid xl:grid-cols-2 xl:grid-rows-2 gap-5">
              <div className=" relative col-span-1 row-span-1 border rounded-xl shadow-md bg-[#EBEEE8] p-5">
                <p className="font-semibold">Average Inference Time</p>
                <figure>
                  <img src={clock} alt="" />
                </figure>
                <p className="font-bold text-4xl">20.00</p>
                <div className="absolute left-0 top-0 xl:pr-2 2xl:pr-5 w-full h-full flex items-center justify-end ">
                  <p className="2xl:text-3xl bg-green-500/40 rounded-full text-black px-4 p-2">
                    + 10.12
                  </p>
                </div>
              </div>
              <div className=" relative col-span-1 row-span-1 border rounded-xl shadow-md bg-[#EBEEE8] p-5">
                <p className="font-semibold">Average Confidence</p>
                <figure>
                  <img src={star} alt="" />
                </figure>
                <p className="font-bold text-4xl">20.00</p>
                <div className="absolute left-0 top-0 xl:pr-2 2xl:pr-5 w-full h-full flex items-center justify-end ">
                  <p className="2xl:text-3xl bg-red-500/40 rounded-full text-black px-4 p-2">
                    + 10.12
                  </p>
                </div>
              </div>
              <div className=" relative col-span-1 row-span-1 border rounded-xl shadow-md bg-[#EBEEE8] p-5">
                <p className="font-semibold">Precision Score</p>
                <figure>
                  <img src={target} alt="" />
                </figure>
                <p className="font-bold text-4xl">20.00</p>
                <div className="absolute left-0 top-0 xl:pr-2 2xl:pr-5 w-full h-full flex items-center justify-end ">
                  <p className="2xl:text-3xl bg-red-500/40 rounded-full text-black px-4 p-2">
                    + 10.12
                  </p>
                </div>
              </div>
              <div className=" relative col-span-1 row-span-1 border rounded-xl shadow-md bg-[#EBEEE8] p-5">
                <p className="font-semibold">Recall Score</p>
                <figure>
                  <img src={bulb} alt="" />
                </figure>
                <p className="font-bold text-4xl">20.00</p>
                <div className="absolute left-0 top-0 xl:pr-2 2xl:pr-5 w-full h-full flex items-center justify-end ">
                  <p className="2xl:text-3xl bg-green-500/40 rounded-full text-black px-4 p-2">
                    + 10.12
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
