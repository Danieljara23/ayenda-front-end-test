import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import Filters from "../components/Filters";
import CardsList from "../components/CardsList";

import data from '../data/filters.json';

import { useGetComics } from "../customHooks/useGetComics";

const Home = () => {
  const { comics } = useGetComics();
  const getDataByFilter = (id) => {
    console.log(id);
  }
  console.log(comics);
  return (
    <>
      <Header />
      <SearchBar />
      <Filters 
        filters={data.filters} 
        applyFilter={getDataByFilter} 
      />
      <CardsList comics={comics} />
    </>
  )
}

export default Home;
