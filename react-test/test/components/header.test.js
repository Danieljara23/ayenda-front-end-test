import { render, screen } from '@testing-library/react';
import Header from '../../components/Header';

describe('Header', () => {
  it('Render header component', () => {
    render(<Header />)
    expect(screen.getByText("Comic's store")).toBeInTheDocument()
  })
})