import React, { useState, useEffect } from 'react';
import { useParams, useRouteMatch } from 'react-router-dom';
import { fetchLocationCharacters } from '../services/fetchRickAndMorty';

export default function LocationDetails({ locations }) {
  const { locationId } = useParams();
  // const { url, path } = useRouteMatch();
  const [location, setLocation] = useState({});
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    setLocation({});
  }, []);

  useEffect(() => {
    const currLocation = locations.find(
      (location) => location.id === Number(locationId)
    );
    setLocation(currLocation);
  }, [locationId]);

  useEffect(() => {
    const fetchIt = async () => {
      if (!locationId) return;
      if (!location.residents) return;
      const locationCharacters = await fetchLocationCharacters(
        location.residents
      );
      setCharacters(locationCharacters);
    };
    fetchIt();
  }, [location]);
  console.log(location);
  return (
    <>
      <div>LocationDetails</div>
      <p>{/* <strong>{location.name}</strong> */}</p>
    </>
  );
}
