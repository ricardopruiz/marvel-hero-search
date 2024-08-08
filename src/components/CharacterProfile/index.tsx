"use client";
import Image from "next/image";
import CharacterContainer from "../CharacterContainer";
import FavoriteStatusIcon from "../FavoriteStatusIcon";
import styles from "./CharacterProfile.module.scss";
import SectionTitle from "../SectionTitle";
import ComicList from "../ComicList";
import { Character } from "../types/character.types";
import { buildThumbnailURL } from "@/utils/pathUtils";
import { useState } from "react";
import useCharacterComic from "../hooks/useCharacterComic";
import Loading from "../Loading";

type CharacterProfileProps = {
  character: Character;
};

const CharacterProfile = ({ character }: CharacterProfileProps) => {
  const { comics, isLoading } = useCharacterComic(character.id);
  const [isFavorited, setIsFavorited] = useState(false);
  return (
    <>
      <CharacterContainer size="big">
        <div className={styles["profile-basic-info"]}>
          <Image
            className={styles["profile-image"]}
            alt={`Profile image of ${character.name}`}
            src={buildThumbnailURL(character.thumbnail)}
            height={500}
            width={500}
            priority={false}
          />
          <div className={styles["info-container"]}>
            <div className={styles["basic-info"]}>
              <span className={styles["character-name"]}>
                {character.name.toUpperCase()}
              </span>
              <FavoriteStatusIcon
                isFavorited={isFavorited}
                onClick={() => setIsFavorited}
                size="big"
              />
            </div>
            <span className={styles["desc"]}>{character.description}</span>
          </div>
        </div>
      </CharacterContainer>
      <div className={styles["comic-section"]}>
        <SectionTitle>COMICS</SectionTitle>
        {isLoading && <Loading type="innerSpinner" />}
        {!isLoading && <ComicList comicList={comics} />}
      </div>
    </>
  );
};

export default CharacterProfile;
