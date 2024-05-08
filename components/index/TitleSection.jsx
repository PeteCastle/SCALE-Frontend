import React from "react";
// import { BiSolidDashboard } from "react-icons/bi";
import dashboard from "/dashboard.svg";
import target from "/target.svg";
import location from "/location.svg";
import map from "/map.svg";
import arrow from '/arrow.svg'
import YoutubeEmbed from "./YoutubeEmbed";
const TitleSection = () => {
  return (
    <>
      <section className="py-10 xl:py-0 w-full h-100 md:h-auto xl:h-screen lg:h-auto flex flex-col md:grid grid-rows-2 gap-5">
        <div className="row-span-1">
          <div className="text-center px-4 lg:px-12">
            <h1 className="mt-10 text-2xl lg:text-3xl max-w-screen-xl m-auto font-bold text-gray-800 mb-4 text-wrap">
              Integrated Mosquito Detection and Fumigation System Utilizing Faster
              Region-Based Convolutional Neural Networks
            </h1>
            <p className="text-md md:text-xl text-gray-600 mb-8">
              Smart Control Anti-Mosquito Locator and Eliminator
            </p>
          </div>
          <div className="lg:px-[100px] px-8 w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 ">
            <div className="bg-[#D9E3A7] rounded-xl shadow-md lg:p-8 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 lg:mb-0 mb-8">
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
            </div>
            <div className="bg-[#F8FEDD] rounded-xl shadow-md lg:p-8 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 lg:mb-0 mb-8">
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
            </div>
            <div className="bg-[#ECF4C6] rounded-xl shadow-md lg:p-8 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 lg:mb-0 mb-8">
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
            </div>
            <div className="bg-[#E2E7CD] rounded-xl shadow-md lg:p-8 p-4 transition-transform duration-500 ease-in-out transform hover:scale-105 lg:mb-0 mb-8">
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
            </div>
          </div>
        </div>
        <div className="row-span-1 w-full md:w-4/5 m-auto h-fit md:h-full flex flex-col grid xl:grid-cols-2 gap-5">
          <div className="col-span-1 flex items-center justify-center m-auto h-[250px] md:h-4/5 w-4/5">
            <YoutubeEmbed />
          </div>
          <div className="col-span-1 flex items-center justify-center">
            <div className="w-4/5 m-auto md:max-w-lg flex flex-col gap-5">
              <h1 className="font-primary font-bold text-2xl text-center lg:text-start">See our System in Action!</h1>
              <p className="font-primary text-center lg:text-start">Discover how SCALE transforms mosquito control with advanced detection, tracking, and elimination features. Explore our intuitive website application platform for monitoring, settings configuration, and insightful analytics. </p>
              <button className="p-2 hover:bg-[#E0BD68]/50 ease-in-out duration-300 bg-[#E0BD68] w-fit px-10 rounded-full m-auto lg:m-0">
                <figure className="size-full max-w-10">
                  <img src={arrow} className="size-full" alt="" />
                </figure>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TitleSection;
