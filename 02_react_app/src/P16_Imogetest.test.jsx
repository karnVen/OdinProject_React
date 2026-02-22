// src/Spinner.test.jsx
import { render, screen } from '@testing-library/react';
import { expect, test } from 'vitest';
import Spinner from './P16_Imogetest';

test('renders the loading spinner', () => {
  render(<Spinner />);
  
  // We use getByTestId to find our secret nametag
  const spinnerElement = screen.getByTestId('loading-spinner');
  
  // We assert that it actually exists on the screen
  expect(spinnerElement).toBeInTheDocument();
});