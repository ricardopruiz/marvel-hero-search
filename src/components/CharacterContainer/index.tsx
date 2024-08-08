import styles from "./CharacterContainer.module.scss";

type CharacterContainerProps = {
  children: React.ReactNode;
  size?: "small" | "big";
};

const CharacterContainer = ({
  children,
  size = "small",
}: CharacterContainerProps) => {
  const clipSize =
    size === "small"
      ? "caracter-container--small-clip"
      : "caracter-container--big-clip";

  return (
    <div className={`${styles["character-container"]} ${styles[clipSize]}`}>
      {children}
    </div>
  );
};

export default CharacterContainer;
