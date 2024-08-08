import { Character } from "../types/character.types";

export type CharactersContextData = {
  favoritedCharacters: Character[];
  addFavoriteCharacter(character: Character): void;
  removeFavoriteCharacter(character: Character): void;
  isCharacterFavorited(character: Character): boolean;
};
