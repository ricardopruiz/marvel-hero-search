import CharacterCard from "../CharacterCard";
import { Character } from "../types/character.types";
import styles from "./CharactersList.module.scss";

type CharactersListProps = {
  characters: Character[];
};

const CharactersList = ({ characters }: CharactersListProps) => {
  return (
    <div className={styles["characters-list"]}>
      {characters.map((character) => (
        <CharacterCard key={character.id} character={character} />
      ))}
    </div>
  );
};

export default CharactersList;
