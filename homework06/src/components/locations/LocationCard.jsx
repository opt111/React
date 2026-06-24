import NavigateBtn from "../common/NavigateBtn";

export default function LocationCard({ location }) {
  return (
    <li className="location-card">
      <div className="location-card__info">
        <h3>{location.name}</h3>
        <p>{location.address}</p>
        {location.type && (
          <span className="location-card__type">{location.type}</span>
        )}
      </div>

      <NavigateBtn to={`/dashboard/location/${location.id}`}>
        View details
      </NavigateBtn>
    </li>
  );
}
