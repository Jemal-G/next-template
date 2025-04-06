"use client";
import { useEffect, useState } from "react";

interface LocationInfo {
  city?: string;
  [key: string]: any;
}

export default function LocationFinderServer() {
    const [locationInfo, setLocationInfo] = useState<LocationInfo>({});

  const getLocationInfo = async () => {
    try {
      const response = await fetch("https://geolocation-db.com/json/");
      const locationdata = await response.json();
      setLocationInfo(locationdata);
      console.log("Location data:", locationdata);
          } catch (error) {
      console.error("Error fetching location info:", error);
    }
  };

  useEffect(() => {
    getLocationInfo();
  }, []);

  return (
          <h1>Hello from {locationInfo.city || "My location"} from  client component</h1>
      );
}
