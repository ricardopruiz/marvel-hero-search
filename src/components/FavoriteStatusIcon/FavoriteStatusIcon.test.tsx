import { render, screen } from "@testing-library/react";
import FavoriteStatusIcon from ".";
import { CharactersContext } from "../contexts/CharactersContext";
import charactersMock from "@/mocks/characters";
import styles from "./FavoriteStatusIcon.module.css";

const mockFavorited = [...charactersMock];
const addFavoritedMock = jest.fn();
const deleteFavoritedMock = jest.fn();

const isFavoritedMock = jest.fn((character) =>
  mockFavorited.some((favCharacter) => favCharacter.id === character.id)
);

const myCharacter = mockFavorited[0];

describe("FavoriteStatusIcon", () => {
  it("renders the full heart when character is favorited", () => {
    render(
      <CharactersContext.Provider
        value={{
          favoritedCharacters: mockFavorited,
          addFavoriteCharacter: addFavoritedMock,
          removeFavoriteCharacter: deleteFavoritedMock,
          isCharacterFavorited: isFavoritedMock,
        }}
      >
        <FavoriteStatusIcon character={myCharacter} />
      </CharactersContext.Provider>
    );

    const heartIcon = screen.getByTestId("full-heart-icon");
    expect(heartIcon).toBeInTheDocument();
  });

  it("renders the empty heart when character is not favorited", () => {
    mockFavorited.splice(0, 1);

    render(
      <CharactersContext.Provider
        value={{
          favoritedCharacters: mockFavorited,
          addFavoriteCharacter: addFavoritedMock,
          removeFavoriteCharacter: deleteFavoritedMock,
          isCharacterFavorited: isFavoritedMock,
        }}
      >
        <FavoriteStatusIcon character={myCharacter} />
      </CharactersContext.Provider>
    );

    const heartIcon = screen.getByTestId("empty-heart-icon");
    expect(heartIcon).toBeInTheDocument();
  });

  it("tries to make a character not favorited if it is", () => {
    render(
      <CharactersContext.Provider
        value={{
          favoritedCharacters: mockFavorited,
          addFavoriteCharacter: addFavoritedMock,
          removeFavoriteCharacter: deleteFavoritedMock,
          isCharacterFavorited: isFavoritedMock,
        }}
      >
        <FavoriteStatusIcon character={myCharacter} />
      </CharactersContext.Provider>
    );

    const favoritedButton = screen.getByRole("button");
    favoritedButton.click();

    expect(addFavoritedMock).toHaveBeenCalled();
  });

  it("tries to make a character favorited if it is not", () => {
    render(
      <CharactersContext.Provider
        value={{
          favoritedCharacters: mockFavorited,
          addFavoriteCharacter: addFavoritedMock,
          removeFavoriteCharacter: deleteFavoritedMock,
          isCharacterFavorited: isFavoritedMock,
        }}
      >
        <FavoriteStatusIcon character={mockFavorited[0]} />
      </CharactersContext.Provider>
    );

    const favoritedButton = screen.getByRole("button");
    favoritedButton.click();

    expect(deleteFavoritedMock).toHaveBeenCalled();
  });

  it("renders component in big mode", () => {
    render(
      <CharactersContext.Provider
        value={{
          favoritedCharacters: mockFavorited,
          addFavoriteCharacter: addFavoritedMock,
          removeFavoriteCharacter: deleteFavoritedMock,
          isCharacterFavorited: isFavoritedMock,
        }}
      >
        <FavoriteStatusIcon character={mockFavorited[0]} size="big" />
      </CharactersContext.Provider>
    );

    const favoritedButton = screen.getByRole("button");

    expect(favoritedButton).toHaveClass(styles["size-big"]);
  });

  it("renders component in small mode", () => {
    render(
      <CharactersContext.Provider
        value={{
          favoritedCharacters: mockFavorited,
          addFavoriteCharacter: addFavoritedMock,
          removeFavoriteCharacter: deleteFavoritedMock,
          isCharacterFavorited: isFavoritedMock,
        }}
      >
        <FavoriteStatusIcon character={mockFavorited[0]} size="small" />
      </CharactersContext.Provider>
    );

    const favoritedButton = screen.getByRole("button");

    expect(favoritedButton).toHaveClass(styles["size-small"]);
  });
});
