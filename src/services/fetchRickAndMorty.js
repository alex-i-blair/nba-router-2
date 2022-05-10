export const fetchRickAndMorty = async () => {
  const characterFetch = await (
    await fetch('https://rickandmortyapi.com/api/character')
  ).json();
  const episodeFetch = await (
    await fetch('https://rickandmortyapi.com/api/episode')
  ).json();
  const locationFetch = await (
    await fetch('https://rickandmortyapi.com/api/location')
  ).json();
  const results = {
    characters: characterFetch.results,
    episodes: episodeFetch.results,
    locations: locationFetch.results,
  };
  return results;
};
