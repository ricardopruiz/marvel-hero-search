import { useState, useEffect, useRef, Dispatch, SetStateAction } from "react";

function useDebouncedState<T>(
  initialValue: T,
  delay: number
): [T, Dispatch<SetStateAction<T>>, T] {
  const [state, setState] = useState<T>(initialValue);
  const [debouncedState, setDebouncedState] = useState<T>(initialValue);
  const timeoutRef = useRef<number | NodeJS.Timeout>();

  useEffect(() => {
    if (timeoutRef.current !== undefined) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setDebouncedState(state);
    }, delay);

    return () => {
      if (timeoutRef.current !== undefined) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [state, delay]);

  return [state, setState, debouncedState];
}

export default useDebouncedState;
