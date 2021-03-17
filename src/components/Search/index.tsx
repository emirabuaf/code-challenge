import React, { Dispatch, SetStateAction } from 'react';
import './styles.css';

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
      <input className='input-text' placeholder='Search for a movie' value={search} onChange={handleChange} />
    </div>
  );
}

export default Search;
