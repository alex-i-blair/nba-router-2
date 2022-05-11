import React, { useState, useEffect } from 'react';
import { Link, useRouteMatch, Route } from 'react-router-dom';
import LocationDetails from '../views/LocationDetails';

export default function LocationCard({ location }) {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <Link
        to={`${url}/${location.id}`}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <p>{location.name}</p>
      </Link>
    </div>
  );
}
