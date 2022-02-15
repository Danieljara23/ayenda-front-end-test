import { render } from '@testing-library/react';
import Filters from '../../components/Filters';

describe('Filters', () => {
  const filters = [{
    id: '1',
    name: 'Filter 1',
  }, {
    id: '2',
    name: 'Filter 2',
  }]
  it('Render buttons on Filters component', () => {
    const { container } = render(<Filters filters={filters} applyFilter={() => null} />)
    expect(container.getElementsByClassName('filters__button').length).toBe(2)
  })
})