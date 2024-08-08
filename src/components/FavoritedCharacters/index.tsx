"use client";
import styles from "./FavoritedCharacters.module.scss";
import HeartIcon from "../Icons/HeartIcon";
import { CharactersContext } from "../contexts/CharactersContext";
import { useContext } from "react";

const FavoritedCharacters = () => {
  const { favoritedCharacters } = useContext(CharactersContext);
  return (
    <div className={styles["favorited-characters"]}>
      <HeartIcon className={styles["favorited-characters--heart-container"]} />
      <span>{favoritedCharacters.length}</span>
    </div>
  );
};

export default FavoritedCharacters;
