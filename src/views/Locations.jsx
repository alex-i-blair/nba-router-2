import React from 'react';
import { Link } from 'react-router-dom';

export default function Locations({ locations }) {
  return (
    <>
      <div>
        {locations.map((location) => (
          <p key={location.id}>{location.name}</p>
        ))}
      </div>
    </>
  );
}
