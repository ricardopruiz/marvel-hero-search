"use client";

import { useContext } from "react";
import HeartEmptyIcon from "../Icons/HeartEmptyIcon";
import HeartIcon from "../Icons/HeartIcon";
import styles from "./FavoriteStatusIcon.module.css";
import { CharactersContext } from "../contexts/CharactersContext";
import { Character } from "../types/character.types";

type FavoritedProps = {
  character: Character;
  size?: "small" | "big";
};

const FavoriteStatusIcon = ({ character, size = "small" }: FavoritedProps) => {
  const {
    addFavoriteCharacter,
    removeFavoriteCharacter,
    isCharacterFavorited,
  } = useContext(CharactersContext);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();

    isCharacterFavorited(character)
      ? removeFavoriteCharacter(character)
      : addFavoriteCharacter(character);
  };

  return (
    <button
      className={`${styles["favorited-button"]} ${
        size === "small" ? styles["size-small"] : styles["size-big"]
      }`}
      onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) =>
        handleClick(e)
      }
    >
      {isCharacterFavorited(character) ? (
        <HeartIcon className={styles["favorited"]} />
      ) : (
        <HeartEmptyIcon className={styles["not-favorited"]} />
      )}
    </button>
  );
};

export default FavoriteStatusIcon;
