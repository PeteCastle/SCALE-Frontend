import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DetectedDropdown from "./DetectedDropdown";
import TimeDropdown from "./DetectedDropdownTime";
import { url } from "../../utils/contants";

const Detected = () => {
  const [areAllSystemChecked, setAreAllSystemChecked] = useState(false);
  const [selectedSystemOptions, setSelectedSystemOptions] = useState([]);
  const [checkboxSystemOptions, setCheckboxSystemOptions] = useState([]);
  const [selectedTimeOption, setSelectedTimeOption] = useState(null);
  const [data, setData] = useState();
  useEffect(() => {
    const fetchData = async () => {
      try {
        // Set default values if selectedTimeOption or selectedSystemOptions are null
        const systemOptions = selectedSystemOptions || "1,2,3";
        const timeOption = selectedTimeOption || "hour";

        let response = await fetch(
          `${url}/v1/dashboard/uptime?system=${systemOptions}&by=${timeOption}&limit=10`
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error);
        }
        const json = await response.json();
        const result = Object.entries(json).map(([date, value]) => ({
          date: date,
          value: value,
        }));
        console.log(result)
        setData(result);
      } catch (err) {
        console.log(err.message);
      }
    };

    fetchData();
  }, [selectedTimeOption, selectedSystemOptions]);
  const CustomTooltip = ({ active, payload, label }) => {
    const formattedTime = (label) => {
      const timeParts = label.split(":");
      const hours = parseInt(timeParts[0]);
      const formattedHours = (hours % 12 === 0) ? 12 : hours % 12;
      const amOrPm = hours >= 12 ? "PM" : "AM";
      return `${formattedHours.toString().padStart(2, '0')}:00 ${amOrPm} `;
    };

    if (active && payload && payload.length) {
      return (
        <div className="w-20 h-16 bg-white shadow-md rounded-xl flex flex-col items-center justify-center">
          <p className="font-primary">
            {formattedTime(label)}
          </p>
          <p className="font-semibold font-primary">
            {payload[0].value}%
          </p>
        </div>
      );
    }

    return null;
  };
  return (
    <div className="xl:col-span-3 border bg-[#ECF5BE] rounded-xl shadow-md p-5 flex flex-col gap-5">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <h1 className="font-bold text-lg pb-5 md:pb-0">System Uptime</h1>
        <div className="w-full max-w-[400px] flex items-center gap-5">
          <TimeDropdown
            selectedTimeOption={selectedTimeOption}
            setSelectedTimeOption={setSelectedTimeOption}
          />
          <DetectedDropdown
            areAllSystemChecked={areAllSystemChecked}
            setAreAllSystemChecked={setAreAllSystemChecked}
            selectedSystemOptions={selectedSystemOptions}
            setSelectedSystemOptions={setSelectedSystemOptions}
            checkboxSystemOptions={checkboxSystemOptions}
            setCheckboxSystemOptions={setCheckboxSystemOptions}
          />
        </div>
      </div>
      <div className="w-full  h-60 xl:h-full">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={data}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="date"
              tick={{ fontSize: 10 }}
              interval={0}
              tickFormatter={(tick) => {
                const timeParts = tick.split(":");
                const hours = parseInt(timeParts[0]);
                const formattedHours = (hours % 12 === 0) ? 12 : hours % 12;
                const amOrPm = hours >= 12 ? "PM" : "AM";
                const formattedTime = `${formattedHours.toString().padStart(2, '0')}:00 ${amOrPm} `;
                return formattedTime;
              }}
            />
            <YAxis yAxisId="left" tick={{ fontSize: 10 }} interval={0} />
            <Tooltip

              content={CustomTooltip}
            />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Detected;
