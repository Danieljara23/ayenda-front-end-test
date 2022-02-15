import { render } from '@testing-library/react';
import Spinner from '../../components/Spinner';

describe('Spinner', () => {
  it('Render spinner component with custom class', () => {
    const { container } = render(<Spinner color="black" />)
    expect(container.getElementsByClassName('spinner-black').length).toBe(4)
  })
})