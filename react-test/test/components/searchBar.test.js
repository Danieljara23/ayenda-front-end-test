import { render, screen, fireEvent } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';

describe('SearchBar', () => {
  it('Render SearchBar component', () => {
    render(<SearchBar />)
    expect(screen.getByAltText("search icon")).toBeInTheDocument()
  })

  it('Should onChange works on search bar component', () => {
    const mockHandler = jest.fn();
    const { container } = render(<SearchBar onChange={mockHandler} />)

    const input = container.getElementsByClassName("search-bar__input")[0];
    fireEvent.change(input, {target: {value: 'a'}});  
    
    expect(mockHandler).toHaveBeenCalledTimes(1);
  })
})