import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function CharacterCard({ character }) {
  const { url, path } = useRouteMatch();
  return (
    <div>
      <Link
        to={`${url}/${character.id}`}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <p>{character.name}</p>
        <img src={character.image} alt="" />
      </Link>
    </div>
  );
}
