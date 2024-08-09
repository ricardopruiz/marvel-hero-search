import { Comic } from "@/types/comic.types";

const comicMock: Comic = {
  id: 11910,
  digitalId: 3625,
  title: "Universe X (2000) #6",
  issueNumber: 6,
  variantDescription: "",
  description: "this is a test description",
  modified: "2013-07-29T13:05:59-0400",
  isbn: "",
  upc: "",
  diamondCode: "",
  ean: "",
  issn: "",
  format: "Comic",
  pageCount: 0,
  textObjects: [
    {
      type: "issue_preview_text",
      language: "en-us",
      text: "While Moonknight battles the Assasins of Set-Thor, Captain Mar-Vell, the Hulk, and the X-Men are all mysteriously teleported to Egypt to watch the furious engagement! Plus, the final stand of the Fantastic Four.\n",
    },
  ],
  resourceURI: "http://gateway.marvel.com/v1/public/comics/11910",
  urls: [
    {
      type: "detail",
      url: "http://marvel.com/comics/issue/11910/universe_x_2000_6?utm_campaign=apiRef&utm_source=1b909cadd3f9ddf63af3e9980e730f76",
    },
    {
      type: "purchase",
      url: "http://comicstore.marvel.com/Universe-X-6/digital-comic/3625?utm_campaign=apiRef&utm_source=1b909cadd3f9ddf63af3e9980e730f76",
    },
    {
      type: "reader",
      url: "http://marvel.com/digitalcomics/view.htm?iid=3625&utm_campaign=apiRef&utm_source=1b909cadd3f9ddf63af3e9980e730f76",
    },
    {
      type: "inAppLink",
      url: "https://applink.marvel.com/issue/3625?utm_campaign=apiRef&utm_source=1b909cadd3f9ddf63af3e9980e730f76",
    },
  ],
  series: {
    resourceURI: "http://gateway.marvel.com/v1/public/series/2085",
    name: "Universe X (2000 - 2001)",
  },
  variants: [],
  collections: [
    {
      resourceURI: "http://gateway.marvel.com/v1/public/comics/5605",
      name: "UNIVERSE X VOL. 1 TPB (Trade Paperback)",
    },
  ],
  collectedIssues: [],
  dates: [
    {
      type: "onsaleDate",
      date: "2001-03-10T00:00:00-0500",
    },
    {
      type: "focDate",
      date: "-0001-11-30T00:00:00-0500",
    },
    {
      type: "unlimitedDate",
      date: "2008-01-31T00:00:00-0500",
    },
    {
      type: "digitalPurchaseDate",
      date: "2011-08-02T00:00:00-0400",
    },
  ],
  prices: [
    {
      type: "printPrice",
      price: 0,
    },
    {
      type: "digitalPurchasePrice",
      price: 1.99,
    },
  ],
  thumbnail: {
    path: "http://i.annihil.us/u/prod/marvel/i/mg/5/00/5bd1cac8eea3f",
    extension: "jpg",
  },
  images: [
    {
      path: "http://i.annihil.us/u/prod/marvel/i/mg/5/00/5bd1cac8eea3f",
      extension: "jpg",
    },
  ],
  creators: {
    available: 7,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/11910/creators",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/128",
        name: "Doug Braithwaite",
        role: "penciller",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/7843",
        name: "Todd Klein",
        role: "letterer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/267",
        name: "Jim Krueger",
        role: "writer",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/4174",
        name: "Mike Marts",
        role: "editor",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/13339",
        name: "Pete Pantazis",
        role: "colorist",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/523",
        name: "Bill Reinhold",
        role: "inker",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/creators/63",
        name: "Alex Ross",
        role: "penciller (cover)",
      },
    ],
    returned: 7,
  },
  characters: {
    available: 16,
    collectionURI:
      "http://gateway.marvel.com/v1/public/comics/11910/characters",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010699",
        name: "Aaron Stack",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1010370",
        name: "Alpha Flight",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009187",
        name: "Black Panther",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009224",
        name: "Captain Marvel (Mar-Vell)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1012512",
        name: "Gargoyle (Isaac Christians)",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1012923",
        name: "Immortus",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009368",
        name: "Iron Man",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009452",
        name: "Moon Knight",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009631",
        name: "Sue Storm",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009636",
        name: "Sunfire",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1011160",
        name: "Supreme Intelligence",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009652",
        name: "Thanos",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009662",
        name: "Thing",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009664",
        name: "Thor",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009683",
        name: "Uatu The Watcher",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/characters/1009710",
        name: "Wendigo",
      },
    ],
    returned: 16,
  },
  stories: {
    available: 2,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/11910/stories",
    items: [
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/25647",
        name: "Universe X (2000) #6",
        type: "cover",
      },
      {
        resourceURI: "http://gateway.marvel.com/v1/public/stories/25648",
        name: "Interior #25648",
        type: "interiorStory",
      },
    ],
    returned: 2,
  },
  events: {
    available: 0,
    collectionURI: "http://gateway.marvel.com/v1/public/comics/11910/events",
    items: [],
    returned: 0,
  },
};

export default comicMock;
