import LocationCard from "./LocationCard";
import "./LocationList.css";

export default function LocationList({ locations }) {
  return (
    <ul className="location-list">
      {locations.map((location) => (
        <LocationCard key={location.id} location={location} />
      ))}
    </ul>
  );
}
