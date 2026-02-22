// import { describe, it, expect } from 'vitest';
// import { render, screen } from "@testing-library/react";
// import App2 from "./App";
// describe('something truthy and falsy', () => {
//   it('true to be true', () => {
//     expect(true).toBe(true);
//   });

//   it('false to be false', () => {
//     expect(false).toBe(false);
//   });
// });

// // App.test.jsx



// describe("App component", () => {
//   it("renders correct heading", () => {
//     render(<App2 />);
//     // using regex with the i flag allows simpler case-insensitive comparison
//     expect(screen.getByRole("heading").textContent).toMatch(/our first test/i);
//   });
// });


// App.test.jsx

import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App2 from "./App";

describe("App component", () => {
  it("renders magnificent monkeys", () => {
    // since screen does not have the container property, we'll destructure render to obtain a container for this test
    const { container } = render(<App2 />);
    expect(container).toMatchSnapshot();
  });

  it("renders radical rhinos after button click", async () => {
    const user = userEvent.setup();

    render(<App2 />);
    const button = screen.getByRole("button", { name: "Click Me" });

    await user.click(button);

    expect(screen.getByRole("heading").textContent).toMatch(/radical rhinos/i);
  });
});
