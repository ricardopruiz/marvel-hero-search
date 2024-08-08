import md5 from "md5";

const BASE_URL = "https://gateway.marvel.com/v1/public";

const requestMarvel = (
  url: string,
  params: Record<string, string | undefined>
) => {
  const timeNow = Date.now();
  const PRIVATE_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PRIVATE_KEY;
  const PUBLIC_KEY = process.env.NEXT_PUBLIC_MARVEL_API_PUBLIC_KEY;

  const hash = md5(timeNow + PRIVATE_KEY! + PUBLIC_KEY!);

  const filteredParams = Object.fromEntries(
    Object.entries(params).filter(
      ([, value]) => value !== undefined && value !== ""
    )
  );

  const searchParams = new URLSearchParams({
    ts: timeNow.toString()!,
    apikey: PUBLIC_KEY!,
    hash: hash,
    ...filteredParams,
  });

  const urlWithParams = `${BASE_URL}${url}?${searchParams.toString()}`;

  return fetch(urlWithParams, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then(({ data }) => data);
};

export default requestMarvel;
