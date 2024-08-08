import { useQuery } from "@tanstack/react-query";
import { getCharacter } from "../../api/characters";
import { Character } from "../types/character.types";

const useCharacter = (id: Character["id"]) => {
  const query = useQuery({
    queryKey: ["character", { id }],
    queryFn: () => getCharacter(id),
  });

  const character = query.data?.results[0] as Character;

  return {
    ...query,
    character,
  };
};

export default useCharacter;
