import React from "react";

const FilterCountry = ({ onSelect }) => {
  const FilterHandler = (e) => {
    const regionName = e.target.value;
    onSelect(regionName);
  };
  return (
    <select onChange={FilterHandler}>
      <option>Filter By Region</option>
      <option value="New York">New York</option>
      <option value="Laos">Laos</option>
      <option value="Africa">Africa</option>
      <option value="Europe">Europe</option>
      <option value="Asia">Asia</option>
    </select>
  );
};

export default FilterCountry;
