import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {
  fetchLocationCharacters,
  fetchRickAndMorty,
} from '../services/fetchRickAndMorty';
import Characters from '../views/Characters';

export default function LocationDetails() {
  // const { url, path } = useRouteMatch();
  const [location, setLocation] = useState({});
  const [characters, setCharacters] = useState([]);
  const [locations, setLocations] = useState([]);
  const [loading, setLoading] = useState(true);
  const { locationId } = useParams();

  useEffect(() => {
    setLoading(true);
    fetchRickAndMorty()
      .then((response) => response.locations)
      .then((locations) =>
        locations.find((location) => location.id === Number(locationId))
      )
      .then((currLocation) => {
        setLocation(currLocation);
        console.log(currLocation);
        return fetchLocationCharacters(currLocation.residents);
      })
      .then((locationCharacters) => {
        console.log('locationCharacters :>> ', locationCharacters.length);
        return setCharacters(locationCharacters);
      })
      .catch((error) => console.log(error, 'line 28'))
      .finally(() => setLoading(false));
  }, [locationId]);

  return (
    <>
      {loading ? (
        <p>loading</p>
      ) : (
        <div className="location-details">
          <h1>LocationDetails</h1>
          <p>
            <strong>{location.name}</strong>
          </p>
          <ul>
            <li>
              <strong>Type: </strong>
              {location.type}
            </li>
            <li>
              <strong>Dimension: </strong>
              {location.dimension}
            </li>
          </ul>
          <h4>Residents:</h4>
          <Characters characters={characters} fromLocation={true} />
        </div>
      )}
    </>
  );
}
