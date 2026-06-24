import { useParams } from "react-router-dom";
import { useLocation } from "../hooks/useLocation";
import { useFavoritesStore } from "../store/favoritesStore";
import NavigateBtn from "../components/common/NavigateBtn";
import "./LocationDetailsRoute.css";

export default function LocationDetailsRoute() {
  const { id } = useParams();
  const { data: location, isLoading, isError } = useLocation(id);

  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);
  const toggleFavorite = useFavoritesStore((state) => state.toggleFavorite);

  if (isLoading) {
    return <p>Loading location...</p>;
  }

  if (isError || !location) {
    return <p>Something went wrong while loading this location.</p>;
  }

  const isFavorite = favoriteIds.includes(location.id);

  return (
    <div>
      <h1>Location Details Route</h1>

      <div className="location-details">
        <NavigateBtn to="/dashboard/map" variant="link">
          ← Back to map
        </NavigateBtn>

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

        <button
          type="button"
          className="favorite-toggle-btn"
          onClick={() => toggleFavorite(location.id)}
        >
          {isFavorite ? "Remove from Favorites" : "Add to Favorites"}
        </button>
      </div>
    </div>
  );
}
