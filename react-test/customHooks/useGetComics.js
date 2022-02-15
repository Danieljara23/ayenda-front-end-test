import {  useState, useEffect } from 'react';
import { apiFetch } from '../helpers/apiFetch';
import { formatComicsData } from '../helpers/formatComicsData';

const url = 'https://gateway.marvel.com:443/v1/public/comics?'
const apiKey = '12b9a96106dbadb12246ce164d96aff4'

export const useGetComics = () => {
  const [comics, setComics] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getComicsData();
  }, [])
  
  const getComicsData = async () => {
    const comicsData = await loadingWrapper(`${url}apikey=${apiKey}`)
    setComics(formatComicsData(comicsData));
  }
  
  const getComicsDataByName = async (name) => {
    if (!!name) {
      const comicsData = await loadingWrapper(`${url}apikey=${apiKey}&titleStartsWith=${name}`)
      setComics(formatComicsData(comicsData));
    } else {
      getComicsData();
    }
  } 

  const getComicsDataByFilter = async (characterId) => {
    const comicsData = await loadingWrapper(`${url}characters=${characterId}&apikey=${apiKey}`)
    setComics(formatComicsData(comicsData));
  }
  
  const loadingWrapper = async (url) => {
    setLoading(true);
    const response = await apiFetch(url);
    setLoading(false);
    return response;
  }

  return { comics, loading, getComicsDataByName, getComicsDataByFilter }
}