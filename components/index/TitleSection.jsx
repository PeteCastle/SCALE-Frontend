import React from "react";
// import { BiSolidDashboard } from "react-icons/bi";
import dashboard from "/dashboard.svg";
import target from "/target.svg";
import location from "/location.svg";
import map from "/map.svg";

const TitleSection = () => {
  return (
    <>
      <section className="py-10 xl:py-0 w-full h-100 md:h-auto xl:h-screen lg:h-auto flex flex-col items-center justify-center  gap-5">
        <div className="">
          <div className="text-center px-4 lg:px-12">
            <h1 className="mt-10 text-2xl lg:text-4xl max-w-screen-xl m-auto font-bold text-gray-800 mb-4 text-wrap">
              Integrated Mosquito Detection and Fumigation System Utilizing Faster
              Region-Based Convolutional Neural Networks
            </h1>
            <p className="text-md md:text-xl text-gray-600 mb-8">
              Smart Control Anti-Mosquito Locator and Eliminator
            </p>
          </div>
          <div className="lg:px-[100px] px-8 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 ">
            <a href="/dashboard" className="bg-[#D9E3A7] rounded-xl shadow-md lg:p-8 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 lg:mb-0 mb-8">
              <div className="flex items-center xxl:-mt-[80px] md:-mt-[70px] -mt-[60px] mb-42">
                <img
                  src={dashboard}
                  alt="Live Dashboard"
                  className="w-24 h-24 md:w-28 md:h-28"
                />
              </div>
              <div className="">
                <p className="text-xl md:text-2xl  xxl:text-4xl font-bold mb-2">
                  Live Dashboard
                </p>
                <p className="text-md md:text-xl">
                  Dynamic and interactive interface that provides real-time insights of mosquito detection, fumigation liquid levels, and system uptime.
                </p>
              </div>
            </a>
            <a href="/recent_captured" className="bg-[#F8FEDD] rounded-xl shadow-md lg:p-8 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 lg:mb-0 mb-8">
              <div className="flex items-center xxl:-mt-[80px] md:-mt-[70px] -mt-[60px] mb-2">
                <img
                  src={target}
                  alt="Recent Captured"
                  className="w-24 h-24 md:w-28 md:h-28"
                />
              </div>
              <div className="">
                <p className="text-xl md:text-2xl  xxl:text-4xl font-bold mb-2">
                  Recent Captured
                </p>
                <p className="text-md md:text-xl">
                  Gallery of images captured by a chosen device, providing details (date, time, and location) with the number of mosquito detections recorded in each device.

                </p>
              </div>
            </a>
            <a href="/active_systems" className="bg-[#ECF4C6] rounded-xl shadow-md lg:p-8 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 lg:mb-0 mb-8">
              <div className="flex items-center xxl:-mt-[80px] md:-mt-[70px] -mt-[60px] mb-2">
                <img
                  src={location}
                  alt="Active Mosquito Detection and Fumigation System"
                  className="w-24 h-24 md:w-28 md:h-28"
                />
              </div>
              <div className="">
                <p className="text-xl md:text-2xl  xxl:text-4xl font-bold mb-2">
                  Active System
                </p>
                <p className="text-md md:text-xl">
                  Visual representation of deployed devices at specific locations, accompanied by their status. Assists users in checking the status of devices in a certain location.
                </p>
              </div>
            </a>
            <a href="/map" className="bg-[#E2E7CD] rounded-xl shadow-md lg:p-8 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 lg:mb-0 mb-8">
              <div className="flex items-center xxl:-mt-[80px] md:-mt-[70px] -mt-[60px] mb-2">
                <img
                  src={map}
                  alt="Map Coverage of the Deployed Devices"
                  className="w-24 h-24 md:w-28 md:h-28"
                />
              </div>
              <div className="">
                <p className="text-xl md:text-2xl  xxl:text-4xl font-bold mb-2">
                  Map Coverage
                </p>
                <p className="text-md md:text-xl">
                  Detailed view of the barangay area, including its streets and key locations, allowing users to visualize the extent of coverage.
                </p>
              </div>
            </a>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default TitleSection;
