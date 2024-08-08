"use client";

import { Character } from "../../../components/types/character.types";
import useCharacter from "../../../components/hooks/useCharacter";
import { useParams } from "next/navigation";

const CharacterPage = () => {
  const { id } = useParams();
  const { character, isLoading, isError } = useCharacter(Number(id));

  return <>Character shit {!isLoading && character.name}</>;
};

export default CharacterPage;
