import { useMemo } from "react";
import { useLocations } from "../hooks/useLocations";
import { useFavoritesStore } from "../store/favoritesStore";
import FavoritesList from "../components/favorites/FavoritesList";

export default function FavoritesRoute() {
  const { data: locations, isLoading, isError } = useLocations();
  const favoriteIds = useFavoritesStore((state) => state.favoriteIds);

  const favoriteLocations = useMemo(() => {
    if (!locations) return [];
    return locations.filter((location) => favoriteIds.includes(location.id));
  }, [locations, favoriteIds]);

  return (
    <div>
      <h1>Favorites Route</h1>

      {isLoading && <p>Loading locations...</p>}
      {isError && <p>Something went wrong while loading locations.</p>}
      {locations && <FavoritesList locations={favoriteLocations} />}
    </div>
  );
}
