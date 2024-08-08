import { Character } from "../components/types/character.types";
import requestMarvel from "./marvelApi";

type GetPaginatedCharactersOptions = {
  charactersPerPage: number;
  page: number;
  nameStartsWith?: string;
};

export const getPaginatedCharacters = (
  options: GetPaginatedCharactersOptions
) => {
  const { charactersPerPage, page, nameStartsWith } = options;
  const offset = charactersPerPage * (page - 1);

  return requestMarvel("/characters", {
    limit: charactersPerPage.toString(),
    offset: offset.toString(),
    nameStartsWith,
  });
};

export const getCharacter = (id: Character["id"]) => {
  return requestMarvel(`/characters/${id}`, {});
};
