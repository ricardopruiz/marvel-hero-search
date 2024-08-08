"use client";
import styles from "./FavoritedCharacters.module.scss";
import HeartIcon from "../Icons/HeartIcon";

const FavoritedCharacters = () => {
  return (
    <div className={styles["favorited-characters"]}>
      <HeartIcon className={styles["favorited-characters--heart-container"]} />
      <span>0</span>
    </div>
  );
};

export default FavoritedCharacters;
