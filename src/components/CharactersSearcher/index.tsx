import { Dispatch, ForwardedRef, forwardRef, SetStateAction } from "react";
import CharactersList from "../CharactersList";
import Loading from "../Loading";
import Searcher from "../Searcher";
import { Character } from "../../types/character.types";
import styles from "./CharactersSearcher.module.scss";
import ErrorMessage from "../ErrorMessage";

type CharactersSearcherProps = {
  characters: Character[];
  setSearchValue: Dispatch<SetStateAction<string>>;
  searchValue: string;
  isLoading?: boolean;
  isLoadingNextPage?: boolean;
  charactersListRef?: ForwardedRef<HTMLDivElement>;
  isError?: boolean;
  error?: string;
};

const CharactersSearcher = ({
  characters,
  searchValue,
  setSearchValue,
  isLoading = false,
  isLoadingNextPage = false,
  charactersListRef = null,
  isError = false,
  error = "",
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
      {isError && <ErrorMessage message={error}></ErrorMessage>}
    </div>
  );
};

CharactersSearcher.displayName = "CharactersSearcher";

export default CharactersSearcher;
