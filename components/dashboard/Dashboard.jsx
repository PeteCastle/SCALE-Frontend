import React, { useEffect, useState } from "react";
import Summary from "./Summary";
import Operation from "./Operation";
import Detected from "./Detected";
import Fumigation from "./Fumigation";

const Dashboard = () => {
  return (
    <section className="w-full h-full min-h-screen ">
      <div className="h-full w-11/12 m-auto">
        <h1 className="font-bold text-2xl py-5">Live Summary</h1>
        <div className="h-full flex flex-col md:grid grid-cols-auto grid-rows-2 gap-5 pb-5">
          <div className="h-full col-span-1 row-span-1 grid grid-cols-1 md:grid-cols-5 gap-5">
            <Summary />
            <Operation />
          </div>
          <div className="h-full col-span-1 row-span-1 flex flex-col pb-5 md:pb-0">
            <h1 className="py-5 font-bold text-2xl">Statistics</h1>
            <div className="h-full grid grid-cols-1 md:grid-cols-2 gap-5">
              <Detected />
              <Fumigation />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
