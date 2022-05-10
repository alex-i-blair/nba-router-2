import React from 'react';
import { Link } from 'react-router-dom';

export default function Characters({ characters }) {
  return (
    <>
      <div>
        {characters.map((character) => (
          <p key={character.id}>{character.name}</p>
        ))}
      </div>
    </>
  );
}
