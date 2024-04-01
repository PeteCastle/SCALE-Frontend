import React from "react";
import dashboard from "/dashboard.svg";
import target from "/target.svg";
import location from "/location.svg";
import map from "/map.svg";
const SecondSection = () => {
  return (
    <>
      <section className="py-10 w-full h-100 lg:h-screen flex flex-col justify-center items-center gap-12 bg-[#F9F5E6]">
        <div className="flex lg:flex-row md:flex-col-reverse flex-col-reverse w-full px-12 gap-8">
          <div className="w-full h-auto  flex ">
            <div className="grid lg:grid-cols-2 md:grid-cols-2 grid-cols-1 p-4  mx-auto gap-12">
              <div className="flex-col flex justify-start mt-[12rem] ">
                <div className="max-w-sm p-6 justify-start text-center items-stretch gap-10 mb-4">
                  <img src="/logo/logo1.png" className=" flex mx-auto" />
                  <h1 className="text-xl font-bold my-4">
                    Technology Integration
                  </h1>
                  <p className="mb-3 font-normal text-gray-500 leading-loose">
                    Using IoT, image recognition, and web development, the
                    system accurately identifies mosquito populations and
                    breeding sites.
                  </p>
                </div>

                <div className="max-w-sm p-6 justify-center text-center items-stretch gap-10 ">
                  <img src="/logo/logo2.png" className=" flex mx-auto" />
                  <h1 className="text-xl font-bold my-4">Impactful Solution</h1>
                  <p className="mb-3 font-normal text-gray-500 leading-loose">
                    Combines technology and control strategies to combat
                    mosquito-borne diseases and safeguard public health.
                  </p>
                </div>
              </div>

              <div className="flex-col flex justify-end lg:-mt-[6rem] mt-0">
                <div className="max-w-sm p-6 justify-center text-center items-stretch gap-10 mb-4 ">
                  <img src="/logo/logo3.png" className=" flex mx-auto" />
                  <h1 className="text-xl font-bold my-4">
                    Innovative Approach
                  </h1>
                  <p className="mb-3 font-normal text-gray-500 leading-loose">
                    Introduces a new method to fight mosquito-borne diseases, a
                    major global health concern.
                  </p>
                </div>
                <div className="max-w-sm p-6 justify-center text-center items-stretch gap-10 e">
                  <img src="/logo/logo4.png" className=" flex mx-auto" />
                  <h1 className="text-xl font-bold my-4">Integrated System</h1>
                  <p className="mb-3 font-normal text-gray-500 leading-loose">
                    It features an advanced mosquito detection and fumigation
                    system using Faster R-CNNs, surpassing traditional control
                    methods.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-auto  content-center">
            <div className="flex mx-auto  items-center">
            <img src="/logo/model.png" className="flex mx-auto "/>

            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SecondSection;
