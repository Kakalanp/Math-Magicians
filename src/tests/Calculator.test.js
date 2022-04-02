import renderer from 'react-test-renderer';
import { render, fireEvent, screen } from '@testing-library/react';
import Calculator from '../components/Calculator';

it('renders correctly', () => {
  const tree = renderer.create(<Calculator />).toJSON();

  expect(tree).toMatchSnapshot();
});

it('displays the correct input on click', () => {
  const btn = render(<Calculator />).getByText('7');

  fireEvent.click(btn);

  expect(screen.getByTestId('display').textContent).toBe('  7');
});
