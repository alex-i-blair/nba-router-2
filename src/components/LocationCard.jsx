import { Link, useRouteMatch } from 'react-router-dom';

export default function LocationCard({ location }) {
  const { url } = useRouteMatch();

  return (
    <div>
      <Link
        to={`${url}/${location.id}`}
        style={{
          color: 'inherit',
          textDecoration: 'none',
        }}
      >
        <p>{location.name}</p>
      </Link>
    </div>
  );
}
