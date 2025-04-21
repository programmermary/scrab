import React, { useState } from "react";
import filtersData from "../Data/filter";

const Filters = ({ filters, onChange }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (name) => {
    setOpenSections((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
      {filtersData.map((filterItem) => (
        <div key={filterItem.name} className="border-b pb-2">
          {/* Label + Arrow */}
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleSection(filterItem.name)}
          >
            <label className="text-lg font-bold">{filterItem.label}</label>
            <span className="md:hidden  transition-transform duration-300 text-xl">
              {openSections[filterItem.name] ? "▼" : "▶"}
            </span>
          </div>

          {/* Filter Options */}
          <div className={`${openSections[filterItem.name] ? "block" : "hidden"} md:block mt-2`}>
            {filterItem.type === "checkbox" &&
              filterItem.Options.map((option) => (
                <label key={option} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    name={filterItem.name}
                    value={option}
                    onChange={onChange}
                  />
                  {option}
                </label>
              ))}

            {filterItem.type === "select" && (
              <select
                name={filterItem.name}
                onChange={onChange}
                className="w-full border p-2 rounded mt-2"
              >
                <option value="">All</option>
                {filterItem.Options.map((option) => (
                  <option
                    key={option}
                    value={option.toLowerCase().replace(/\s+/g, "-")}
                  >
                    {option}
                  </option>
                ))}
              </select>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Filters;
