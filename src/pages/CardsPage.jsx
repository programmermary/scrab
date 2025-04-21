import React from 'react'
import FilterWrapper from '../components/Filter/FilterWrapper'
import { useState } from 'react';
import CardsBody from '../components/cards/CardsBody';
function CardsPage() {
    const [filters, setFilters] = useState({
        size: [],
        color: [],
        fabric: [],
        price: "",
      });
    
      const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
    
        if (type === "checkbox") {
          setFilters((prev) => {
            const updated = checked
              ? [...(prev[name] || []), value]
              : (prev[name] || []).filter((item) => item !== value);
            return { ...prev, [name]: updated };
          });
        } else {
          setFilters((prev) => ({ ...prev, [name]: value }));
        }
      };
    
      return (
        <div className="flex flex-col  md:flex-row gap-4 ">
          <FilterWrapper filters={filters} onChange={handleChange} />
          <div className="hidden md:block line bg-gray-300 h-screen">.</div>
          <div className="flex-1">
           <CardsBody/>
          </div>
        </div>
      );
}

export default CardsPage