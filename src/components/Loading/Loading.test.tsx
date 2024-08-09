import { render, screen } from "@testing-library/react";
import Loading from ".";

describe("Loading", () => {
  it("renders the innerSpinner with the correct size", () => {
    render(<Loading type="innerSpinner" />);

    const spinner = screen.getByTestId("loading-spinner");

    expect(spinner).toHaveAttribute("width", "50px");
  });

  it("renders the pageSpinner with the correct size", () => {
    render(<Loading type="pageSpinner" />);

    const spinner = screen.getByTestId("loading-spinner");

    expect(spinner).toHaveAttribute("width", "200px");
  });
});
