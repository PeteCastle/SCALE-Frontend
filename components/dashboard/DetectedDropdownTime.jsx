import React, { useState } from "react";

const TimeDropdown = ({selectedTimeOption, setSelectedTimeOption}) => {
  const [isDropdown, setIsDropdown] = useState(false);

  const options = [
    { label: "Hour", value: "hour" },
    { label: "Day", value: "day" },
    { label: "Week", value: "week" },
    { label: "Month", value: "month" },
  ];

  const toggleDropdown = () => {
    setIsDropdown((prevState) => !prevState);
  };

  const handleOptionClick = (value) => {
    setSelectedTimeOption(value);
    toggleDropdown();
  };

  const renderLabel = () => {
    if (selectedTimeOption) {
      const selectedTimeOptionLabel = options.find(
        (option) => option.value === selectedTimeOption
      ).label;
      return `Time: ${selectedTimeOptionLabel}`;
    } else {
      return "Time";
    }
  };

  return (
    <div className="relative w-full">
      <button
        onClick={toggleDropdown}
        className="w-full justify-between text-black hover:border-black/30 border hover:bg-[#F9F4E3] bg-[#DDD1A0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        type="button"
      >
        <span className="">{renderLabel()}</span>

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
          className="w-full py-2 text-sm text-gray-700 dark:text-gray-200"
          aria-labelledby="dropdownDefaultButton"
        >
          {options.map((option) => (
            <li key={option.value}>
              <button
                onClick={() => handleOptionClick(option.value)}
                className="w-full text-left block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
              >
                {option.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TimeDropdown;
