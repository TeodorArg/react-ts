import { useEffect, useState } from "react";

interface GeoStateProps {
  showOnlyCity?: boolean;
  defaultGeo?: string;
  apiKey?: string;
}

export default function useGeoState({
  showOnlyCity = false,
  defaultGeo = "Москва",
  apiKey = "b79dda1140b248bfbc95e4dbe7c2b513",
}: GeoStateProps) {
  // GEO
  const APIkey = apiKey;

  const [location, setLocation] = useState<string>();
  const [loading, loadingSucsess] = useState<boolean>(false);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          if (result.state === "granted") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "prompt") {
            navigator.geolocation.getCurrentPosition(success, errors, options);
          } else if (result.state === "denied") {
            //If denied then you have to show instructions to enable location
          }
        });
    } else {
      console.log("Geolocation is not supported by this browser.");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos: any) {
    let crd = pos.coords;
    getLocationInfo(crd.latitude, crd.longitude);
  }

  function errors(err: any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
    setLocation(defaultGeo);
    loadingSucsess(true);
  }

  function getLocationInfo(latitude: any, longitude: any) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          const address = showOnlyCity
            ? data.results[0].components.city
            : data.results[0].components.country +
              ", " +
              data.results[0].components.city +
              ", " +
              data.results[0].components.suburb +
              ", " +
              data.results[0].components.road;
          setLocation(address);
          loadingSucsess(true);
        } else {
          setLocation(defaultGeo);
          loadingSucsess(true);
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  }

  // GEO ./END

  return {
    location,
    loading,
  };
}
