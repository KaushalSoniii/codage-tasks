import { useState } from "react";
import { useSelector } from "react-redux";
import CountryCard from "../components/CountryCard";
import Header from "../components/Header";

export default function Home() {
  const countries = useSelector((state) => state.countries.data);
  const [filtered, setFiltered] = useState(countries);

  const handleSearch = (query) => {
    const lower = query.toLowerCase();
    const result = countries.filter(
      (c) =>
        c.name.common.toLowerCase().includes(lower) ||
        (c.region && c.region.toLowerCase().includes(lower)) ||
        (c.cca3 && c.cca3.toLowerCase().includes(lower))
    );
    setFiltered(result);
  };

  const handleFilter = (type) => {
    if (!type) return setFiltered(countries);
    const isIndependent = type === "independent";
    const result = countries.filter(
      (c) => c.independent === isIndependent
    );
    setFiltered(result);
  };

  return (
    <>
      <Header onSearch={handleSearch} onFilter={handleFilter} />
      <div className="card-container">
        {(filtered?.length > 0 ? filtered : countries).map((country, i) => (
          <CountryCard key={i} country={country} />
        ))}
      </div>
    </>
  );
}
