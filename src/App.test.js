import { render, screen } from '@testing-library/react';
import App from './App';

test('renders fashion styles heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/Fashion Styles/i);
  expect(headingElement).toBeInTheDocument();
});
