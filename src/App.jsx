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
