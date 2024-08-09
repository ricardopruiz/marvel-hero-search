import { render, screen } from "@testing-library/react";
import ComicCard from ".";
import comicMock from "../../mocks/comic";

describe("ComicCard", () => {
  it("renders the comic portrait", () => {
    render(<ComicCard comic={comicMock} />);

    const comic = screen.getByRole("img");

    expect(comic).toBeInTheDocument();
  });

  it("renders the comic title", () => {
    render(<ComicCard comic={comicMock} />);

    const comic = screen.getByText(comicMock.title);

    expect(comic).toBeInTheDocument();
  });

  it("renders the comic year", () => {
    const saleDate = comicMock.dates.find((date) => date.type === "onsaleDate");

    const yearComic = new Date(saleDate?.date!).getFullYear();

    render(<ComicCard comic={comicMock} />);

    const comic = screen.getByText(yearComic);

    expect(comic).toBeInTheDocument();
  });
});
