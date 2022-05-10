import { Link, Route, Switch } from 'react-router-dom';
import Characters from './views/Characters';
import Episodes from './views/Episodes';
import { useEffect, useState } from 'react';
import Locations from './views/Locations';
import { useRouteMatch, useLocation } from 'react-router-dom';
import { fetchRickAndMorty } from './services/fetchRickAndMorty';

export default function App() {
  const [episodes, setEpisodes] = useState([]);
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  useEffect(() => {
    const fetch = async () => {
      const { episodes, characters, locations } = await fetchRickAndMorty();
      setEpisodes(episodes);
      setCharacters(characters);
      setLocations(locations);
    };
    fetch();
  }, []);
  console.log('characters', characters);
  return (
    <>
      <p></p>
      <header>
        <h1>Welcome to the Rick and Morty API explorer</h1>
        <nav>
          <ul>
            <li>
              <Link to="/character">character list</Link>
            </li>
            <li>
              <Link to="/location">locations</Link>
            </li>
            <li>
              <Link to="/episode">episodes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/character">
          <Characters characters={characters} />
        </Route>
        <Route path="/location">
          <Locations locations={locations} />
        </Route>
        <Route path="/episode">
          <Episodes episodes={episodes} />
        </Route>
      </Switch>
    </>
  );
}
