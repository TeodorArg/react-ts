import { useEffect, useState } from "react";

import {  TextWithIcon } from "../text-with-icon/TextWithIcon";

interface GeoProps {
  geoInFooter?: boolean;
  iconClassName?: string;
}
const APIkey = "b79dda1140b248bfbc95e4dbe7c2b513";


export const Geo = ({
  geoInFooter = false,
  iconClassName = 'map-marker',
  ...props
}: GeoProps) => {

  // GEO

  const [location, setLocation] = useState<string>('');

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos:any) {
    let crd = pos.coords;
    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
    getLocationInfo(crd.latitude, crd.longitude);
  }

  function errors(err:any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }

  function getLocationInfo(latitude:any, longitude:any) {
    const url = `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          // console.log(data.results);
          const address = 
            data.results[0].components.country+', '+
            data.results[0].components.city+', '+
            data.results[0].components.suburb+', '+
            data.results[0].components.road 
          setLocation(address);
        } else {
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error));
  }

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.permissions
        .query({ name: "geolocation" })
        .then(function (result) {
          // console.log(result);
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
  // GEO ./END
  return (
   
    <div>
      <TextWithIcon
        textInblock = {location ? location : null}
        iconName = {iconClassName}
      />
    </div>

  );
}