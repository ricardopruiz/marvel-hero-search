"use client";
import { useRef, useState } from "react";
import usePaginatedCharacters from "../components/hooks/usePaginatedCharacters";
import useNearBottom from "../components/hooks/useNearBottom";
import CharactersSearcher from "../components/CharactersSearcher";

import styles from "./page.module.scss";

const CHARACTERS_PER_PAGE = 2;

const Page = () => {
  const charactersListRef = useRef<HTMLDivElement>(null);

  const [searchText, setSearchText] = useState<string>("");
  const {
    characters = [],
    fetchNextPage,
    isFetchingNextPage,
    isLoading,
  } = usePaginatedCharacters(CHARACTERS_PER_PAGE, searchText);

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
