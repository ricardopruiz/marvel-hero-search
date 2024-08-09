import { render, screen, fireEvent } from "@testing-library/react";
import Searcher from ".";

describe("Searcher", () => {
  const mockOnChangeSearchText = jest.fn();

  it("renders the Searcher component", () => {
    render(
      <Searcher
        searchText=""
        onChangeSearchText={mockOnChangeSearchText}
        results={0}
      />
    );

    const inputElement = screen.getByPlaceholderText("SEARCH A CHARACTER...");

    expect(inputElement).toBeInTheDocument();
  });

  it("calls onChangeSearchText when the input value changes", () => {
    render(
      <Searcher
        searchText=""
        onChangeSearchText={mockOnChangeSearchText}
        results={0}
      />
    );

    const inputElement = screen.getByPlaceholderText("SEARCH A CHARACTER...");
    fireEvent.change(inputElement, { target: { value: "t" } });

    expect(mockOnChangeSearchText).toHaveBeenCalledTimes(1);
  });

  it('displays "RESULT" when results count is 1', () => {
    render(
      <Searcher
        searchText=""
        onChangeSearchText={mockOnChangeSearchText}
        results={1}
      />
    );

    const result = screen.getByText("1 RESULT");

    expect(result).toBeInTheDocument();
  });

  it('displays "RESULTS" when results count is not 1', () => {
    render(
      <Searcher
        searchText=""
        onChangeSearchText={mockOnChangeSearchText}
        results={0}
      />
    );

    let resultsElement = screen.getByText("0 RESULTS");
    expect(resultsElement).toBeInTheDocument();
  });
});
