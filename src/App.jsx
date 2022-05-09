import { Link, Route, Switch } from 'react-router-dom';
import Characters from './views/Characters';
import Episodes from './views/Episodes';
import Locations from './views/Locations';

export default function App() {
  return (
    <>
      <header>
        <h1>Welcome to the Rick and Morty API explorer</h1>
        <nav>
          <ul>
            <li>
              <Link to="/characters">character list</Link>
            </li>
            <li>
              <Link to="/locations">locations</Link>
            </li>
            <li>
              <Link to="/episodes">episodes</Link>
            </li>
          </ul>
        </nav>
      </header>
      <Switch>
        <Route path="/characters">
          <Characters />
        </Route>
        <Route path="/locations">
          <Locations />
        </Route>
        <Route path="/episodes">
          <Episodes />
        </Route>
      </Switch>
    </>
  );
}
