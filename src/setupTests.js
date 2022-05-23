global.fetch = (...args) =>
  import('cross-fetch').then(({ default: fetch }) => fetch(...args));
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import { characters } from './tests/fixtures/charactersData';
import { locations } from './tests/fixtures/locationsData';
import { episodes } from './tests/fixtures/episodesData';

const characterURL = 'https://rickandmortyapi.com/api/character';
const locationURL = 'https://rickandmortyapi.com/api/location';
const episodeURL = 'https://rickandmortyapi.com/api/episode';

const server = setupServer(
  rest.get(characterURL, (req, res, ctx) => res(ctx.json(characters))),
  rest.get(locationURL, (req, res, ctx) => res(ctx.json(locations))),
  rest.get(episodeURL, (req, res, ctx) => res(ctx.json(episodes)))
);

beforeAll(() => server.listen());
afterAll(() => server.close());
