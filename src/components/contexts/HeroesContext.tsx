import { createContext, useState } from "react";
import { HeroesContextData } from "./HeroesContext.types";
import { Hero } from "../types/heroes";

const heroesContextInitialState: HeroesContextData = {
  favoritedHeroes: [],
  addFavoriteHero: (hero: Hero) => {},
  removeFavoriteHero: (hero: Hero) => {},
};

export const HeroesContext = createContext<HeroesContextData>(
  heroesContextInitialState
);

export const HeroesContextProvider = ({ children }: any) => {
  const [favoritedHeroes, setFavoritedHeroes] = useState<Hero[]>([]);

  const addFavoriteHero = (hero: Hero) => {
    const isAlreadyFavorited = favoritedHeroes.find(
      (favoritedHero) => favoritedHero.id === hero.id
    );
    if (isAlreadyFavorited)
      setFavoritedHeroes((oldFavoriteHeroes) => [...oldFavoriteHeroes, hero]);
  };

  const removeFavoriteHero = (hero: Hero) => {
    setFavoritedHeroes((oldFavorites) =>
      oldFavorites.filter((favoritedHero) => favoritedHero.id === hero.id)
    );
  };

  return (
    <HeroesContext.Provider
      value={{
        favoritedHeroes,
        addFavoriteHero,
        removeFavoriteHero,
      }}
    >
      {children}
    </HeroesContext.Provider>
  );
};
