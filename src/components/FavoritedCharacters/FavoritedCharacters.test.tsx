import { render, screen } from "@testing-library/react";
import FavoritedCharacters from ".";
import { CharactersContext } from "../contexts/CharactersContext";
import charactersMock from "@/mocks/characters";

const mockFavorited = [...charactersMock];
const addFavoritedMock = jest.fn();
const deleteFavoritedMock = jest.fn();

const isFavoritedMock = jest.fn();

describe("FavoritedCharacters", () => {
  it("renders that there is no characters favorited", () => {
    render(
      <CharactersContext.Provider
        value={{
          favoritedCharacters: [],
          addFavoriteCharacter: addFavoritedMock,
          removeFavoriteCharacter: deleteFavoritedMock,
          isCharacterFavorited: isFavoritedMock,
        }}
      >
        <FavoritedCharacters />
      </CharactersContext.Provider>
    );
    const totalFavorited = screen.getByText("0");

    expect(totalFavorited).toBeInTheDocument();
  });

  it("renders the number of characters favorited", () => {
    render(
      <CharactersContext.Provider
        value={{
          favoritedCharacters: mockFavorited,
          addFavoriteCharacter: addFavoritedMock,
          removeFavoriteCharacter: deleteFavoritedMock,
          isCharacterFavorited: isFavoritedMock,
        }}
      >
        <FavoritedCharacters />
      </CharactersContext.Provider>
    );
    const totalFavorited = screen.getByText(mockFavorited.length);

    expect(totalFavorited).toBeInTheDocument();
  });
});
