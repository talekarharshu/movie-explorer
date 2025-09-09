import React from "react";

const SearchInput = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Search Moies"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
    />
  );
};

export default SearchInput;
