import React from 'react';
import { Link } from 'react-router-dom';
import LocationCard from '../components/LocationCard';

export default function Locations({ locations }) {
  return (
    <>
      <div>
        {locations.map((location) => (
          <LocationCard key={location.id} location={location} />
        ))}
      </div>
    </>
  );
}
