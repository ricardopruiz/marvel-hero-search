import Link from "next/link";
import FavoriteStatusIcon from "../FavoriteStatusIcon";
import HeroContainer from "../HeroContainer";
import { Hero } from "../types/heroes";
import styles from "./HeroCard.module.css";
import Image from "next/image";

const HeroCard = ({ hero }: { hero: Hero }) => {
  return (
    <Link href="/hero">
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
    </Link>
  );
};

export default HeroCard;
