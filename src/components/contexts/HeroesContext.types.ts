import { Dispatch, SetStateAction } from "react";
import { Hero } from "../types/hero.types";

export type HeroesContextData = {
  favoritedHeroes: Hero[];
  addFavoriteHero(hero: Hero): void;
  removeFavoriteHero(hero: Hero): void;
};
