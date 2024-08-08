import { Thumbnail } from "..//components/types/character.types";

export const buildThumbnailURL = (thumbnail: Thumbnail) => {
  const { path, extension } = thumbnail;
  return `${path}.${extension}`;
};
