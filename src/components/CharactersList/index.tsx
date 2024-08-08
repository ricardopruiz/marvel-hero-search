import CharacterCard from "../CharacterCard";
import { Character } from "../types/character.types";
import styles from "./CharactersList.module.scss";
import { forwardRef } from "react";

type CharactersListProps = {
  characters: Character[];
};

type Ref = HTMLDivElement;

const CharactersList = forwardRef<Ref, CharactersListProps>(
  ({ characters }, ref) => {
    return (
      <div className={styles["characters-list"]} ref={ref}>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    );
  }
);

CharactersList.displayName = "CharacterList";

export default CharactersList;
