"use client";

import { CharactersContextProvider } from "../components/contexts/CharactersContext";

const Providers = ({ children }: any) => (
  <CharactersContextProvider>{children}</CharactersContextProvider>
);

export default Providers;
