import Image from "next/image";
import CharacterContainer from "../CharacterContainer";
import FavoriteStatusIcon from "../FavoriteStatusIcon";
import styles from "./CharacterProfile.module.scss";
import SectionTitle from "../SectionTitle";
import ComicList from "../ComicList";

type CharacterProfileProps = {
  image: string;
  name: string;
  description?: string;
  isFavorited: boolean;
  setIsFavorited(): void;
};

const CharacterProfile = ({
  image,
  isFavorited,
  name,
  setIsFavorited,
  description,
}: CharacterProfileProps) => {
  return (
    <>
      <CharacterContainer>
        <div className={styles["profile-basic-info"]}>
          <Image
            className={styles["profile-image"]}
            alt={`Profile image of character ${name}`}
            src={image}
            height={500}
            width={500}
            priority={false}
          />
          <div className={styles["info-container"]}>
            <div className={styles["basic-info"]}>
              <span className={styles["character-name"]}>
                {name.toUpperCase()}
              </span>
              <FavoriteStatusIcon
                isFavorited={isFavorited}
                onClick={setIsFavorited}
                size="big"
              />
            </div>
            <span className={styles["desc"]}>{description}</span>
          </div>
        </div>
      </CharacterContainer>
      <div className={styles["comic-section"]}>
        <SectionTitle>COMICS</SectionTitle>
        <ComicList
          comicList={[
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
            { image: "/img/marvel_logo.svg", title: "Comic 1", year: "2025" },
          ]}
        />
      </div>
    </>
  );
};

export default CharacterProfile;
