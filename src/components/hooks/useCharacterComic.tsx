import { useQuery } from "@tanstack/react-query";
import { getCharacter, getCharacterComics } from "../../api/characters";
import { Character } from "../types/character.types";
import { Comic } from "../types/comic.types";

const useCharacterComic = (id: Character["id"]) => {
  const query = useQuery({
    queryKey: ["character-comic", { id }],
    queryFn: () => getCharacterComics(id),
  });

  const comics = query.data?.results as Comic[];

  return {
    ...query,
    comics,
  };
};

export default useCharacterComic;
