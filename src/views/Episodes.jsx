import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRickAndMorty } from '../services/fetchRickAndMorty';
import { useRouteMatch, useLocation } from 'react-router-dom';

export default function Episodes({ episodes }) {
  return (
    <>
      <div>
        {episodes.map((episode) => (
          <p key={episode.id}>{episode.name}</p>
        ))}
      </div>
    </>
  );
}
