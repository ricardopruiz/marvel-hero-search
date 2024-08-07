import styles from "./Topbar.module.css";
import Image from "next/image";
import FavoritedHeroes from "../FavoritedHeroes";
import Link from "next/link";

const Topbar = () => {
  return (
    <header className={styles.topbar}>
      <Link href="/">
        <Image
          className={styles.logo}
          alt="topbar marvel logo"
          src="/img/marvel_logo.svg"
          width={130}
          height={52}
          priority={false}
        />
      </Link>
      <FavoritedHeroes />
    </header>
  );
};

export default Topbar;
