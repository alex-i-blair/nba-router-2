import React, { useState, useEffect } from 'react';
import { Route } from 'react-router-dom';
import { Link, useRouteMatch } from 'react-router-dom';
import LocationCard from '../components/LocationCard';
import LocationDetails from './LocationDetails';
import { fetchLocationCharacters } from '../services/fetchRickAndMorty';

export default function Locations({ locations }) {
  const { url, path } = useRouteMatch();

  return (
    <>
      <div>
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
      <section>
        <Route path={`${path}/:locationId`}>
          <LocationDetails locations={locations} />
        </Route>
      </section>
    </>
  );
}
