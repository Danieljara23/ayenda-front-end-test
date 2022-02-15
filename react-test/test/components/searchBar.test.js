import { render, screen } from '@testing-library/react';
import SearchBar from '../../components/SearchBar';

describe('SearchBar', () => {
  it('Render SearchBar component', () => {
    render(<SearchBar />)
    expect(screen.getByAltText("search icon")).toBeInTheDocument()
  })
})