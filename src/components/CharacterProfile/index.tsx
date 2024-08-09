"use client";
import Image from "next/image";
import CharacterContainer from "../CharacterContainer";
import FavoriteStatusIcon from "../FavoriteStatusIcon";
import styles from "./CharacterProfile.module.scss";
import SectionTitle from "../SectionTitle";
import ComicList from "../ComicList";
import { Character } from "../../types/character.types";
import { buildThumbnailURL } from "@/utils/pathUtils";
import useCharacterComic from "../../hooks/useCharacterComic";
import Loading from "../Loading";
import ErrorMessage from "../ErrorMessage";

type CharacterProfileProps = {
  character: Character;
};

const CharacterProfile = ({ character }: CharacterProfileProps) => {
  const { comics, isLoading, error, isError } = useCharacterComic(character.id);
  return (
    <div className={styles["profile-wrapper"]}>
      <CharacterContainer size="big">
        <div className={styles["profile-basic-info"]}>
          <Image
            className={styles["profile-image"]}
            alt={`Profile image of ${character.name}`}
            src={buildThumbnailURL(character.thumbnail)}
            height={500}
            width={500}
            priority
          />
          <div className={styles["info-container"]}>
            <div className={styles["basic-info"]}>
              <span className={styles["character-name"]}>
                {character.name.toUpperCase()}
              </span>
              <FavoriteStatusIcon character={character} size="big" />
            </div>
            <span className={styles["desc"]}>{character.description}</span>
          </div>
        </div>
      </CharacterContainer>
      <div className={styles["comic-section"]}>
        <SectionTitle>COMICS</SectionTitle>
        {isLoading && <Loading type="innerSpinner" />}
        {!isLoading && <ComicList comicList={comics} />}
        {isError && <ErrorMessage message={error.message}></ErrorMessage>}
      </div>
    </div>
  );
};

export default CharacterProfile;
