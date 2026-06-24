import FavoriteCard from "./FavoriteCard";
import "./FavoritesList.css";

export default function FavoritesList({ locations }) {
  if (locations.length === 0) {
    return <p className="favorites-empty">No favorite locations yet</p>;
  }

  return (
    <ul className="location-list">
      {locations.map((location) => (
        <FavoriteCard key={location.id} location={location} />
      ))}
    </ul>
  );
}
