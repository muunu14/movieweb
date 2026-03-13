export const fetcher = async (endpoint: string) => {
  if (!process.env.NEXT_PUBLIC_MOVIE_KEY) {
    throw new Error("NEXT_PUBLIC_MOVIE_KEY is not defined");
  }

  const response = await fetch(endpoint, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_MOVIE_KEY}`,
    },
    cache: "force-cache",
  });

  if (!response.ok) {
    throw new Error(`Fetch error: ${response.status} ${response.statusText}`);
  }

  return await response.json();
};
