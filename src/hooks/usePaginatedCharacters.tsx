import { useInfiniteQuery } from "@tanstack/react-query";
import { getPaginatedCharacters } from "../api/characters";
import { Character } from "../types/character.types";

const usePaginatedCharacters = (
  charactersPerPage: number,
  nameStartsWith?: string
) => {
  const query = useInfiniteQuery({
    queryKey: ["characters", charactersPerPage, nameStartsWith],
    queryFn: ({ pageParam = 1 }) => {
      return getPaginatedCharacters({
        charactersPerPage,
        page: pageParam,
        nameStartsWith,
      });
    },
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      const charactersLoadedAmount = allPages
        .map((page) => page.results)
        .flat().length;

      const hasNextPage = charactersLoadedAmount < lastPage.total;

      if (!hasNextPage) return undefined;

      return allPages.length + 1;
    },
  });

  const characters = query.data?.pages
    .map((page) => page.results)
    .flat() as Character[];

  return {
    ...query,
    fetchNextPage: () => {
      if (!query.isFetchingNextPage) {
        query.fetchNextPage();
      }
    },
    characters,
  };
};

export default usePaginatedCharacters;
