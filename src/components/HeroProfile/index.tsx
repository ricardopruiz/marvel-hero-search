import Image from "next/image";
import HeroContainer from "../HeroContainer";
import FavoriteStatusIcon from "../FavoriteStatusIcon";
import styles from "./HeroProfile.module.scss";
import SectionTitle from "../SectionTitle";
import ComicList from "../ComicList";

type HeroProfileProps = {
  image: string;
  name: string;
  description?: string;
  isFavorited: boolean;
  setIsFavorited(): void;
};

const HeroProfile = ({
  image,
  isFavorited,
  name,
  setIsFavorited,
  description,
}: HeroProfileProps) => {
  return (
    <>
      <HeroContainer>
        <div className={styles.profileBasicInfo}>
          <Image
            className={styles.profileImage}
            alt={`Profile image of character ${name}`}
            src={image}
            height={500}
            width={500}
            priority={false}
          />
          <div className={styles.infocontainer}>
            <div className={styles.basicinfo}>
              <span className={styles.heroname}>{name.toUpperCase()}</span>
              <FavoriteStatusIcon
                isFavorited={isFavorited}
                onClick={setIsFavorited}
                size="big"
              />
            </div>
            <span className={styles.desc}>{description}</span>
          </div>
        </div>
      </HeroContainer>
      <div className={styles.comicsection}>
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

export default HeroProfile;
