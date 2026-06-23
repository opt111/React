import { Link, useLoaderData } from "react-router-dom";
import "./MapRoute.css";

export default function MapRoute() {
  const locations = useLoaderData();

  return (
    <div>
      <h1>Map Route</h1>

      <ul className="location-list">
        {locations.map((location) => (
          <li key={location.id} className="location-card">
            <div className="location-card__info">
              <h3>{location.name}</h3>
              <p>{location.address}</p>
              <span className="location-card__type">{location.type}</span>
            </div>

            <Link to={`/dashboard/location/${location.id}`}>
              View details
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
