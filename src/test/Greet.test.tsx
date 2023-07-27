import { render, screen } from "@testing-library/react";
import Greet from "../Greet";

describe("Greeting should render properly", () => {
  it("Should render only greeting when no name provided", () => {
    render(<Greet />);
    const greetingText = screen.getByText(/hello there/i);
    expect(greetingText).toBeInTheDocument();
  });
  it("Should render name when is providedd", () => {
    render(<Greet name="Ivad" />);
    const greetingWithName = screen.getByText(/hello there ivad/i);
    expect(greetingWithName).toBeInTheDocument();
  });
});
