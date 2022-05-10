import { Link, Route, Switch } from 'react-router-dom';
import Characters from './views/Characters';
import Episodes from './views/Episodes';
import { useEffect, useState } from 'react';
import Locations from './views/Locations';
import { useRouteMatch } from 'react-router-dom';
import { fetchRickAndMorty } from './services/fetchRickAndMorty';

export default function App() {
  const { url, path } = useRouteMatch();

  useEffect(() => {
    const fetch = async () => {
      fetchRickAndMorty(path);
    };
  }, [input]);
  return (
    <>
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
          <Characters />
        </Route>
        <Route path="/location">
          <Locations />
        </Route>
        <Route path="/episode">
          <Episodes />
        </Route>
      </Switch>
    </>
  );
}
