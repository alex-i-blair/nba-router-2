import React from 'react';
import { Link } from 'react-router-dom';
import CharacterCard from '../components/CharacterCard';

export default function Characters({ characters }) {
  return (
    <>
      <div>
        {characters.map((character) => (
          <CharacterCard key={character.id} character={character} />
        ))}
      </div>
    </>
  );
}
