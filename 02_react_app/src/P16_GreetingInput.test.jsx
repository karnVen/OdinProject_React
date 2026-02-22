// src/GreetingInput.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import GreetingInput from './P16_GreetingInput';

test('updates the greeting exactly as the user types', async () => {
  // 1. Setup the virtual human
  const user = userEvent.setup();

  // 2. Render the component
  render(<GreetingInput />);

  // 3. Find the elements using accessible roles
  // We find the input by reading its label ("Your Name:")
  const inputField = screen.getByRole('textbox', { name: /your name/i });
  
  // 4. Verify initial state (before typing)
  expect(screen.getByText('Hello, Stranger!')).toBeInTheDocument();

  // 5. The Action: Type into the input like a real person
  await user.type(inputField, 'Alex');

  // 6. Verify the final state
  // Notice we don't look for 'Stranger' anymore, because it's gone!
  expect(screen.getByText('Hello, Alex!')).toBeInTheDocument();
});