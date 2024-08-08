import { createContext, useState } from "react";
import { CharactersContextData } from "./CharactersContext.types";
import { Character } from "../../types/character.types";

const charactersContextInitialState: CharactersContextData = {
  favoritedCharacters: [],
  addFavoriteCharacter: (character: Character) => {},
  removeFavoriteCharacter: (character: Character) => {},
  isCharacterFavorited: (character: Character) => {
    return false;
  },
};

export const CharactersContext = createContext<CharactersContextData>(
  charactersContextInitialState
);

export const CharactersContextProvider = ({ children }: any) => {
  const [favoritedCharacters, setFavoritedCharacters] = useState<Character[]>(
    []
  );

  const addFavoriteCharacter = (character: Character) => {
    const isAlreadyFavorited = favoritedCharacters.findIndex(
      (favoritedcharacter) => favoritedcharacter.id === character.id
    );
    if (isAlreadyFavorited === -1) {
      setFavoritedCharacters((oldFavoriteCharacters) => [
        ...oldFavoriteCharacters,
        character,
      ]);
    }
  };

  const removeFavoriteCharacter = (character: Character) => {
    setFavoritedCharacters((oldFavorites) =>
      oldFavorites.filter(
        (favoritedCharacter) => favoritedCharacter.id !== character.id
      )
    );
  };

  const isCharacterFavorited = (character: Character) => {
    const isCharacterFavorited = favoritedCharacters.findIndex(
      (favoritedCharacter) => favoritedCharacter.id === character.id
    );

    return isCharacterFavorited >= 0;
  };

  return (
    <CharactersContext.Provider
      value={{
        favoritedCharacters,
        addFavoriteCharacter,
        removeFavoriteCharacter,
        isCharacterFavorited,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
