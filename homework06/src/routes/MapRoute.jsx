import { useLocations } from "../hooks/useLocations";
import LocationList from "../components/locations/LocationList";

export default function MapRoute() {
  const { data: locations, isLoading, isError } = useLocations();

  return (
    <div>
      <h1>Map Route</h1>

      {isLoading && <p>Loading locations...</p>}
      {isError && <p>Something went wrong while loading locations.</p>}
      {locations && <LocationList locations={locations} />}
    </div>
  );
}
