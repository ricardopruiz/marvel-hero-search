import Image from "next/image";
import styles from "./ComicCard.module.scss";
import { Comic } from "../../types/comic.types";
import { buildThumbnailURL } from "@/utils/pathUtils";

type ComicCardProps = {
  comic: Comic;
};

const ComicCard = ({ comic }: ComicCardProps) => {
  const saleDate = comic.dates.find((date) => date.type === "onsaleDate");
  const yearComic = new Date(saleDate?.date!).getFullYear();

  return (
    <div className={styles["comic-container"]}>
      <Image
        className={styles["comic-image"]}
        alt={`The portrait of the comic ${comic.title}`}
        src={buildThumbnailURL(comic.thumbnail)}
        width={500}
        height={500}
        priority={false}
      />
      <span className={styles["comic-title"]}>{comic.title}</span>
      <span className={styles["comic-year"]}>{yearComic}</span>
    </div>
  );
};

export default ComicCard;
