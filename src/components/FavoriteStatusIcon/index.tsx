"use client";

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
      className={`${styles["favorited-button"]} ${
        size === "small" ? styles["size-small"] : styles["size-big"]
      }`}
      onClick={onClick}
    >
      {isFavorited ? (
        <HeartIcon className={styles["favorited"]} />
      ) : (
        <HeartEmptyIcon className={styles["not-favorited"]} />
      )}
    </button>
  );
};

export default FavoriteStatusIcon;
