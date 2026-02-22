import { describe, it, expect } from 'vitest';
import { render, screen } from "@testing-library/react";
import App2 from "./App";
describe('something truthy and falsy', () => {
  it('true to be true', () => {
    expect(true).toBe(true);
  });

  it('false to be false', () => {
    expect(false).toBe(false);
  });
});

// App.test.jsx



describe("App component", () => {
  it("renders correct heading", () => {
    render(<App2 />);
    // using regex with the i flag allows simpler case-insensitive comparison
    expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
  });
});
