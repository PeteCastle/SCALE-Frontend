export { Page };
import { useEffect, useState } from "react";
import { url } from "../../utils/contants";
function Page() {
  const [currentLoc, setCurrectLoc] = useState("");
  const [data, setData] = useState([]);
  const [devices, setDevices] = useState([]);
  const [isDropdown, setIsDropdown] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${url}/v1/system/details`);
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

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch(`http://152.42.220.91/v1/system/list`);
        if (!response.ok) {
          throw new Error("Unable to detch Data");
        }
        const json = await response.json();
        setDevices(json);
        console.log(json);
      } catch (err) {
        console.error("Unable to fetch data, server error");
      }
    };

    fetchDevices();
  }, []);

  return (
    <>
      <section className="w-full h-full max-h-screen py-5 gap-5">
        <div className="w-11/12 m-auto h-full md:grid flex flex-col grid-cols-1 xl:grid-cols-5 gap-5">
          <div className="col-span-1 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="relative row-span-2 xl:row-span-1 col-span-1 flex flex-col group">
              <div className="max-h-10 h-full w-full rounded-t-xl bg-[#CBBF93]">
                <div className="w-11/12 m-auto h-full flex items-center justify-between ">
                  <h1 className="font-semibold">Location</h1>
                  <div className="w-full h-full max-w-3 max-h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="size-full bg-[#F8F1D5] rounded-b-xl flex">
                <div className="w-11/12 m-auto h-full flex items-center ">
                  <div className="relative w-full">
                    <button
                      onClick={() => setIsDropdown((prevState) => !prevState)}
                      className="w-full justify-between text-black hover:border-black/30 border hover:bg-[#F9F4E3] bg-[#DDD1A0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                      type="button"
                    >
                      Select Location{" "}
                      <svg
                        className="w-2.5 h-2.5 ms-3"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 10 6"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="m1 1 4 4 4-4"
                        />
                      </svg>
                    </button>
                    {/* Dropdown menu */}
                    <div
                      id="dropdown"
                      className={`${
                        isDropdown ? "flex" : "hidden"
                      } absolute z-10 w-full max-h-60 overflow-auto bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700`}
                    >
                      <ul
                        className="py-2 text-sm text-gray-700 dark:text-gray-200"
                        aria-labelledby="dropdownDefaultButton"
                      >
                        {data.map((val, key) => (
                          <li key={key}>
                            <button
                              onClick={() => setCurrectLoc(val.id)}
                              className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                            >
                              {val.location.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
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
                  {devices.map((val, key) => (
                    <li className="w-full h-full max-h-12 border overflow-hidden rounded-full hover:border-black/30 bg-[#F9F4E3] hover:bg-[#DDD1A0]">
                      <button
                        onClick={() => setCurrectLoc(val.id)}
                        className="w-full h-full font-semibold text-center"
                      >
                        {val.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="col-span-4 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="row-span-4 col-span-1 flex flex-col">
              <h1 className="font-semibold w-fit px-5 py-2 bg-[#CBBF93]">
                Device Picture
              </h1>
              <div className="w-full h-full object-contain">
                <figure className="border w-full h-full">
                  <img
                    src={data.find((item) => item.id === currentLoc)?.image}
                    alt=""
                  />
                </figure>
              </div>
            </div>
            <div className="row-span-2 flex flex-col pb-5 md:pb-0">
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
