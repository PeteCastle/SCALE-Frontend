import React, { useEffect, useState } from "react";
import arrowgreen from "/arrow-green.svg";
import iconsearch from "/search-fumigation.svg";
import fumigation from "/mosquito-fumigation.svg";
import arrowred from "/arrow-red.svg";

const TotalFumigation = () => {
  const [totalFumigation, setTotalFumigation] = useState("");
  useEffect(() => {
    const countFumigation = async () => {
      try {
        const response = await fetch(
          `https://73135175-7b33-49a2-8e79-26b778b69ae8.mock.pstmn.io/v1/dashboard/fumigation/count?date=2024-03`
        );
        if (!response.ok) {
          throw new Error("Detected mosquito not found.");
        }
        const json = await response.json();
        console.log(json.count);
        setTotalFumigation(json.count);
      } catch (err) {
        console.log(err.message);
        throw new Error("Server Error");
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
        <p
          className={`absolute bottom-10 right-10 flex gap-1 items-center text-4xl text-red-800 font-semibold`}
        >
          <img src={arrowred} alt="" />
          <p>{`180%`}</p>
        </p>
      </div>
    </>
  );
};

export default TotalFumigation;
