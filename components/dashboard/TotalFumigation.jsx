import React, { useEffect, useState } from "react";
import fumigation from "/mosquito-fumigation.svg"; 
import arrowred from "/arrow-red.svg"; 
import arrowgreen from "/arrow-green.svg";
import { url } from "../../utils/contants";

const TotalFumigation = () => {
  const [totalFumigation, setTotalFumigation] = useState("");
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    const countFumigation = async () => {
      const newDate = formatDate(date)
      try {
        const response = await fetch(
          `${url}/v1/dashboard/fumigations/count?date=${newDate}`
        );
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error);
        }
        const json = await response.json();
        setTotalFumigation(json);
      } catch (err) {
        console.log(err.message);
      }
    };

    countFumigation();
  }, [setTotalFumigation]);

  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return `${year}-${month}`;
  };

  return (
    <>
      <div className="relative col-span-1 row-span-1 border bg-[#EBEEE8] rounded-md shadow-md p-5 flex flex-col gap-3">
        <p className="font-semibold">Mosquito Fumigation Count</p>
        <figure>
          <img src={fumigation} alt="" />
        </figure>
        <p className="text-4xl font-bold">{Number(totalFumigation.count).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <div
          className={`absolute bottom-10 right-10 flex gap-1 items-center text-4xl ${totalFumigation.count > totalFumigation.prev_month_count ?"text-green-800" : "text-red-800" } font-semibold`}
        >
          <img src={totalFumigation.count > totalFumigation.prev_month_count ? arrowgreen : arrowred}  className="rotate-180" alt="" />
          <p>{Math.abs(totalFumigation.change).toFixed(2)}%</p>
        </div>
      </div>
    </>
  );
};

export default TotalFumigation;
