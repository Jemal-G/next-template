import "./app.css";
import LocationFinderClient from "./component/locationFinderClient";
import LocationFinderServer from "./component/locationFinderServer";
import DOING from "./component/doing";

export default function App() {
  return (
    <main className="App">
      <div className="location-container">
        <LocationFinderServer />
        <LocationFinderClient />
      </div>
      <DOING />
    </main>
  );
}
