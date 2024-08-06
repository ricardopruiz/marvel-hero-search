import styles from "./Topbar.module.css";
import Image from "next/image";
import FavoritedHeroes from "../FavoritedHeroes";

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <Image
        className={styles.logo}
        alt="topbar marvel logo"
        src="/img/marvel_logo.svg"
        width={130}
        height={52}
      />
      <FavoritedHeroes />
    </header>
  );
};

export default Topbar;
