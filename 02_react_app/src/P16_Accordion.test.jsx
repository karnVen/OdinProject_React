// src/Accordion.test.jsx
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import Accordion from './P16_Accordion';

test('can open accordion items to see the contents', async () => {
  // 1. Setup our fake data
  const hats = { title: 'Favorite Hats', contents: 'Fedoras are classy' };
  const footwear = { title: 'Favorite Footwear', contents: 'Flipflops are the best' };
  
  // 2. Render the component just like a user would see it
  render(<Accordion items={[hats, footwear]} />);

  // 3. Verify the initial state (Hats should be open by default because openIndex is 0)
  expect(screen.getByText(hats.contents)).toBeInTheDocument();
  
  // queryByText returns null if not found, which is perfect for checking things that SHOULD NOT be there
  expect(screen.queryByText(footwear.contents)).not.toBeInTheDocument();

  // 4. Act like a user: Click the footwear button!
  const user = userEvent.setup();
  await user.click(screen.getByText(footwear.title));

  // 5. Verify the new state (Footwear is now open, Hats are closed)
  expect(screen.getByText(footwear.contents)).toBeInTheDocument();
  expect(screen.queryByText(hats.contents)).not.toBeInTheDocument();
});