import styles from "./HeroContainer.module.css";

const HeroContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.herocontainer}>{children}</div>;
};

export default HeroContainer;
