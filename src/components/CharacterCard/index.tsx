import Link from "next/link";
import FavoriteStatusIcon from "../FavoriteStatusIcon";
import { Character } from "../types/character.types";
import styles from "./CharacterCard.module.scss";
import Image from "next/image";
import CharacterContainer from "../CharacterContainer";

const CharacterCard = ({ character }: { character: Character }) => {
  const { extension, path } = character.thumbnail;
  const getImagePath = `${path}.${extension}`;

  return (
    <Link href={`/character/${character.id}`}>
      <CharacterContainer>
        <div className={styles["character-card"]}>
          <Image
            className={styles["character-image"]}
            alt={`Picture of ${character.name}`}
            src={getImagePath}
            height={300}
            width={300}
            priority
          />
          <div className={styles["separator"]} />
          <div className={styles["bottom-card"]}>
            <span className={styles["character-name"]}>{character.name}</span>
            <FavoriteStatusIcon isFavorited={false} onClick={() => {}} />
          </div>
        </div>
      </CharacterContainer>
    </Link>
  );
};

export default CharacterCard;
