export const fetchWorldData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/all");
  return response.json();
};

export const fetchCountryData = async () => {
  const response = await fetch("https://disease.sh/v3/covid-19/countries");
  return response.json();
};

export const fetchHistoricalData = async () => {
  const response = await fetch(
    "https://disease.sh/v3/covid-19/historical/all?lastdays=all"
  );
  return response.json();
};
