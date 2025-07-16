export const fetchCountries = async () => {
  const response = await fetch('https://restcountries.com/v3.1/all?fields=name,flags,cca2,region,borders,independent');
  return response.json();
};
