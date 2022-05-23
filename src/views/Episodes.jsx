import EpisodeCard from '../components/EpisodeCard';

export default function Episodes({ episodes }) {
  return (
    <>
      <div>
        {episodes.map((episode) => (
          <EpisodeCard key={episode.id} episode={episode} />
        ))}
      </div>
    </>
  );
}
