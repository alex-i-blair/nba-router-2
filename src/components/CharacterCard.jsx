
export default function CharacterCard({ character, renderImage }) {

  return (
    <div>
      {renderImage ? (
        <div>
          <p>{character.name}</p>
          {character.image && <img src={character.image} />}
        </div>
      ) : (
        <ul>
          <li>{character.name}</li>
        </ul>
      )}
    </div>
  );
}
