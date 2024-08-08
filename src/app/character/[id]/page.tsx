import { buildThumbnailURL } from "@/utils/pathUtils";
import CharacterProfile from "../../../components/CharacterProfile";
import { getCharacter } from "@/api/characters";

type CharacterPageProps = {
  params: { id: string };
};

const CharacterPage = async ({ params: { id } }: CharacterPageProps) => {
  const character = await getCharacter(Number(id));

  return <CharacterProfile character={character} />;
};

export default CharacterPage;
