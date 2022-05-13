import React from 'react';
import CharacterCard from '../components/CharacterCard';

export default function Characters({ characters, fromLocation = false }) {
  console.log('characters :>> ', characters);
  return (
    <>
      <div>
        {characters.map((character) => (
          <CharacterCard
            key={character.id}
            character={character}
            renderImage={!fromLocation}
          />
        ))}
      </div>
    </>
  );
}
