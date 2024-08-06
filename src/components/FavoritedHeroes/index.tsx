"use client";
import styles from "./FavoritedHeroes.module.css";
import HeartIcon from "../Icons/HeartIcon";

const FavoritedHeroes = () => {
  return (
    <div className={styles["favorited-heroes"]}>
      <HeartIcon className={styles["favorited-heroes--heart-container"]} />
      <span>0</span>
    </div>
  );
};

export default FavoritedHeroes;
