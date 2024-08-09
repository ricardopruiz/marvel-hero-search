"use client";

import ErrorMessage from "../components/ErrorMessage";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div>
      <ErrorMessage message={`Somethin went wrong: ${error.message}`} />
      <button onClick={() => reset()}>Try again</button>
    </div>
  );
}
