"use client";

import ErrorMessage from "../components/ErrorMessage";

const GlobalError = () => {
  return (
    <html>
      <body>
        <ErrorMessage message="The page does not exist (404)" />
      </body>
    </html>
  );
};

export default GlobalError;
