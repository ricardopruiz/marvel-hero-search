"use client";
import { useRef, useState } from "react";
import usePaginatedCharacters from "../hooks/usePaginatedCharacters";
import useNearBottom from "../hooks/useNearBottom";
import CharactersSearcher from "../components/CharactersSearcher";

import styles from "./page.module.scss";
import useDebouncedState from "../hooks/useDebouncedState";

const CHARACTERS_PER_PAGE = 50;

const Page = () => {
  const charactersListRef = useRef<HTMLDivElement>(null);

  const [searchText, setSearchText, debouncedSearchText] = useDebouncedState(
    "",
    500
  );

  const {
    characters = [],
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = usePaginatedCharacters(CHARACTERS_PER_PAGE, debouncedSearchText);

  useNearBottom(fetchNextPage, { ref: charactersListRef, offset: 1000 });

  return (
    <div className={styles["page-container"]}>
      <CharactersSearcher
        characters={characters}
        searchValue={searchText}
        setSearchValue={setSearchText}
        isLoading={isLoading}
        isLoadingNextPage={isFetchingNextPage}
        charactersListRef={charactersListRef}
      />
    </div>
  );
};

export default Page;
