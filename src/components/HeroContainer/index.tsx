import styles from "./HeroContainer.module.scss";

const HeroContainer = ({ children }: { children: React.ReactNode }) => {
  return <div className={styles.herocontainer}>{children}</div>;
};

export default HeroContainer;
