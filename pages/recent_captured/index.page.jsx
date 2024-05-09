export { Page };
import { useState, useEffect } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { url } from "../../utils/contants";
import { GrSelect } from "react-icons/gr";
import angle from '/arrow.svg'
function Page() {
  const [defaultCarousel, setDefaultCarousel] = useState();
  const [defaultImg, setDefaultImg] = useState();
  const [data, setData] = useState([]);
  const [capture, setCapture] = useState([]);
  const [devices, setDevices] = useState([]);
  const [recent, setRecent] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedCapture, setSelectedCapture] = useState(null); // New state for selected capture data
  const [selectedDeviceId, setSelectedDeviceId] = useState(null);
  const [selectedDeviceName, setSelectedDeviceName] = useState(null);
  const [showPlaceholder, setShowPlaceholder] = useState(false); // State to control placeholder visibility

  // useEffect(() => {
  //   const fetchOne = async () => {
  //     try {
  //       const response = await fetch(
  //         `${url}/v1/system/1/captures/history?page_size=2&page=2`
  //       );

  //       if (!response.ok) {
  //         const error = await response.json();
  //         throw new Error(error);
  //       }

  //       const json = await response.json();

  //       const value = json.results?.reduce(
  //         (prev, current) => {
  //           const prevTime = new Date(prev.time);
  //           const currentTime = new Date(current.time);
  //           return prevTime > currentTime ? prev : current;
  //         },
  //         [0]
  //       );
  //       setDefaultImg(value.image);
  //       setDefaultCarousel(json.results);
  //     } catch (err) {
  //       console.error(err.message);
  //     }
  //   };

  //   fetchOne();
  //   const intervalId = setInterval(fetchOne, 10000);

  //   // Clear interval on component unmount
  //   return () => clearInterval(intervalId);
  // }, []);

  useEffect(() => {
    const fetchRecent = async () => {
      try {
        const response = await fetch(`${url}/v1/system/1/captures/recent`);

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error);
        }

        const json = await response.json();
        setRecent(json);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchRecent();
  }, []);

  useEffect(() => {
    const fetchSystem = async () => {
      try {
        const response = await fetch(`${url}/v1/system/details`);

        if (!response.ok) {
          const error = await response.json();
          throw new Error(error);
        }

        const json = await response.json();
        setDevices(json);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchSystem();
  }, []);

  const fetchOne = async (id, name) => {
    try {
      console.log(id)
      setSelectedDeviceId(id);
      setSelectedDeviceName(name); // Set the selected device name
      setShowPlaceholder(true); // Display placeholder text when a device is selected
      const response = await fetch(
        `${url}/v1/system/${id}/captures/history?page_size=2&page=2`
      );

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error);
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
      console.error(err.message);
    }
  };

  useEffect(() => {
    if (selectedDeviceId !== null) {
      setSelectedImageUrl(null);
      setSelectedCapture(null); // Reset selected capture data when a new device is selected
      setShowPlaceholder(true); // Display placeholder text when a device is selected
    }
  }, [selectedDeviceId]);

  useEffect(() => {
    if (selectedImageUrl !== null) {
      const selected = capture.find((item) => item.image === selectedImageUrl);
      setSelectedCapture(selected); // Update selected capture data when a new image is selected
      setShowPlaceholder(false); // Hide placeholder text when an image is selected
    }
  }, [selectedImageUrl, capture]);

  const scrollByAmount = 200; // Adjust scroll amount as needed

  // const mostRecent = capture?.reduce(
  //   (prev, current) => {
  //     const prevTime = new Date(prev.time);
  //     const currentTime = new Date(current.time);
  //     return prevTime > currentTime ? prev : current;
  //   },
  //   [0]
  // );

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
  const [currentIndex, setCurrentIndex] = useState(0);
  // const selectImageFromCarousel = (imageUrl) => {
  //   setSelectedImageUrl(imageUrl);
  // };
  const selectImageFromCarousel = (imageUrl) => {
    const newIndex = capture.findIndex((val) => val.image === imageUrl);
    setCurrentIndex(newIndex);
    setSelectedImageUrl(imageUrl);
  };
  const moveToNextImage = () => {
    const nextIndex = (currentIndex + 1) % capture.length;
    setCurrentIndex(nextIndex);
    setSelectedImageUrl(capture[nextIndex].image);
  };

  const moveToPreviousImage = () => {
    const previousIndex = (currentIndex - 1 + capture.length) % capture.length;
    setCurrentIndex(previousIndex);
    setSelectedImageUrl(capture[previousIndex].image);
  };
  const dateToPrint = selectedCapture
    ? new Date(selectedCapture.time).toDateString()
    : new Date(recent?.time).toDateString();
  const timeToPrint = selectedCapture
    ? new Date(selectedCapture.time).toLocaleTimeString()
    : new Date(recent?.time).toLocaleTimeString();

  const locationToPrint = selectedCapture
    ? selectedCapture.location
    : "Location not found";

  return (
    <>
      <section className="w-full h-full max-h-screen py-5 my-4 gap-5">
        <div className=" w-11/12 m-auto h-full flex flex-col md:grid md:grid-cols-5 gap-5">
          <div className="md:col-span-1 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="row-span-4 overflow-hidden border rounded-2xl">
              <div className="max-h-10 h-full w-full bg-[#CBBF93]">
                <div className="w-11/12 m-auto h-full flex items-center justify-between ">
                  <h1 className="font-semibold">Devices</h1>
                </div>
              </div>
              <div className="w-full h-full bg-[#F8F1D5] rounded ">
                <ul className="w-11/12 h-full max-h-[425px] overflow-auto m-auto">
                  {devices?.map((val, key) => (
                    <li
                      key={key}
                      className="w-full h-full max-h-12 my-3 border overflow-hidden rounded-full bg-[#F9F5E6]"
                    >
                      <button
                        onClick={() => fetchOne(val.id, val.name)} // Pass device name to fetchOne function
                        className={`w-full h-full font-semibold text-center ${selectedDeviceId === val.id
                          ? "border-2 border-blue-500 rounded-full"
                          : ""
                          }`}
                      >
                        {val.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="row-span-2 overflow-hidden border shadow-md rounded-2xl p-4 bg-[#F8F1D5]">
              <div className="w-full h-full flex items-center  justify-center">
                <div className="flex justify-center text-center flex-col gap-2">
                  <span className="text-8xl font-bold">
                    {data?.count || recent?.count}
                  </span>
                  No. of Detection count
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-4 grid grid-cols-1 grid-rows-6 gap-5">
            <div className="row-span-6 col-span-1 flex flex-col ">
              <h1 className="font-semibold w-fit text-2xl px-5 py-2 bg-[#CBBF93] rounded-t">
                Captured Photo
              </h1>
              <div className="relative w-full h-[600px] mb-2 object-contain flex justify-center items-center">
                <button className="absolute left-5  rotate-180" onClick={moveToPreviousImage}>
                  <figure className="size-full max-w-10">
                    <img className="size-full" src={angle} alt="" />
                  </figure>
                </button>
                <button className="absolute right-5" onClick={moveToNextImage}><figure className="size-full max-w-10">
                  <img className="size-full" src={angle} alt="" />
                </figure></button>
                <figure className="w-full h-full">
                  {selectedImageUrl ? (
                    <img
                      src={selectedImageUrl}
                      className="w-full h-[600px] object-fit fade-in"
                      alt={data?.name}
                    />

                  ) : (
                    <div className="w-full h-[600px] bg-gray-200 flex justify-center content-center mx-auto items-center">
                      <span className="text-gray-500">
                        <GrSelect />
                      </span>
                      <span className="text-gray-500 text-lg font-semibold">
                        Please select a recent captured image for
                        <span className="text-gray-800 font-semibold">
                          {" "}
                          {selectedDeviceName ? `${selectedDeviceName}` : ""}
                        </span>
                      </span>
                    </div>
                  )}
                </figure>
              </div>

              <div className="w-full h-[50px] flex justify-center items-center bg-[#CBBF93] rounded p-5">
                {selectedImageUrl && locationToPrint
                  ? `${dateToPrint} | ${timeToPrint} | ${locationToPrint}`
                  : "No Details found"}
              </div>
            </div>
          </div>

          <div className="col-span-5">
            <div className="scroll-container flex items-center justify-center">
              <div className="scroll-content h-auto mb-4 gap-2 w-full overflow-x-auto overflow-y-hidden px-8 scrollbarWidth scrollbarTrack scrollbarThumb scrollbarHover">
                {/* Your images here */}
                {capture && capture.length > 0
                  ? capture?.map((val, key) => (
                    <img
                      key={key}
                      src={val.image}
                      className={`scroll-item w-[100px] h-[200px] object-cover cursor-pointer ${selectedImageUrl === val.image
                        ? "border-2 border-blue-500"
                        : ""
                        }`}
                      alt=""
                      onClick={() => selectImageFromCarousel(val.image)}
                    />
                  ))
                  : defaultCarousel?.map((val, key) => (
                    <img
                      key={key}
                      src={val.image}
                      className={`scroll-item w-[100px] h-[200px] object-cover cursor-pointer ${selectedImageUrl === val.image
                        ? "border-2 border-blue-500"
                        : ""
                        }`}
                      alt=""
                      onClick={() => selectImageFromCarousel(val.image)}
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
