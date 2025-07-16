import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import CountryCard from "../components/CountryCard";

export default function RegionCountries() {
  const { regionName } = useParams();
  const countries = useSelector((state) => state.countries.data);

  const filtered = countries.filter(
    (c) => c.region?.toLowerCase() === regionName.toLowerCase()
  );

  return (
    <div className="card-container">
      {filtered.length > 0 ? (
        filtered.map((country, i) => (
          <CountryCard key={i} country={country} />
        ))
      ) : (
        <p>No countries found in {regionName}</p>
      )}
    </div>
  );
}
