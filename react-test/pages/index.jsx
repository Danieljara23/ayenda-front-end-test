import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";

import data from '../data/filters.json';

const Home = () => {
  const getDataByFilter = (id) => {
    console.log(id);
  }

  return (
    <>
      <Header />
      <SearchBar />
      <Filters 
        filters={data.filters} 
        applyFilter={getDataByFilter} 
      />
    </>
  )
}

export default Home;
