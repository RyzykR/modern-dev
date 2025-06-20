import React from "react";
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom';        // <-- add this line
import App from "./src/App";

test("renders Hello, Azure", () => {
  render(<App />);
  expect(screen.getByText(/Hello, LNU/i)).toBeInTheDocument();
});
