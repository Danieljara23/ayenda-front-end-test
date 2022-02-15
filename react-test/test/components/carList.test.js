import { render, screen } from '@testing-library/react';
import CardsList from '../../components/CardsList';

describe('CardsList', () => {
  const comics = [{
    id: '1',
    name: 'Comic',
    image: '',
    creators: [],
    price: ''
  }]
  it('Render spinner on CardsList component', () => {
    const { container } = render(<CardsList comics={comics} loading={true} />)
    expect(container.getElementsByClassName('spinner-black').length).toBe(4)
  })
  it('Render card on CardsList component', () => {
    render(<CardsList comics={comics} loading={false} />)
    expect(screen.getByText("Comic")).toBeInTheDocument()
  })
})