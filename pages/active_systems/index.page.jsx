export { Page };
import arrow from "/arrow.svg";
import "./index.css";
import { useState } from "react";
function Page() {
  const [currentLoc, setCurrectLoc] = useState("");
  const [data, setData] = useState([]);

  useState(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `https://73135175-7b33-49a2-8e79-26b778b69ae8.mock.pstmn.io/v1/system/details`
        );
        if (!response.ok) {
          throw new Error("Unable to detch Data");
        }
        const json = await response.json();
        setData(json);
        console.log(json);
      } catch (err) {
        console.error("Unable to fetch data, server error");
      }
    };

    fetchData();
  }, []);

  const handleLocation = (id) => {
    console.log(id);
    setCurrectLoc(id);
  };

  return (
    <>
      <section className="w-full h-full max-h-screen py-5 border gap-5">
        <div className=" w-11/12 m-auto h-full grid grid-cols-5 gap-5">
          <div className="col-span-1 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="relative row-span-1  flex flex-col group">
              {/* Dropdown */}
              <div className="hidden group-hover:flex absolute z-50 -bottom-28 left-3 overflow-hidden hover:overflow-y-auto w-11/12 m-auto h-full  bg-white shadow-md rounded-xl">
                <ul className="w-full h-full m-auto">
                  {data.map((val, key) => (
                    <li
                      key={key}
                      className="w-full h-full max-h-10 font-semibold p-2 hover:bg-[#F8F1D5]"
                    >
                      <button
                        onClick={() => handleLocation(val.id)}
                        className="w-full h-full text-start "
                      >
                        {val.location.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="max-h-10 h-full w-full rounded-t-xl bg-[#CBBF93]">
                <div className="w-11/12 m-auto h-full flex items-center justify-between ">
                  <h1 className="font-semibold">Location</h1>
                  <div className="w-full h-full max-w-3 max-h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="size-full bg-[#F8F1D5] rounded-b-xl flex">
                <div className="w-11/12 m-auto h-full flex items-center gap-2">
                  <div className="relative w-full h-full max-h-72 flex items-center">
                    <div className="w-full h-full flex items-center border border-black/50 max-h-10 m-auto">
                      <button className="bg-[#F9F4E3] w-full h-full  text-left pl-5">
                        Select Location:
                      </button>
                    </div>
                  </div>
                  <button className="w-full h-full rounded-full bg-[#DDD1A0] max-h-10 max-w-10">
                    <figure className="w-full h-full max-h-7">
                      <img
                        src={arrow}
                        className="rotate-90 w-full h-full object-contain"
                        alt=""
                      />
                    </figure>
                  </button>
                </div>
              </div>
            </div>

            <div className="row-span-5 overflow-hidden border rounded-2xl">
              <div className="max-h-10 h-full w-full bg-[#CBBF93]">
                <div className="w-11/12 m-auto h-full flex items-center justify-between ">
                  <h1 className="font-semibold">Devices</h1>
                  <div className="w-full h-full max-w-3 max-h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-full bg-[#F8F1D5]">
                <ul className="w-11/12 h-full m-auto pt-5 flex flex-col gap-5">
                  <li className="w-full h-full max-h-12 border overflow-hidden rounded-full bg-[#F9F5E6]">
                    <button className="w-full h-full font-semibold text-center">
                      Miraiza Elisa Street
                    </button>
                  </li>
                  <li className="w-full h-full max-h-12 border overflow-hidden rounded-full bg-[#F9F5E6]">
                    <button className="w-full h-full font-semibold text-center">
                      Miraiza Elisa Street
                    </button>
                  </li>
                  <li className="w-full h-full max-h-12 border overflow-hidden rounded-full bg-[#F9F5E6]">
                    <button className="w-full h-full font-semibold text-center">
                      Miraiza Elisa Street
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="row-span-4 col-span-1 flex flex-col">
              <h1 className="font-semibold w-fit px-5 py-2 bg-[#CBBF93]">
                Device Picture
              </h1>
              <div className="w-full h-auto object-contain">
                <figure className="border w-full h-full">
                  <img
                    src={data.find((item) => item.id === currentLoc)?.picture}
                    className="w-full h-auto object-contain"
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div className="row-span-2 flex flex-col">
              <h1 className="font-semibold w-fit px-5 py-2 bg-[#CBBF93]">
                Device Description
              </h1>
              <div className="border w-full h-full p-5">
                {data.find((item) => item.id === currentLoc)?.description}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
