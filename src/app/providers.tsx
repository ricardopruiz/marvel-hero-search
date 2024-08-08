"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { CharactersContextProvider } from "../components/contexts/CharactersContext";

const queryClient = new QueryClient();

const Providers = ({ children }: any) => (
  <QueryClientProvider client={queryClient}>
    <CharactersContextProvider>{children}</CharactersContextProvider>
  </QueryClientProvider>
);

export default Providers;
