"use client";

import CharacterProfile from "../components/CharacterProfile";

const Page = () => {
  return (
    <div>
      <CharacterProfile
        image="/img/marvel_logo.svg"
        isFavorited={false}
        name="adam warlock"
        setIsFavorited={() => {}}
        description="Created by the Enclave to be part of a race of super humans who would abolish war, illness, and crime, Adam Warlock is a unique being who uses his immense and formidable powers to safeguard the universe."
      />
    </div>
  );
};

export default Page;
