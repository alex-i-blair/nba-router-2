export const fetchRickAndMorty = async (path) => {
  const res = await fetch(`https://rickandmortyapi.com/api${path}`);
  const { results } = await res.json();
  return results;
};
