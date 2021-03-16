import React, { useState, Dispatch, SetStateAction } from 'react';

interface SearchProps {
  handleSearch: Dispatch<SetStateAction<string>>,
  search: string;
}

const Search:React.FC<SearchProps> = ({handleSearch, search}) => {

  const handleChange = (e:any) => {
    handleSearch(e.target.value);
  }
  return (
    <div >
      <input placeholder='Search for a movie' value={search} onChange={handleChange} />
    </div>
  );
}

export default Search;
