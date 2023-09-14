import React, { useEffect, useState } from "react";
import { Box, Stack, Skeleton } from "@chakra-ui/react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css"; // not in the docs but necessary
import L from "leaflet";

const icon = L.icon({ iconUrl: "/images/marker-icon.png" });

function Map() {
  const [worldwideData, setWorldwideData] = useState(null);
  const [countryData, setCountryData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchWorldwideData = async () => {
    try {
      const response = await fetch("https://disease.sh/v3/covid-19/all");
      const data = await response.json();
      setWorldwideData(data);
    } catch (error) {
      setError(true);
    }
  };

  const fetchCountryData = async () => {
    try {
      const response = await fetch("https://disease.sh/v3/covid-19/countries/");
      const data = await response.json();
      setCountryData(data);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWorldwideData();
    fetchCountryData();
  }, []);

  if (loading) {
    return (
      //   <p>
      <Stack>
        <Skeleton height="20px" />
        <Skeleton height="20px" />
        <Skeleton height="20px" />
      </Stack>
      //   </p>
    );
  }

  if (error) {
    return <p>Error fetching data.</p>;
  }

  const markers = countryData.map((country) => (
    <Marker
      key={country.country}
      position={[country.countryInfo.lat, country.countryInfo.long]}
      icon={icon}
    >
      <Popup>
        <Box>
          <h3>{country.country}</h3>
          <p>Total Cases: {country.cases}</p>
          <p>Recovered: {country.recovered}</p>
          <p>Deaths: {country.deaths}</p>
        </Box>
      </Popup>
    </Marker>
  ));

  return (
    <>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <Box>
          <MapContainer
            style={{ width: "700px", height: "400px" }}
            center={[20, 80]}
            zoom={4}
            scrollWheelZoom={true}
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              attribution="we love bear"
            />
            {markers}
          </MapContainer>
        </Box>
      </Box>
    </>
  );
}

export default Map;
