import styles from "./SectionTitle.module.css";

type SectionTitleProps = {
  children: React.ReactNode;
};

const SectionTitle = ({ children }: SectionTitleProps) => {
  return <h2 className={styles.sectiontitle}>{children}</h2>;
};

export default SectionTitle;
