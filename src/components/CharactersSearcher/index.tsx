import { Dispatch, ForwardedRef, forwardRef, SetStateAction } from "react";
import CharactersList from "../CharactersList";
import Loading from "../Loading";
import Searcher from "../Searcher";
import { Character } from "../../types/character.types";
import styles from "./CharactersSearcher.module.scss";

type CharactersSearcherProps = {
  characters: Character[];
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
  isLoading?: boolean;
  isLoadingNextPage?: boolean;
  charactersListRef?: ForwardedRef<HTMLDivElement>;
};

const CharactersSearcher = ({
  characters,
  searchValue,
  setSearchValue,
  isLoading = false,
  isLoadingNextPage = false,
  charactersListRef = null,
}: CharactersSearcherProps) => {
  return (
    <div className={styles["characters-searcher-wrapper"]}>
      <Searcher
        onChangeSearchText={setSearchValue}
        results={characters.length}
        searchText={searchValue}
      />
      {!isLoading && (
        <CharactersList characters={characters} ref={charactersListRef} />
      )}
      {isLoading && <Loading type="pageSpinner" />}
      {isLoadingNextPage && <Loading type="innerSpinner" />}
    </div>
  );
};

CharactersSearcher.displayName = "CharactersSearcher";

export default CharactersSearcher;
