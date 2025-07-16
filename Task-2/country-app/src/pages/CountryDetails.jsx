import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function CountryDetails() {
  const { countryName } = useParams();
  const navigate = useNavigate();
  const countries = useSelector((state) => state.countries.data);

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName.toLowerCase()
  );

  const getCountryNameFromCode = (code) => {
    const borderCountry = countries.find((c) => c.cca3 === code);
    return borderCountry ? borderCountry.name.common : code;
  };

  if (!country) return <p>Country not found</p>;

  return (
    <div style={{ padding: "1rem" }}>
      <img src={country.flags.png} alt={country.name.common} width="150" />
      <h1>{country.name.common}</h1>
      <p><strong>Code:</strong> {country.cca3}</p>
      <p><strong>Region:</strong> {country.region}</p>
      <p><strong>Borders:</strong></p>
      <ul>
        {country.borders?.map((code, i) => (
          <li
            key={i}
            onClick={() =>
              navigate(`/country/${getCountryNameFromCode(code)}`)
            }
            style={{ cursor: "pointer", color: "blue" }}
          >
            {getCountryNameFromCode(code)}
          </li>
        )) || <li>None</li>}
      </ul>
    </div>
  );
}
