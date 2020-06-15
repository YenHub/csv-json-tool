import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders copy foot year correctly', () => {
  const year = `© ${new Date().getFullYear()}`;
  const { getByText } = render(<App />);
  const regex = `${year}`;
  const footerElement = getByText(regex);
  expect(footerElement).toBeInTheDocument();
});
