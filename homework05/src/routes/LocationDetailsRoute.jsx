import { Link, useLoaderData } from "react-router-dom";
import "./LocationDetailsRoute.css";

export default function LocationDetailsRoute() {
  const location = useLoaderData();

  return (
    <div>
      <h1>Location Details Route</h1>

      <div className="location-details">
        <Link to="/dashboard/map" className="location-details__back">
          ← Back to map
        </Link>

        <h2>{location.name}</h2>
        <p>{location.address}</p>

        <dl className="location-details__grid">
          <div>
            <dt>Type</dt>
            <dd>{location.type}</dd>
          </div>
          <div>
            <dt>Rating</dt>
            <dd>{location.rating}</dd>
          </div>
        </dl>
      </div>
    </div>
  );
}
