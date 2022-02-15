import { render, screen } from '@testing-library/react';
import Card from '../../components/Card';

describe('Card', () => {
  it('Render Card component', () => {
    const comic = {
      name: 'Comic',
      image: '',
      creators: [],
      price: ''
    }
    render(<Card {...comic} />)
    expect(screen.getByText("Comic")).toBeInTheDocument()
  })
})