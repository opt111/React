import NavigateBtn from "../common/NavigateBtn";
import { useFavoritesStore } from "../../store/favoritesStore";

export default function FavoriteCard({ location }) {
  const removeFavorite = useFavoritesStore((state) => state.removeFavorite);

  return (
    <li className="location-card">
      <div className="location-card__info">
        <h3>{location.name}</h3>
        <p>{location.address}</p>
        {location.type && (
          <span className="location-card__type">{location.type}</span>
        )}
      </div>

      <div className="location-card__actions">
        <NavigateBtn to={`/dashboard/location/${location.id}`}>
          View details
        </NavigateBtn>
        <button
          type="button"
          className="favorite-remove-btn"
          onClick={() => removeFavorite(location.id)}
        >
          Remove from Favorites
        </button>
      </div>
    </li>
  );
}
