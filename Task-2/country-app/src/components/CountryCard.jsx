import { useNavigate } from "react-router-dom";

export default function CountryCard({ country }) {
  const navigate = useNavigate();
  const { flags, name, cca2, region, borders } = country;

  return (
    <div className="card" onClick={() => navigate(`/country/${name.common}`)}>
      <img src={flags?.png} alt={name?.common} />
      <h3>{name?.common}</h3>
      <p><strong>Code:</strong> {cca2}</p>
      <p><strong>Region:</strong> {region}</p>
      <p><strong>Borders:</strong> {borders?.join(', ') || 'None'}</p>
    </div>
  );
}
