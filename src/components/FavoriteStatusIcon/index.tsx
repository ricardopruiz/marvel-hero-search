import HeartEmptyIcon from "../Icons/HeartEmptyIcon";
import HeartIcon from "../Icons/HeartIcon";
import styles from "./FavoriteStatusIcon.module.css";

type FavoritedProps = {
  isFavorited: boolean;
  onClick(): void;
  size?: "small" | "big";
};

const FavoriteStatusIcon = ({
  isFavorited,
  onClick,
  size = "small",
}: FavoritedProps) => {
  return (
    <button
      className={`${styles.favoritebutton} ${
        size === "small" ? styles.sizesmall : styles.sizebig
      }`}
      onClick={onClick}
    >
      {isFavorited ? (
        <HeartIcon className={styles.favorited} />
      ) : (
        <HeartEmptyIcon className={styles.notfavorited} />
      )}
    </button>
  );
};

export default FavoriteStatusIcon;
