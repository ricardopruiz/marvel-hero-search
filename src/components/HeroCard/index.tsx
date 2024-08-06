import FavoriteStatusIcon from "../FavoriteStatusIcon";
import HeroContainer from "../HeroContainer";
import HeartIcon from "../Icons/HeartIcon";
import { Hero } from "../types/heroes";
import styles from "./HeroCard.module.css";
import Image from "next/image";

const HeroCard = ({ hero }: { hero: Hero }) => {
  return (
    <HeroContainer>
      <div className={styles.herocard}>
        <Image
          alt="hero image"
          src="/img/marvel_logo.svg"
          width={172.5}
          height={189.97}
        />
        <div className={styles.separator} />
        <div className={styles.bottomcard}>
          <span className={styles.heroname}>ADAM WARLOK</span>
          <FavoriteStatusIcon isFavorited={false} onClick={() => {}} />
        </div>
      </div>
    </HeroContainer>
  );
};

export default HeroCard;
