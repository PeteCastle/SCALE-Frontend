import React, { useEffect, useState } from "react";
import arrowgreen from "/arrow-green.svg";
import arrowred from "/arrow-red.svg";
import iconsearch from "/search-fumigation.svg";
import { url } from "../../utils/contants";
const TotalMosquito = () => {
  const [totalMosquito, setTotalMosquito] = useState("");

  useEffect(() => {
    const countMosquito = async () => {
      try {
        const response = await fetch(
          `${url}/v1/dashboard/detections/count?date=2024-03`
        );
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error);
        }
        const json = await response.json();
        setTotalMosquito(json);
      } catch (err) {
        console.log(err.message);
        throw new Error("Server Error");
      }
    };

    countMosquito();
  }, [setTotalMosquito]);

  return (
    <>
      <div className="relative col-span-1 row-span-1 border bg-[#EBEEE8] rounded-md shadow-md p-5 flex flex-col gap-3">
        <p className="font-semibold">Mosquito Detection Count</p>
        <figure>
          <img src={iconsearch} alt="" />
        </figure>
        <p className="text-4xl font-bold">
          {Number(totalMosquito.count)
            .toFixed(0)
            .replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
        </p>
        <div
          className={`absolute bottom-10 right-10 flex gap-1 items-center text-4xl  ${
            totalMosquito.count === totalMosquito.prev_month_count
              ? " "
              : totalMosquito.count > totalMosquito.prev_month_count
              ? "text-red-800"
              : "text-green-800"
          }font-semibold`}
        >
          <img
            src={
              totalMosquito.count === totalMosquito.prev_month_count
                ? " "
                : totalMosquito.count > totalMosquito.prev_month_count
                ? arrowgreen
                : arrowred
            }
            className="rotate-180"
            alt=""
          />
          <p>{totalMosquito.change}</p>
        </div>
      </div>
    </>
  );
};

export default TotalMosquito;
