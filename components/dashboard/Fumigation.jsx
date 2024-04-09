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

const Fumigation = () => {
  const [providedData, setProvidedData] = useState();
  const [allDevices, setAllDevices] = useState([]);
  const [selectedDevice, setSelectedDevice] = useState("__all__");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://73135175-7b33-49a2-8e79-26b778b69ae8.mock.pstmn.io/v1/dashboard/detections/history?system=1,2,3&limit=25`
        );

        if (!response.ok) {
          throw new Error("Unable to fetch data");
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
        setSelectedDevice(devices[0]);
        setLoading(false);
      } catch (err) {
        console.error("Unable to fetch data, server error");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const handleDeviceChange = (event) => {
    setSelectedDevice(event.target.value);
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  const filteredData = Object.entries(providedData)
    // .slice(-20) Modify when wanted to shwo only numbers of chart
    .map(([timestamp, devices]) => {
      const dataObj = { name: timestamp };
      allDevices.forEach((device) => {
        if (selectedDevice === "__all__" || device === selectedDevice) {
          dataObj[device] = devices[device] || 0; 
        } else {
          dataObj[device] = undefined;
        }
      });
      return dataObj;
    });

  return (
    <>
      <div className="flex justify-between">
        <h1 className="font-bold pb-3 text-xl xl:text-3xl">Live Dashboard</h1>
        <div className="">
          {/* <label htmlFor="devices" className="text-sm">Select a data: </label> */}
          <select
            id="devices"
            onChange={handleDeviceChange}
            value={selectedDevice}
            className="w-full h-full max-h-12 xl:max-h-10 border-none rounded-xl shadow-md xl:max-w-52 max-w-32 font-semibold text-xs xl:text-base"
          >
            {allDevices.map((device) => (
              <option key={device} value={device}>
                {device}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="w-full xl:h-full h-60 ">
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={500}
            height={300}
            data={filteredData}
            margin={{
              top: 5,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name"  tick={{ fontSize: 10 }} interval={"preserveStartEnd"}/>
            <YAxis yAxisId="left" tick={{ fontSize: 10 }} interval={0} />
            <Tooltip />
            <Legend />
            <Line
              yAxisId="left"
              type="monotone"
              dataKey={selectedDevice}
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </>
  );
};

export default Fumigation;
