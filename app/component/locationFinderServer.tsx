
export default async function LocationFinderServer() {
  const response = await fetch("https://geolocation-db.com/json/", {
    cache: "no-store", 
  });

  const locationInfo = await response.json();
  console.log("location data:",locationInfo);

  return (
    <h1>Hello from {locationInfo.city || "my location"} from server component</h1>
  );
}