import Image from "next/image";
import styles from "./ComicCard.module.scss";
import { Comic } from "../types/comic.types";

type ComicCardProps = {
  comic: Comic;
};

const ComicCard = ({ comic }: ComicCardProps) => {
  return (
    <div className={styles.comicContainer}>
      <Image
        className={styles.comicImage}
        alt={`The portrait of the comic ${comic.title}`}
        src={comic.image}
        width={500}
        height={500}
        priority={false}
      />
      <span className={styles.comicTitle}>{comic.title}</span>
      <span className={styles.comicYear}>{comic.year}</span>
    </div>
  );
};

export default ComicCard;
