import React from "react";

function Filter({ onCategoryChange, selectedCategory, onSearchChange, search }) {
  return (
    <div>
      <input 
        type="text"
        placeholder="Search..."
        value={search}
        onChange={(e) => onSearchChange(e.target.value)}
      />
      <select 
        onChange={(e) => onCategoryChange(e.target.value)}
        value={selectedCategory}
      >
        <option value="All">All</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
    </div>
  );
}

export default Filter;