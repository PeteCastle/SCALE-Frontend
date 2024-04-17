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
import { url } from "../../utils/contants";
import DetectedDropdown from "./DetectedDropdown";
const Dashboard = () => {
  const [date, setDate] = useState(new Date());
  const [data, setData] = useState({})
  const [fumigationData, setFumigationData] = useState({});
  const [areAllSystemChecked, setAreAllSystemChecked] = useState(false);
  const [selectedSystemOptions, setSelectedSystemOptions] = useState([]);
  const [checkboxSystemOptions, setCheckboxSystemOptions] = useState([]);



  // Function to format the date as required by the API
  const formatDate = (date) => {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  // Function to render content inside calendar tiles
  const tileContent = ({ date, view }) => {
    const formattedDate = formatDate(date);
    const hasData = !!fumigationData[formattedDate];

    return (
      <div className="relative">
        {hasData && (
          <div className="absolute -top-[8px] left-0 w-full h-full flex justify-center items-center text-black z-0">
            <div className="w-8 h-8 bg-blue-400/20 group-active:bg-white rounded-full flex justify-center items-center"> {date.getDate()}</div>
          </div>
        )}
      </div>
    );
  };

  // Function to handle click on calendar tile
  const tileClassName = ({ date }) => {
    const formattedDate = formatDate(date);
    const isActive = formattedDate === formatDate(new Date(date));
    return isActive ? 'active-date group text-black' : null;
  };

  // Function to handle calendar change
  const onChange = (date) => {
    setDate(date);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const formattedDate = formatDate(date) || new Date();
        const response = await fetch(`${url}/v1/dashboard/fumigations/date?system=${selectedSystemOptions}&date=${formattedDate}`);
        const data = await response.json();
        setFumigationData(data);
        const result = Object.entries(data[formattedDate]).map(([name, value]) => ({
          name: name,
          value: value
        }))
        console.log(result)
        setData(result)
      } catch (error) {
        console.error('Error fetching data:', error.message);
      }
    };
    fetchData();
  }, [selectedSystemOptions, date]);
  console.log(data)

  return (
    <section className="w-full h-auto min-h-screen py-5 gap-5">
      <div className="w-11/12 xl:w-11/12 h-2/5 xl:h-[700px] mb-5 m-auto bg-[#F9F5E6] border-2 p-3 xl:p-5 rounded-xl shadow-md flex flex-col">
        <Fumigation />
      </div>
      <div className="w-11/12 xl:w-11/12 h-2/5 xl:h-[500px] mb-5 m-auto">
        <div className="w-full h-full grid gap-5 xl:grid-cols-2">
          <div className="col-span-1 border rounded-md">

            <div className="w-11/12 m-auto h-full  py-4 content-center flex flex-col-reverse md:flex-row gap-5 items-center">
              <Calendar
                className="mx-auto w-full border-none shadow-md  h-full lg:h-4/5 font-semibold"
                onChange={onChange}
                value={date}
                tileContent={tileContent}
                tileClassName={tileClassName}
              />
              <div className="md:w-60 w-full h-full lg:h-4/5 flex flex-col  gap-5">
                <div className="max-h-20 ">
                  <DetectedDropdown
                    areAllSystemChecked={areAllSystemChecked}
                    setAreAllSystemChecked={setAreAllSystemChecked}
                    selectedSystemOptions={selectedSystemOptions}
                    setSelectedSystemOptions={setSelectedSystemOptions}
                    checkboxSystemOptions={checkboxSystemOptions}
                    setCheckboxSystemOptions={setCheckboxSystemOptions}
                  />
                </div>
                <div className="bg-[#F9F5E6] shadow-md h-full flex items-center">
                  <div className="w-11/12 m-auto h-full py-2 max-h-44 md:max-h-[300px] overflow-auto flex flex-col gap-2">
                    <span className="font-bold">Details</span>
                    {data && Array.isArray(data) && data.map((val, key) => (
                      <div key={key}>
                        <p className="text-sm"><span className="font-semibold">Name:</span> <span>{val.name}</span></p>
                        <p className="text-sm"><span className="font-semibold">Value:</span> <span>{val.value}</span></p>
                      </div>
                    )) || ''}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full col-span-1">
            <div className="w-full border rounded-md h-full max-h-[350px] xl:max-h-none flex flex-col xl:p-5">
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
