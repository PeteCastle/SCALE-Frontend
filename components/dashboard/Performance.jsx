import React, { useEffect, useState } from "react";
import clock from "/clock-icon.svg";
import star from "/star-icon.svg";
import target from "/target-icon.svg";
import bulb from "/bulb-icon.svg";
import { url } from "../../utils/contants";

const Performance = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/v1/dashboard/kpi`);
        if (!response.ok) {
          throw new Error("Detected mosquito not found.");
        }
        const json = await response.json();
        setData(json);
      } catch (err) {
        console.log(err.message);
        throw new Error("Server Error");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="xl:col-span-2 pt-5 flex flex-col gap-5">
      <h1 className="font-bold text-2xl pl-5">KPIs</h1>
      <div className="h-full grid grid-cols-2 xl:grid-rows-2 gap-5">
        <div className="col-span-1 row-span-1 border rounded-xl shadow-md bg-[#EBEEE8] p-5">
          <div className="flex flex-col items-center">
            <p className="font-semibold">Average Inference Time</p>
            <figure>
              <img src={clock} alt="" />
            </figure>
            <p className="font-bold text-4xl">{data.average_inference_time}</p>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border rounded-xl shadow-md bg-[#EBEEE8] p-5">
          <div className="flex flex-col items-center">
            <p className="font-semibold">Average Confidence</p>
            <figure>
              <img src={star} alt="" />
            </figure>
            <p className="font-bold text-4xl">{data.average_confidence * 100}%</p>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border rounded-xl shadow-md bg-[#EBEEE8] p-5">
          <div className="flex flex-col items-center">
            <p className="font-semibold">Precision Score</p>
            <figure>
              <img src={target} alt="" />
            </figure>
            <p className="font-bold text-4xl">{data.precision_score * 100}%</p>
          </div>
        </div>
        <div className="col-span-1 row-span-1 border rounded-xl shadow-md bg-[#EBEEE8] p-5">
          <div className="flex flex-col items-center">
            <p className="font-semibold">Recall Score</p>
            <figure>
              <img src={bulb} alt="" />
            </figure>
            <p className="font-bold text-4xl">{data.recall_score * 100}%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Performance;
