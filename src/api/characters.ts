import { format } from "path";
import { Character } from "../types/character.types";
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
  return requestMarvel(`/characters/${id}`, {}).then(
    ({ results }) => results[0] as Character
  );
};

export const getCharacterComics = (id: Character["id"]) => {
  return requestMarvel(`/characters/${id}/comics`, {
    orderBy: "onsaleDate",
    limit: "20",
  });
};
