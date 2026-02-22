// src/SubmitButton.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import SubmitButton from './P16_SubmitBotton';

test('does not allow clicking a disabled button', async () => {
  // 1. Create our "Virtual Human" exactly as the docs recommend
  const user = userEvent.setup();
  
  // 2. Render the component
  render(<SubmitButton />);
  
  // 3. Find the button
  const button = screen.getByRole('button', { name: /save data/i });
  
  // 4. Try to click it! 
  // (Because we use userEvent, it will see the 'disabled' attribute and refuse to click)
  await user.click(button);

  // Note: If we had used fireEvent.click(button), it would have illegally clicked it!
});