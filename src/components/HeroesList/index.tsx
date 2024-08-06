import HeroCard from "../HeroCard";
import { Hero } from "../types/heroes";
import styles from "./HeroesList.module.css";

type HeroesListProps = {
  heroes: Hero[];
};

const HeroesList = ({ heroes }: HeroesListProps) => {
  return (
    <div className={styles.heroeslist}>
      {heroes.map((hero) => (
        <HeroCard key={hero.id} hero={hero} />
      ))}
    </div>
  );
};

export default HeroesList;
