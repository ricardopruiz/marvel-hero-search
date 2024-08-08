"use client";
import { useContext, useEffect, useState } from "react";
import CharactersSearcher from "../../components/CharactersSearcher";
import styles from "../page.module.scss";
import { CharactersContext } from "../../components/contexts/CharactersContext";
import SectionTitle from "../../components/SectionTitle";
import { Character } from "../../types/character.types";

const Favorited = () => {
  const { favoritedCharacters } = useContext(CharactersContext);

  const [filteredCharacters, setFilteredCharacters] = useState<Character[]>([]);

  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    setFilteredCharacters(favoritedCharacters);

    if (searchText === "") {
      setFilteredCharacters(favoritedCharacters);
    } else {
      setFilteredCharacters((oldFilteredCharacters) =>
        oldFilteredCharacters.filter((character) =>
          character.name
            .toLocaleLowerCase()
            .startsWith(searchText.toLowerCase())
        )
      );
    }
  }, [searchText, favoritedCharacters]);

  return (
    <div className={styles["page-container"]}>
      <div className={styles["page-title"]}>
        <SectionTitle>Favorites</SectionTitle>
      </div>
      <CharactersSearcher
        characters={filteredCharacters}
        searchValue={searchText}
        setSearchValue={setSearchText}
      />
    </div>
  );
};

export default Favorited;
