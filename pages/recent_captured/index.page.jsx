export { Page };
import { useState, useEffect } from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { url } from "../../utils/contants";

function Page() {
  const [currentLoc, setCurrectLoc] = useState("");
  const [data, setData] = useState([]);
  const [capture, setCapture] = useState([]);
  const [devices, setDevices] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  useEffect(() => {
    const fetchSystem = async () => {
      try {
        const response = await fetch(`${url}/v1/system/details`);

        if (!response.ok) {
          throw new Error("Unable to fetch data");
        }
        const json = await response.json();
        setDevices(json);
        console.log(json);
      } catch (err) {
        console.error("Unable to fetch data, server error");
      }
    };

    fetchSystem();
  }, []);

  const fetchOne = async (id) => {
    try {
      const response = await fetch(
        `${url}/v1/system/${id}/captures/history?page_size=2&page=2`
      );

      if (!response.ok) {
        throw new Error("Unable to fetch data");
      }

      const response1 = await fetch(`${url}/v1/system/${id}/captures/recent`);

      if (!response1.ok) {
        throw new Error("Unable to fetch data");
      }

      const json = await response.json();
      setCapture(json.results);

      const json1 = await response1.json();
      setData(json1);
    } catch (err) {
      console.error("Unable to fetch data, server error");
    }
  };

  const scrollByAmount = 200; // Adjust scroll amount as needed

  const scrollPrevHandler = () => {
    const scrollContent = document.querySelector(".scroll-content");
    scrollContent.scrollBy({
      left: -scrollByAmount,
      behavior: "smooth",
    });
  };

  const scrollNextHandler = () => {
    const scrollContent = document.querySelector(".scroll-content");
    scrollContent.scrollBy({
      left: scrollByAmount,
      behavior: "smooth",
    });
  };

  const selectedImageTime = capture.find((item) => item.image === selectedImageUrl)?.time;
const dateToPrint = selectedImageTime ? new Date(selectedImageTime).toDateString() : new Date().toDateString();
const timeToPrint = selectedImageTime ? new Date(capture.find((item) => item.image === selectedImageUrl)?.time).toLocaleTimeString() : new Date().toLocaleTimeString();
  return (
    <>
      <section className="w-full h-full max-h-screen py-5 my-4  gap-5">
        <div className=" w-11/12 m-auto h-full grid grid-cols-5 gap-5">
          <div className="col-span-1 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="row-span-4 overflow-hidden border rounded-2xl">
              <div className="max-h-10 h-full w-full bg-[#CBBF93]">
                <div className="w-11/12 m-auto h-full flex items-center justify-between ">
                  <h1 className="font-semibold">Devices</h1>
                </div>
              </div>
              <div className="w-full h-full bg-[#F8F1D5] rounded ">
                <ul className="w-11/12 h-full max-h-[425px]  overflow-auto m-auto">
                  {devices.map((val, key) => (
                    <li key={key} className="w-full h-full max-h-12 my-3 border overflow-hidden rounded-full bg-[#F9F5E6]">
                      <button
                        onClick={() => fetchOne(val.id)}
                        className="w-full h-full font-semibold text-center"
                      >
                        {val.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="row-span-2 overflow-hidden border rounded-2xl p-4">
              <div className="w-full h-full">
                <h1 className=" flex font-semibold justify-start mb-12">
                  No. of Detection count
                </h1>
                <p className="text-5xl font-bold">{data?.count || "0"}.00</p>
              </div>
            </div>
          </div>

          <div className="col-span-4 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="row-span-6 col-span-1 flex flex-col ">
              <h1 className="font-semibold w-fit text-2xl px-5 py-2 bg-[#CBBF93] rounded-t">
                Device Picture
              </h1>
              <div className="w-full h-[600px] mb-2 object-contain">
                <figure className=" w-full h-full">
                  <img
                    src={capture.find((item) => item.image === selectedImageUrl)?.image}
                    className="w-full h-[600px] object-cover fade-in"
                    alt={data?.name}
                  />
                </figure>

                {/* <p>{selectedImage || data[0]?.name}ssss</p> */}
              </div>
              <div className="w-full h-[50px] flex justify-center items-center bg-[#CBBF93] rounded p-5">
                {selectedImageUrl ? `${dateToPrint} | ${timeToPrint} | Location` : ""}
              </div>
            </div>
          </div>

          <div className="col-span-5">
            <div className="scroll-container flex items-center justify-center">
              <div className="scroll-content h-auto mb-4 gap-2 w-full overflow-x-auto overflow-y-hidden px-8 scrollbarWidth scrollbarTrack scrollbarThumb scrollbarHover">
                {/* Your images here */}
                {capture.map((item) => (
                  <img
                    key={item.id}
                    src={item.image}
                    className={`scroll-item w-[100px] h-[200px] object-cover cursor-pointer ${
                      selectedImageUrl === item.image
                        ? "border-2 border-blue-500"
                        : ""
                    }`}
                    alt=""
                    onClick={() => setSelectedImageUrl(item.image)}
                  />
                ))}
              </div>

              <button
                className="scroll-btn scroll-prev"
                onClick={scrollPrevHandler}
              >
                <IoIosArrowDropleftCircle size={25} />
              </button>
              <button
                className="scroll-btn scroll-next"
                onClick={scrollNextHandler}
              >
                <IoIosArrowDroprightCircle size={25} />
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
