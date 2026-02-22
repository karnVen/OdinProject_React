// src/PokemonCard.test.jsx
import { render, screen } from '@testing-library/react';
import { expect, test, vi } from 'vitest';
import PokemonCard from './P16_PokemonCard';

// Keep the global stunt double
global.fetch = vi.fn();

test('displays an error message when the API fails', async () => {
  // 1. Tell the stunt double to fail!
  // Instead of mockResolvedValueOnce, we use mockRejectedValueOnce
  fetch.mockRejectedValueOnce(new Error('API is down'));

  // 2. Render the component
  render(<PokemonCard />);

  // 3. Verify it starts by loading
  expect(screen.getByText('Loading...')).toBeInTheDocument();

  // 4. Wait for the async update!
  // The component will catch the error and update the screen
  const errorMessage = await screen.findByText('Failed to fetch Pokemon.');
  
  // 5. Verify the error is shown
  expect(errorMessage).toBeInTheDocument();
  
  // 6. Verify that "Loading..." is now gone
  expect(screen.queryByText('Loading...')).not.toBeInTheDocument();
});