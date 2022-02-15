export const formatComicsData = (comics) => {
  if (!!comics?.data?.results && Array.isArray(comics.data.results)) {
    return comics.data.results.map(comic => ({
      name: comic.title,
      image: `${comic.thumbnail.path}.${comic.thumbnail.extension}`,
      creators: comic.creators,
      price: comic.prices[0]?.price
    }))
  }
  return [];
}