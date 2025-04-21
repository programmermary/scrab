import React, { useState } from "react";
import Filters from "./Filters";
import filtersData from "../Data/filter";

const FilterWrapper = ({ filters, onChange }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Mobile View: Dropdown Button */}
      <div className="md:hidden p-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="w-full border p-2 rounded bg-gray-200 font-semibold"
        >
          {isOpen ? "Hide Filters" : "Show Filters"}
        </button>

        {isOpen && (
          <div className="mt-4 border p-4 rounded shadow bg-white">
            <Filters filters={filtersData} onChange={onChange} />
          </div>
        )}
      </div>

      {/* Desktop View: Always show */}
      <div className="hidden md:block w-full max-w-xs">
        <Filters filters={filtersData} onChange={onChange} />
      </div>
    </>
  );
};

export default FilterWrapper;
