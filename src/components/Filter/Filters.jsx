import React from "react";
import filterData from "../Data/filter";
const Filters = ({filters , onChange}) => {
  return (
    <div className="flex flex-col gap-4 w-full h-full p-4">
     {
        filterData.map(filterItem =>(
            <div key={filterItem.name}>
                <label className="text-lg font-bold">{filterItem.label}</label>
                {filterItem.type === 'checkbox' && 
                filterItem.Options.map(option => (
                    <label key={option} className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      name={filterItem.name}
                      value={option}
                      onChange={onChange}
                    />
                    {option}
                  </label>
                ))

                }
                 {filterItem.type === 'select' && (
            <select
              name={filterItem.name}
              onChange={onChange}
              className="w-full border p-2 rounded "
            >
              <option value="">All</option>
              {filterItem.Options.map(option => (
                <option key={option} value={option.toLowerCase().replace(/\s+/g, '-')}>
                  {option}
                </option>
              ))}
            </select>
          )}
            </div>
        ))
     }
    </div>
  );
}
export default Filters;