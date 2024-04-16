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
import { url } from "../../utils/contants";
import DetectedDropdown from "./DetectedDropdown";

const Fumigation = () => {
  const [providedData, setProvidedData] = useState();
  const [allDevices, setAllDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState("__all__");
  const [loading, setLoading] = useState(true);
  const [areAllSystemChecked, setAreAllSystemChecked] = useState(false);
  const [selectedSystemOptions, setSelectedSystemOptions] = useState([]);
  const [checkboxSystemOptions, setCheckboxSystemOptions] = useState([]);
  const [allData, setAllData] = useState(0); // Total sum of "__all__" values

  useEffect(() => {
    const fetchData = async () => {
      try {
        const selected = selectedSystemOptions || "1,2,3";
        const response = await fetch(
          `https://393e0ce7-669e-4853-ae1c-5079651247aa.mock.pstmn.io/v1/dashboard/detections/history?system=${selected}&limit=25`
        );

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error);
        }
        const json = await response.json();
        // Extracting all unique device names
        const devices = Array.from(
          new Set(
            Object.keys(json).flatMap((timestamp) =>
              Object.keys(json[timestamp])
            )
          )
        );

        setProvidedData(json);
        setAllDevices(devices);
        setLoading(false);
      } catch (err) {
        console.error(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, [selectedSystemOptions]);

  useEffect(() => {
    // Calculate total sum of "__all__" values
    if (providedData) {
      const allDataSum = Object.values(providedData)
        .map((timestamp) => timestamp["__all__"])
        .reduce((acc, value) => acc + value, 0);
      setAllData(allDataSum);
    }
  }, [providedData]);

  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="flex items-center justify-center space-x-4">
          <div className="w-12 h-12 border-4 border-t-4 border-gray-200 rounded-full animate-spin"></div>
          <div>
            <p className="text-gray-800 text-xl font-semibold">Loading Chart...</p>
            <p className="text-gray-600">Please wait a moment</p>
          </div>
        </div>
      </div>
    );
  }

  const defaultData = [{ name: "No Data" }];
  // Function to calculate "__all__" data
  const calculateAllData = (data) => {
    return data.map((dataObj) => ({
      ...dataObj,
      __all__: Object.values(dataObj)
        .filter((value) => typeof value === "number")
        .reduce((sum, value) => sum + value, 0),
    }));
  };

  // Apply the calculation
  let filteredData = providedData
    ? Object.entries(providedData).map(([timestamp, devices]) => {
        const dataObj = { name: timestamp };
        allDevices.forEach((device) => {
          dataObj[device] =
            selectedDevice === "__all__" ? devices[device] || 0 : undefined;
        });
        return dataObj;
      })
    : defaultData;

  filteredData = calculateAllData(filteredData);

  if (selectedDevice !== "__all__") {
    // If a specific device is selected, always show "__all__" data in addition to the selected device
    filteredData = filteredData.map((data) => ({
      ...data,
      [selectedDevice]: providedData[data.name]?.[selectedDevice] || 0,
      "__all__": providedData[data.name]?.["__all__"] || 0,
    }));
  }

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold pb-3 text-xl xl:text-3xl">Live Dashboard</h1>
        <div className="flex items-center gap-5 max-w-[400px]">
          <div className="w-full">
            <select
              id="devices"
              onChange={handleDeviceChange}
              value={selectedDevice}
              className="w-full justify-between text-black hover:border-black/30 border-black/0 hover:bg-[#F9F4E3] bg-[#DDD1A0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-left inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              {/* Include "__all__" option in the dropdown regardless of the selected device */}
              <option value="__all__">All</option>
              {allDevices?.map((device) => (
                <option key={device} value={device}>
                  {device}
                </option>
              ))}
            </select>
          </div>
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
      <div className="w-full xl:h-full h-60 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={filteredData} margin={{ top: 5, bottom: 5 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis
              dataKey="name"
              tick={{ fontSize: 10 }}
              interval={"preserveStartEnd"}
            />
            <YAxis yAxisId="left" tick={{ fontSize: 10 }} interval={0} />
            <Tooltip />
            <Legend iconType="none" />

            {/* Render lines based on selection */}
            {selectedDevice === "__all__" ? (
              // Render lines for "__all__" data only
              <Line
                key="__all__"
                yAxisId="left"
                type="monotone"
                dataKey="__all__"
                stroke="#82ca9d" // Adjust color as needed
                activeDot={{ r: 8 }}
              />
            ) : (
              <>
                {/* Render line for "__all__" data */}
                <Line
                  key="__all__"
                  yAxisId="left"
                  type="monotone"
                  dataKey="__all__"
                  stroke="#82ca9d" // Adjust color as needed
                  activeDot={{ r: 8 }}
                />
                {/* Render line for selected device */}
                <Line
                  key={selectedDevice}
                  yAxisId="left"
                  type="monotone"
                  dataKey={selectedDevice}
                  stroke="#8884d8"
                  activeDot={{ r: 8 }}
                />
              </>
            )}
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Fumigation;
