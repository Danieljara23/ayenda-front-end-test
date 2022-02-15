import { formatComicsData } from '../../helpers/formatComicsData';

describe("formatComicsData", () => {
  it("Should return empty array for null parameter", () => {
    const comics = formatComicsData(null);
    expect(comics).toEqual([]);
  })
  it("Should return empty array for null data value", () => {
    const comics = formatComicsData({});
    expect(comics).toEqual([]);
  })
  it("Should return empty array for null results value", () => {
    const comics = formatComicsData({ data: {} });
    expect(comics).toEqual([]);
  })
  it("Should return empty array for results value different to array", () => {
    const comics = formatComicsData({ data: { results: {} } });
    expect(comics).toEqual([]);
  })
  it("Should return comic data", () => {
    const comic = { data: { results: [{
      id: '1',
      title: 'Title',
      thumbnail: { path: 'path', extension: 'extension' },
      creators: [],
      prices: [{ price: '10' }]
    }] } };
    const comics = formatComicsData(comic);
    expect(comics).toEqual([{
      id: '1',
      name: 'Title',
      image: 'path.extension',
      creators: [],
      price: '10'
    }]);
  })
})