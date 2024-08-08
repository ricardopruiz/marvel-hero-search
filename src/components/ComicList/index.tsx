import ComicCard from "../ComicCard";
import { Comic } from "../../types/comic.types";
import styles from "./ComicList.module.scss";

type ComicListProps = {
  comicList: Comic[];
};

const ComicList = ({ comicList }: ComicListProps) => {
  return (
    <div className={styles["comics-wrapper"]}>
      {comicList.map((comic, index) => (
        <ComicCard key={`characted-comic-${index}`} comic={comic} />
      ))}
    </div>
  );
};

export default ComicList;
