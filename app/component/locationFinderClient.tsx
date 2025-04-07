"use client";
import { useEffect, useState } from "react";

export default function LocationFinderClient() {
  const [city, setCity] = useState("Loading...");
  const [state, setState] = useState("Loading...");
  const [temperature, setTemperature] = useState<number | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchLocationData() {
      try {
        // Fetch client location data using a geolocation API
        const locationResponse = await fetch("http://ip-api.com/json/"); 
        if (!locationResponse.ok) {
          throw new Error(`HTTP error! status: ${locationResponse.status}`);
        }
        const locationData = await locationResponse.json();

        // Extract city and state
        const city = locationData.city || "Unknown City";
        const state = locationData.regionName || "Unknown State";
        setCity(city);
        setState(state);

        // Fetch temperature data using OpenWeatherMap API
        const weatherApiKey = "79bed9230bb5c45e0895c0e9e4ba987b"; 
        const weatherResponse = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${locationData.lat}&lon=${locationData.lon}&units=metric&appid=${weatherApiKey}`
        );
        if (!weatherResponse.ok) {
          throw new Error(`HTTP error! status: ${weatherResponse.status}`);
        }
        const weatherData = await weatherResponse.json();

        // Extract temperature
        const temperature = weatherData.main.temp || null;
        setTemperature(temperature);
      } catch (err) {
        console.error("Failed to fetch location or weather data:", err);
        setError("Error fetching location or weather data");
      }
    }

    fetchLocationData();
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      {error ? (
        <p>{error}</p>
      ) : (
        <>
        <h3>Hello From client component</h3>
          <p>{city}</p>
          <p>{temperature !== null ? `${temperature}°C` : "Loading..."}</p>
          <p>{state}</p>
        </>
      )}
    </div>
  );
}
