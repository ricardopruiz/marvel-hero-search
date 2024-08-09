export type Comic = {
  id: number;
  digitalId: number;
  title: string;
  issueNumber: number;
  variantDescription: string;
  description: string;
  modified: string;
  isbn: string;
  upc: string;
  diamondCode: string;
  ean: string;
  issn: string;
  format: string;
  pageCount: number;
  textObjects: TextObject[];
  resourceURI: string;
  urls: URL[];
  series: Series;
  variants: any[];
  collections: any[];
  collectedIssues: any[];
  dates: DateElement[];
  prices: Price[];
  thumbnail: Thumbnail;
  images: Thumbnail[];
  creators: Creators;
  characters: Characters;
  stories: Stories;
  events: Characters;
};

type Characters = {
  available: number;
  collectionURI: string;
  items: Series[];
  returned: number;
};

type Series = {
  resourceURI: string;
  name: string;
};

type Creators = {
  available: number;
  collectionURI: string;
  items: CreatorsItem[];
  returned: number;
};

type CreatorsItem = {
  resourceURI: string;
  name: string;
  role: string;
};

type DateElement = {
  type: string;
  date: string;
};

type Thumbnail = {
  path: string;
  extension: string;
};

type Price = {
  type: string;
  price: number;
};

type Stories = {
  available: number;
  collectionURI: string;
  items: StoriesItem[];
  returned: number;
};

type StoriesItem = {
  resourceURI: string;
  name: string;
  type: string;
};

type TextObject = {
  type: string;
  language: string;
  text: string;
};

type URL = {
  type: string;
  url: string;
};
