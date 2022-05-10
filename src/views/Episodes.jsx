import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { fetchRickAndMorty } from '../services/fetchRickAndMorty';
import { useRouteMatch, useLocation } from 'react-router-dom';
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
