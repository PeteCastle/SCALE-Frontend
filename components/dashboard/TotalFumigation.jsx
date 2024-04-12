import React, { useEffect, useState } from "react";
import fumigation from "/mosquito-fumigation.svg"; 
import arrowred from "/arrow-red.svg"; 
import { url } from "../../utils/contants";

const TotalFumigation = () => {
  const [totalFumigation, setTotalFumigation] = useState("");

  useEffect(() => {
    const countFumigation = async () => {
      try {
        const response = await fetch(
          `${url}/v1/dashboard/fumigations/count?date=2024-03`
        );
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error);
        }
        const json = await response.json();
        setTotalFumigation(json.count);
      } catch (err) {
        console.log(err.message);
      }
    };

    countFumigation();
  }, [setTotalFumigation]);

  return (
    <>
      <div className="relative col-span-1 row-span-1 border bg-[#EBEEE8] rounded-md shadow-md p-5 flex flex-col gap-3">
        <p className="font-semibold">Mosquito Fumigation Count</p>
        <figure>
          <img src={fumigation} alt="" />
        </figure>
        <p className="text-4xl font-bold">{Number(totalFumigation).toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
        <div
          className={`absolute bottom-10 right-10 flex gap-1 items-center text-4xl text-red-800 font-semibold`}
        >
          <img src={arrowred} alt="" />
          <p>{`180%`}</p>
        </div>
      </div>
    </>
  );
};

export default TotalFumigation;
