import { render, screen } from "@testing-library/react";
import comicMock from "../../mocks/comic";
import ComicList from ".";

const comicList = [comicMock, comicMock];

describe("ComicList", () => {
  it("renders the comics", () => {
    render(<ComicList comicList={comicList} />);
    const comics = screen.getAllByRole("img");

    expect(comics).toHaveLength(2);
  });
});
