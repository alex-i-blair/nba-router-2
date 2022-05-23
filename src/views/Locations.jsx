import { Route, useRouteMatch } from 'react-router-dom';
import LocationCard from '../components/LocationCard';
import LocationDetails from './LocationDetails';

export default function Locations({ locations }) {
  const { path } = useRouteMatch();

  return (
    <div style={{ display: 'flex' }}>
      <div>
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <section>
        <Route path={`${path}/:locationId`}>
          <LocationDetails />
        </Route>
      </section>
    </div>
  );
}
