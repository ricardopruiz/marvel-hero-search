import { createContext, useState } from "react";
import { CharactersContextData } from "./CharactersContext.types";
import { Character } from "../types/character.types";

const charactersContextInitialState: CharactersContextData = {
  favoritedCharacters: [],
  addFavoriteCharacter: (character: Character) => {},
  removeFavoriteCharacter: (character: Character) => {},
};

export const CharactersContext = createContext<CharactersContextData>(
  charactersContextInitialState
);

export const CharactersContextProvider = ({ children }: any) => {
  const [favoritedCharacters, setFavoritedCharacters] = useState<Character[]>(
    []
  );

  const addFavoriteCharacter = (character: Character) => {
    const isAlreadyFavorited = favoritedCharacters.find(
      (favoritedcharacter) => favoritedcharacter.id === character.id
    );
    if (isAlreadyFavorited)
      setFavoritedCharacters((oldFavoriteCharacters) => [
        ...oldFavoriteCharacters,
        character,
      ]);
  };

  const removeFavoriteCharacter = (character: Character) => {
    setFavoritedCharacters((oldFavorites) =>
      oldFavorites.filter(
        (favoritedCharacter) => favoritedCharacter.id === character.id
      )
    );
  };

  return (
    <CharactersContext.Provider
      value={{
        favoritedCharacters,
        addFavoriteCharacter,
        removeFavoriteCharacter,
      }}
    >
      {children}
    </CharactersContext.Provider>
  );
};
