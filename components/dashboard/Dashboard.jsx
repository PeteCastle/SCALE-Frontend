import React, { useEffect, useState } from "react";
import Summary from "./Summary";
import Operation from "./Operation";
import Detected from "./Detected";
import Fumigation from "./Fumigation";
import TotalMosquito from "./TotalMosquito";
import TotalFumigation from "./TotalFumigation";
import WaterLevel from "./WaterLevel";
import Performance from "./Performance";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  const fetchData = async (date) => {
    try {
      const formattedDate = formatDate(date);
      const response = await fetch(`https://73135175-7b33-49a2-8e79-26b778b69ae8.mock.pstmn.io/v1/dashboard/fumigations?system=1,2,3&date=${formattedDate}`);
      const data = await response.json();
      // Handle the fetched data here, e.g., update state or perform other actions
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to format the date as required by the API
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}`;
  };

  // Function to handle calendar change
  const onChange = (date) => {
    setDate(date);
    fetchData(date); // Call fetchData function when the date changes
  };

  useEffect(() => {
    // Fetch initial data when the component mounts
    fetchData(date);
  }, []); // Empty dependency array ensures useEffect runs only once on mount

  return (
    <section className="w-full h-auto min-h-screen py-5 gap-5">
      <div className="w-11/12 xl:w-11/12 h-2/5 xl:h-[700px] mb-5 m-auto bg-[#F9F5E6] border-2 p-3 xl:p-5 rounded-xl shadow-md flex flex-col">
        <Fumigation />
      </div>
      <div className="w-11/12 xl:w-11/12 h-2/5 xl:h-[500px] mb-5 m-auto">
        <div className="w-full h-full grid gap-5 xl:grid-cols-2">
          <div className="col-span-1">
            <div className="w-full h-full border py-4 content-center">
              <Calendar
                className="mx-auto w-full border-none shadow-md lg:w-4/5 h-full lg:h-4/5 font-semibold"
                onChange={onChange}
                value={date}
              />
            </div>
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
              <Operation />
            </div>
          </div>
        </div>
      </div>

      <div className="w-11/12 xl:w-11/12 h-2/5 xl:h-[500px] mb-5 m-auto">
        <div className="w-full  h-full flex flex-col xl:grid xl:grid-cols-4 gap-5 xl:grid-rows-2">
          <div className="col-span-1 xl:row-span-2 grid grid-cols-1 grid-rows-2 gap-5 ">
            <TotalFumigation />
            <TotalMosquito />
          </div>
          <WaterLevel />
        </div>
      </div>

      <div className="w-11/12 xl:w-11/12 h-2/5 xl:h-[500px] m-auto">
        <div className="w-full h-full grid xl:grid-cols-5 gap-5">
          <Detected />
          <Performance />
        </div>
      </div>
    </section>
  );
};

export default Dashboard;
