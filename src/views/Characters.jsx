import React from 'react';
import CharacterCard from '../components/CharacterCard';

export default function Characters({ characters, fromLocation = false }) {
  console.log('typeof characters :>> ', Array.isArray(characters));
  // const newArr = [...characters];
  // console.log(
  //   '🚀 ~ file: Characters.jsx ~ line 8 ~ Characters ~ newArr',
  //   newArr,
  //   newArr.length
  // );

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
