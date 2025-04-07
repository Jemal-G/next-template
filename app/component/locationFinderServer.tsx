export default async function LocationFinderServer() {
  try {
    // Hardcoded city, state, and temperature
    const city = "San Francisco";
    const state = "California";
    const temperature = 22; // Hardcoded temperature in °C

    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <h3>Hello From server component</h3>
        <p>{city}</p>
        <p>{temperature}°C</p>
        <p>{state}</p>
      </div>
    );
  } catch (error) {
    console.error("Failed to fetch location data:", error);
    return (
      <div style={{ textAlign: "center", marginTop: "20px" }}>
        <p>Unknown City</p>
        <p>Unknown Temperature</p>
        <p>Unknown State</p>
      </div>
    );
  }
}