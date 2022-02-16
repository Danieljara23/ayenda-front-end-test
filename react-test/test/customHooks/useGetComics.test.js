import { renderHook, act } from '@testing-library/react-hooks';
import { useGetComics } from '../../customHooks/useGetComics';

const comic = {
  id: '1',
  title: 'Title',
  thumbnail: { path: 'path', extension: 'extension' },
  creators: [],
  prices: [{ price: '10' }]
}

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve({ data: { results: [comic] } }),
  })
);

describe('useGetComics', () => {
  it('Should return comic data on getComicsDataByName', async () => {
    const { result } = renderHook(() => useGetComics());

    await act(async () => {
      const { getComicsDataByName } = result.current;
      await getComicsDataByName('hulk');
    })

    expect(result.current.comics).toEqual([{
      id: '1',
      name: 'Title',
      image: 'path.extension',
      creators: [],
      price: '10'
    }]);
  })

  it('Should return comic data on getComicsDataByName with empty name', async () => {
    const { result } = renderHook(() => useGetComics());

    await act(async () => {
      const { getComicsDataByName } = result.current;
      await getComicsDataByName('');
    })

    expect(result.current.comics).toEqual([{
      id: '1',
      name: 'Title',
      image: 'path.extension',
      creators: [],
      price: '10'
    }]);
  })

  it('Should return comic data on getComicsDataByFilter', async () => {
    const { result } = renderHook(() => useGetComics());

    await act(async () => {
      const { getComicsDataByFilter } = result.current;
      await getComicsDataByFilter('123');
    })

    expect(result.current.comics).toEqual([{
      id: '1',
      name: 'Title',
      image: 'path.extension',
      creators: [],
      price: '10'
    }]);
  })
})