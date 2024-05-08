import React from "react";
import logo from "/logo.svg";
import liveic from "/liveic.svg";
import locationic from "/locationic.svg";
import mapic from "/mapic.svg";
import rcIcon from "/rcIcon.svg";
import be from "/be.svg";
import fe from "/fe.svg";
import ai from "/ai.svg";
import arduino from "/arduino.svg";
import info from "/info.svg";
import journal from "/journal.svg";

const Footer = () => {
  return (
    <div className="size-full bg-[#FDF884] h-auto max-h-auto py-5 lg:py-0 md:h-full lg:max-h-80 grid grid-cols-1 lg:grid-cols-9">
      <div className="col-span-4 w-4/5 m-auto">
        <div className="size-full flex lg:block justify-center mb-5 lg:mb-0">
          <figure className="size-full max-w-60 ">
            <img src={logo} className="size-full" alt="" />
          </figure>
        </div>
        <div className="flex flex-col gap-5">
          <h1 className="text-md font-semibold text-center md:text-start">
            About scale
          </h1>
          <p className="text-sm font-primary text-center md:text-start">
            SCALE, short for Smart Control Anti-mosquito Locator Eliminator, is
            a cutting-edge device integrated with a comprehensive website
            application platform designed to revolutionize mosquito control and
            monitoring. The device combines advanced technologies to provide
            efficient and intelligent mosquito detection, tracking, and
            elimination capabilities.
          </p>
          <p className="text-xs font-primary text-center md:text-start">
            Copyright 2024. All Rights Reserved.
          </p>
        </div>
      </div>
      <div className="w-full col-span-2  flex flex-col gap-2 justify-center items-center ">
        <div className="w-11/12 h-full md:h-[80%] border-y border-black py-5 lg:border-x lg:border-y-0 m-auto flex flex-col gap-5 justify-center items-center">
          <h1 className="font-primary font-semibold">Website Navigation</h1>
          <ul className="flex flex-col gap-4">
            <li>
              <a href="/dashboard" className="flex gap-2">
                <figure>
                  <img src={liveic} alt="" />
                </figure>
                <span className="font-primary text-sm">Live Dashboard</span>
              </a>
            </li>
            <li>
              <a href="/recent_captured" className="flex gap-2">
                <figure>
                  <img src={rcIcon} alt="" />
                </figure>
                <span className="font-primary text-sm">Recent Captured</span>
              </a>
            </li>
            <li>
              <a href="/active_systems" className="flex gap-2">
                <figure>
                  <img src={locationic} alt="" />
                </figure>
                <span className="font-primary text-sm">Active Systems</span>
              </a>
            </li>
            <li>
              <a href="/map" className="flex gap-2">
                <figure>
                  <img src={mapic} alt="" />
                </figure>
                <span className="font-primary text-sm">Map Coverage</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="col-span-3 size-full flex justify-center items-center ">
        <div className="md:w-fit w-11/12 lg:w-11/12 m-auto  flex flex-col gap-5">
          <h1 className="font-primary font-semibold text-center md:text-start">
            The entire project is open-source:
          </h1>
          <div className="flex justify-center lg:justify-start">
            <ul className="flex flex-wrap  gap-5 max-w-[300px]">
              <li>
                <a href="" className="flex items-center gap-2">
                  <figure className="size-full max-w-5">
                    <img src={fe} className="size-full" alt="" />
                  </figure>
                  <span className="font-primary text-sm">Frontend</span>
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-2">
                  <figure className="size-full max-w-5">
                    <img src={ai} className="size-full" alt="" />
                  </figure>
                  <span className="font-primary text-sm">
                    Artifical Intelligence
                  </span>
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-2">
                  <figure className="size-full max-w-5">
                    <img src={be} className="size-full" alt="" />
                  </figure>
                  <span className="font-primary text-sm">Backend</span>
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-2">
                  <figure className="size-full max-w-5">
                    <img src={arduino} className="size-full" alt="" />
                  </figure>
                  <span className="font-primary text-sm">Arduino</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="font-primary text-md font-semibold text-center lg:text-start">Others:</div>
          <div className="w-3/5 m-auto lg:w-auto lg:m-0">
            <ul className="">
              <li>
                <a href="" className="flex items-center gap-2">
                  <figure>
                    <img src={info} alt="" />
                  </figure>
                  <span className="italic font-primary text-sm hover:underline">See our official infographics</span>
                </a>
              </li>
              <li>
                <a href="" className="flex items-center gap-2">
                  <figure>
                    <img src={journal} alt="" />
                  </figure>
                  <span className="italic font-primary text-sm hover:underline">See the journal paper</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
