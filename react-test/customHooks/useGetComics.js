import {  useState, useEffect } from 'react';
import { apiFetch } from '../helpers/apiFetch';
import { formatComicsData } from '../helpers/formatComicsData';

const url = 'https://gateway.marvel.com:443/v1/public/comics?'
const apiKey = '12b9a96106dbadb12246ce164d96aff4'

export const useGetComics = () => {
  const [comics, setComics] = useState([]);

  useEffect(() => {
    getComicsData();
  }, [])
  
  const getComicsData = async () => {
    const comicsData = await apiFetch(`${url}apikey=${apiKey}`)
    setComics(formatComicsData(comicsData));
  }
  
  const getComicsDataByName = async (name) => {
    if (!!name) {
      const comicsData = await apiFetch(`${url}apikey=${apiKey}&titleStartsWith=${name}`)
      setComics(formatComicsData(comicsData));
    } else {
      getComicsData();
    }
  } 

  return { comics, getComicsDataByName }
}