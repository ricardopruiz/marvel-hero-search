"use client";

import { HeroesContextProvider } from "../contexts/HeroesContext";

const Providers = ({ children }: any) => (
  <HeroesContextProvider>{children}</HeroesContextProvider>
);

export default Providers;
