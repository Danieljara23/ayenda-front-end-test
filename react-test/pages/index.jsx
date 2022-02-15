import { useState, useCallback, useMemo } from "react";
import debounce from 'lodash.debounce';

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import CardsList from "../components/CardsList";

import data from '../data/filters.json';

import { useGetComics } from "../customHooks/useGetComics";

const Home = () => {
  const [searchValue, setSearchValue] = useState('');
  const { comics, getComicsDataByName, getComicsDataByFilter } = useGetComics();

  const getDataByFilter = (id) => {
    getComicsDataByFilter(id);
  }

  const handleSearchBarChange = (value) => {
    setSearchValue(value);
    debouncedSearch(value);
  }

  const search = useCallback((value) => {
    getComicsDataByName(value);
  }, [getComicsDataByName])

  const debouncedSearch = useMemo(() => debounce(search, 1000), [search]); 

  return (
    <>
      <Header />
      <SearchBar value={searchValue} onChange={handleSearchBarChange} />
      <Filters 
        filters={data.filters} 
        applyFilter={getDataByFilter} 
      />
      <CardsList comics={comics} />
    </>
  )
}

export default Home;
