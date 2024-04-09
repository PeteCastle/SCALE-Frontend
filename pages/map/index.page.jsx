export { Page };
import { url } from "../../utils/contants";
import { useEffect, useState } from "react";

function Page() {
  const [currentLoc, setCurrectLoc] = useState("");
  const [data, setData] = useState([]);
  const [areas, setAreas] = useState([]);

  const fetchSpecificArea = async (area_id) => {
    try {
      const response = await fetch(`${url}/v1/coverage/${area_id}`);

      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }

      const json = await response.json();
      setData(json);
      setCurrectLoc(json.id);
      console.log(json);
    } catch (err) {
      console.error("Unable to fetch data, server error");
    }
  };

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
    const fetchArea = async () => {
      try {
        const response = await fetch(`${url}/v1/system/list`);
        if (!response.ok) {
          throw new Error("Unable to detch Data");
        }
        const json = await response.json();
        setAreas(json);
      } catch (err) {
        console.error("Unable to fetch data, server error");
      }
    };

    fetchArea();
  }, []);

  return (
    <>
      <section className="w-full h-full max-h-screen py-5 gap-5">
        <div className="w-11/12 m-auto h-full md:grid flex flex-col grid-cols-1 xl:grid-cols-5 gap-5">
          <div className="col-span-1 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="row-span-6 overflow-hidden border rounded-2xl">
              <div className="max-h-10 h-full w-full bg-[#CBBF93]">
                <div className="w-11/12 m-auto h-full flex items-center justify-between ">
                  <h1 className="font-semibold">Coverage Area</h1>
                  <div className="w-full h-full max-w-3 max-h-3 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="w-full h-full bg-[#F8F1D5]">
                <ul className="w-11/12 h-full max-h-[175px]  xl:max-h-[675px] 2xl:max-h-[800px] overflow-auto m-auto">
                  {areas.map((val, key) => (
                    <li
                      key={key}
                      className="w-full h-full mt-5 max-h-12 border overflow-hidden rounded-full hover:border-black/30 bg-[#F9F4E3] hover:bg-[#DDD1A0]"
                    >
                      <button
                        onClick={() => fetchSpecificArea(val.id)}
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
                Barangay Coverage
              </h1>
              <div className="w-full h-full object-contain">
                <figure className="border w-full h-full">
                  {/* <img
                    src={data?.image}
                    alt=""
                  /> */}
                </figure>
              </div>
            </div>
            <div className="row-span-2 flex flex-col pb-5 md:pb-0">
              <h1 className="font-semibold w-fit px-5 py-2 bg-[#CBBF93]">
                Area Description
              </h1>
              <div className="border w-full h-full p-5">
                {data?.description}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
