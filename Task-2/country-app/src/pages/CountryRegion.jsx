import { useNavigate } from "react-router-dom";

export default function CountryRegion() {
  const navigate = useNavigate();
  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  return (
    <div style={{ padding: "1rem" }}>
      <h2>Select a Region:</h2>
      <ul>
        {regions.map((region, i) => (
          <li
            key={i}
            onClick={() => navigate(`/region/${region}`)}
            style={{ cursor: "pointer", color: "blue", margin: "0.5rem 0" }}
          >
            {region}
          </li>
        ))}
      </ul>
    </div>
  );
}
