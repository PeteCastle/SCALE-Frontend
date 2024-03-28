import React from "react";
// import { BiSolidDashboard } from "react-icons/bi";
import dashboard from "/dashboard.svg";
import target from "/target.svg";
import location from "/location.svg";
import map from "/map.svg";
const TitleSection = () => {
  return (
    <>
      <section className="py-10 xxl:py-0 w-full h-100 lg:h-screen flex flex-col justify-center items-center gap-12">
        <div className="text-center px-4 lg:px-12">
          <h1 className="text-2xl lg:text-5xl font-bold text-gray-800 mb-4 text-wrap">
            Integrated Mosquito Detection and Fumigation System Utilizing Faster
            Region-Based Convolutional Neural Networks
          </h1>
          <p className="text-md md:text-2xl text-gray-600 mb-8">
            Smart Control Anti-mosquito Locator and Eliminator
          </p>
        </div>
        <div className="lg:px-[100px] px-8 w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 ">
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur, libero.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur, libero.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur, libero.
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
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Consectetur, libero.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TitleSection;
