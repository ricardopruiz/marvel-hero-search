import { Thumbnail } from "../types/character.types";

export const buildThumbnailURL = (thumbnail: Thumbnail) => {
  const { path, extension } = thumbnail;
  return `${path}.${extension}`;
};
