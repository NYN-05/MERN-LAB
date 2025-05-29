import React, { useState } from "react";
const SearchFilter = () => {
  const [search, setSearch] = useState("");
  return (
    <div>
      <input type="text" placeholder="Search..." value={search} onChange={(e) => setSearch(e.target.value)}/>
      <ul>
        {["Apple", "Banana", "Cherry", "Date", "Elderberry", "Fig", "Grape"]
          .filter((item) => item.toLowerCase().includes(search.toLowerCase()))
          .map((item, i) => (
            <li key={i}>{item}</li>
          ))}
      </ul>
    </div>
  );
};
export default SearchFilter;