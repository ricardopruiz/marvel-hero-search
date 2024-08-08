import Link from "next/link";
import FavoriteStatusIcon from "../FavoriteStatusIcon";
import { Character } from "../types/character.types";
import styles from "./CharacterCard.module.scss";
import Image from "next/image";
import CharacterContainer from "../CharacterContainer";
import { buildThumbnailURL } from "@/utils/pathUtils";

const CharacterCard = ({ character }: { character: Character }) => {
  const imgUrl = buildThumbnailURL(character.thumbnail);

  return (
    <Link href={`/character/${character.id}`}>
      <CharacterContainer>
        <div className={styles["character-card"]}>
          <Image
            className={styles["character-image"]}
            alt={`Picture of ${character.name}`}
            src={imgUrl}
            height={300}
            width={300}
            priority
          />
          <div className={styles["separator"]} />
          <div className={styles["bottom-card"]}>
            <span className={styles["character-name"]}>
              {character.name.toUpperCase()}
            </span>
            <FavoriteStatusIcon isFavorited={false} onClick={() => {}} />
          </div>
        </div>
      </CharacterContainer>
    </Link>
  );
};

export default CharacterCard;
