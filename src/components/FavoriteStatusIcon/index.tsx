import HeartEmptyIcon from "../Icons/HeartEmptyIcon";
import HeartIcon from "../Icons/HeartIcon";
import styles from "./FavoriteStatusIcon.module.css";

type FavoritedProps = {
  isFavorited: boolean;
  onClick(): void;
};

const FavoriteStatusIcon = ({ isFavorited, onClick }: FavoritedProps) => {
  return (
    <button className={styles.favoritebutton} onClick={onClick}>
      {isFavorited ? (
        <HeartIcon className={styles.favorited} />
      ) : (
        <HeartEmptyIcon className={styles.notfavorited} />
      )}
    </button>
  );
};

export default FavoriteStatusIcon;
