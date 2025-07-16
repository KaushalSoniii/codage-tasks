import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchCountries } from "./features/countries/countriesSlice";

import Home from "./pages/Home";
import CountryDetails from "./pages/CountryDetails";
import CountryRegion from "./pages/CountryRegion";
import RegionCountries from "./pages/RegionCountries";


export default function App() {
  const dispatch = useDispatch();
  const location = useLocation();

  
  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  
  const hideHeaderOn = ["/country-region"];
  const showHeader = !hideHeaderOn.includes(location.pathname);

  return (
    <>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/country/:countryName" element={<CountryDetails />} />
        <Route path="/country-region" element={<CountryRegion />} />
        <Route path="/region/:regionName" element={<RegionCountries />} />
      </Routes>
    </>
  );
}
