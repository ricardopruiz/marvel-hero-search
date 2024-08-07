"use client";

import SearchIcon from "../Icons/SearchIcon";
import styles from "./Searcher.module.scss";

type SearcherProps = {
  searchText: string;
  onChangeSearchText(element: string): void;
  results: number;
};

const Searcher = ({
  onChangeSearchText,
  results,
  searchText,
}: SearcherProps) => {
  const resultsFound = `${results || 0} ${
    results !== 1 ? "RESULTS" : "RESULT"
  }`;
  return (
    <div className={styles["input-wrapper"]}>
      <label className={styles["label"]}>
        <span>
          <SearchIcon className={styles["icon"]} />
        </span>
        <input
          className={styles["input"]}
          value={searchText}
          onChange={(event) => onChangeSearchText(event.target.value)}
          placeholder="SEARCH A CHARACTER..."
        />
      </label>
      <div className={styles["results-counter"]}>{resultsFound}</div>
    </div>
  );
};

export default Searcher;
