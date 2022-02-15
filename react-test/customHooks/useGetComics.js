import {  useState, useEffect } from 'react';
import { apiFetch } from '../helpers/apiFetch';
import { formatComicsData } from '../helpers/formatComicsData';

export const useGetComics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getComicsData();
  }, [])
  
  const getComicsData = async () => {
    const comicsData = await apiFetch('https://gateway.marvel.com:443/v1/public/comics?apikey=12b9a96106dbadb12246ce164d96aff4')
    setComics(formatComicsData(comicsData));
  } 

  return { comics }
}