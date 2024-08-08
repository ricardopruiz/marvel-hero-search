import { useEffect } from "react";

type UseBottomVisibleOptions<T extends HTMLElement> = {
  ref: React.RefObject<T>;
  offset?: number;
};

const useNearBottom = <T extends HTMLElement>(
  callback: () => void,
  { ref, offset = 0 }: UseBottomVisibleOptions<T>
) => {
  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const handleScroll = () => {
      const rect = node.getBoundingClientRect();
      const bottom = rect.bottom;
      const isNearBottom = bottom - offset <= window.innerHeight;

      if (isNearBottom) callback();
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [ref, callback, offset]);
};

export default useNearBottom;
