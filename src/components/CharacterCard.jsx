import React from 'react';
import { Link, useRouteMatch } from 'react-router-dom';

export default function CharacterCard({ character, renderImage }) {
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
        {renderImage ? (
          <p>{character.name}</p>
        ) : (
          <ul>
            <li>{character.name}</li>
          </ul>
        )}
        {renderImage && character.image && <img src={character.image} alt="" />}
      </Link>
    </div>
  );
}
