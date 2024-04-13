import React, { useState, useEffect } from "react";
import { url } from "../../utils/contants";

const DetectedDropdown = ({
  areAllSystemChecked,
  setAreAllSystemChecked,
  selectedSystemOptions,
  setSelectedSystemOptions,
  setCheckboxSystemOptions,
  checkboxSystemOptions,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const response = await fetch(`${url}/v1/system/list`);
        if (!response.ok) {
          const error = await response.json();
          throw new Error(error.message);
        }
        const json = await response.json();
        console.log(json);
        setCheckboxSystemOptions(json);
      } catch (err) {
        console.error(err.message);
      }
    };

    fetchDevices();
  }, [url]);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  };

  const toggleOption = (id) => {
    const isChecked = selectedSystemOptions.includes(id);
    let newSelectedSystemOptions;

    if (isChecked) {
      newSelectedSystemOptions = selectedSystemOptions.filter(
        (optionId) => optionId !== id
      );
    } else {
      newSelectedSystemOptions = [...selectedSystemOptions, id];
    }

    setSelectedSystemOptions(newSelectedSystemOptions);
    updateStatus(newSelectedSystemOptions);
  };

  const toggleAllOptions = () => {
    if (!areAllSystemChecked) {
      setSelectedSystemOptions(
        checkboxSystemOptions.map((option) => option.id)
      );
    } else {
      setSelectedSystemOptions([]);
    }

    setAreAllSystemChecked(!areAllSystemChecked);
    updateStatus(
      !areAllSystemChecked
        ? checkboxSystemOptions.map((option) => option.id)
        : []
    );
  };

  const updateStatus = (checkedOptions) => {
    if (checkedOptions.length === 0) {
      return "Select Systems";
    } else if (checkedOptions.length === 1) {
      const selectedOption = checkboxSystemOptions.find(
        (option) => option.id === checkedOptions[0]
      );
      return selectedOption ? selectedOption.name : "";
    } else if (checkedOptions.length === checkboxSystemOptions.length) {
      return "All Selected";
    } else {
      return `${checkedOptions.length} Selected`;
    }
  };

  return (
    <div className="relative w-full inline-block text-left">
      <div>
        <span className="rounded-md shadow-sm">
          <button
            type="button"
            className="w-full justify-between text-black hover:border-black/30 border hover:bg-[#F9F4E3] bg-[#DDD1A0] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            id="options-menu"
            aria-haspopup="true"
            aria-expanded="true"
            onClick={toggleOpen}
          >
            {updateStatus(selectedSystemOptions)}
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
        </span>
      </div>

      {isOpen && (
        <div className="z-10 max-h-[200px] overflow-auto origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <button
              onClick={toggleAllOptions}
              className="w-full px-4 py-2 text-sm text-left"
            >
              {areAllSystemChecked ? "Uncheck All" : "Check All"}
            </button>
            {checkboxSystemOptions.map((option) => (
              <label
                key={option.id}
                className="w-full px-4 py-2 text-sm text-left flex items-center"
              >
                <input
                  type="checkbox"
                  checked={selectedSystemOptions.includes(option.id)}
                  onChange={() => toggleOption(option.id)}
                  className="mr-2"
                />
                {option.name}
              </label>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default DetectedDropdown;
