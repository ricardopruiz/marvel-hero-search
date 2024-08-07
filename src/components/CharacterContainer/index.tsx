import styles from "./CharacterContainer.module.scss";

const CharacterContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles["character-container"]}>{children}</div>;
};

export default CharacterContainer;
