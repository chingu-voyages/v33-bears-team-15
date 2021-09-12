import { render, screen } from "@testing-library/react";
import Home from "../pages/index";

describe("Home", () => {
  beforeEach(() => render(<Home />));

  it("should match the snapshot", () => {
    expect(screen).toMatchSnapshot();
  });

  it("renders a heading", () => {
    const heading = screen.getByRole("heading", {
      name: /welcome to next\.js!/i,
    });

    expect(heading).toBeInTheDocument();
  });
});
