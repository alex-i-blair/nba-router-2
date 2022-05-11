import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function EpisodeCard({ episode }) {
  const { url, path } = useRouteMatch();

  return (
    <div>
      <Link
        to={`${url}/${episode.id}`}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <p>{episode.name}</p>
      </Link>
    </div>
  );
}
