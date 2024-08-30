import { render, screen } from "@testing-library/react";
import App from "./App";

describe("App Component", () => {
  test("renders without crashing", () => {
    render(<App />);
  });

  test("renders Home component", () => {
    render(<App />);
    const homeElement = screen.getByText(/Estate Agent Property Manager/i);
    expect(homeElement).toBeInTheDocument();
  });

  test("matches snapshot", () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
