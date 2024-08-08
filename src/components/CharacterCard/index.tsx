import Link from "next/link";
import FavoriteStatusIcon from "../FavoriteStatusIcon";
import { Character } from "../types/character.types";
import styles from "./CharacterCard.module.scss";
import Image from "next/image";
import CharacterContainer from "../CharacterContainer";

const CharacterCard = ({ character }: { character: Character }) => {
  return (
    <Link href="/character">
      <CharacterContainer>
        <div className={styles["character-card"]}>
          <Image
            alt="character image"
            src="/img/marvel_logo.svg"
            width={172.5}
            height={189.97}
            priority={false}
          />
          <div className={styles["separator"]} />
          <div className={styles["bottom-card"]}>
            <span className={styles["character-name"]}>ADAM WARLOK</span>
            <FavoriteStatusIcon isFavorited={false} onClick={() => {}} />
          </div>
        </div>
      </CharacterContainer>
    </Link>
  );
};

export default CharacterCard;
