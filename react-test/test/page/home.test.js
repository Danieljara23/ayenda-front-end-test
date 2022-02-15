import { render, screen } from '@testing-library/react';
import Home from '../../pages/index';

jest.mock("../../customHooks/useGetComics", () => {
  return {
    useGetComics: () => {
      return {
        comics: [], 
        loading: false, 
        getComicsDataByName: jest.fn(), 
        getComicsDataByFilter: jest.fn()
      };
    },
  };
});

describe('Home', () => {
  let component;

  beforeEach(() => {
    component = render(<Home />)
  })

  it('Render header component on home page', () => {
    expect(screen.getByText("Comic's store")).toBeInTheDocument()
  })

  it('Render search bar component on home page', () => {
    expect(screen.getByAltText("search icon")).toBeInTheDocument()
  })

  it('Render filters component on home page', () => {
    const { container } = component;
    expect(container.getElementsByClassName('filters__button').length).toBe(4)
  })
})