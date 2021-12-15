import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app', () => {
  render(<App />);
  const linkElement = screen.getByText(/soil calculator/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a button', () => {
  render(<App />);
  const linkElement = screen.getByRole(/button/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a textbox', () => {
  render(<App />);
  const linkElement = screen.getByRole(/textbox/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders a select option', () => {
  render(<App />);
  const linkElement = screen.getByRole(/combobox/i);
  expect(linkElement).toBeInTheDocument();
});