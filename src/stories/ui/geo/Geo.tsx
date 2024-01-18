import { useEffect, useState } from "react";

import {  TextWithIcon } from "../text-with-icon/TextWithIcon";

interface GeoProps {
  geoInMobile?: boolean;
  iconClassName?: string;
  showOnlyCity?: boolean;
  cityString?: string;
  defaultGeo?: string;
  apiKey?: string;
}



/**
 * If you don't want to use api.opencagedata, you can put cityString, with name of City <br>
 * if for some reason the API is not available, you can put defaultGeo, with name of City as a placeholder<br>
 * apiKey = string with APIkey from api.opencagedata
 */

export const Geo = ({
    geoInMobile = false,
    iconClassName = 'map-marker',
    showOnlyCity = false,
    defaultGeo = 'Москва',
    cityString = '',
    apiKey = 'b79dda1140b248bfbc95e4dbe7c2b513',
  }: GeoProps) => {

  // GEO
  const APIkey = apiKey;

  const [location, setLocation] = useState<string>();
  const [loading, loadingSucsess] = useState<boolean>(true);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0,
  };

  function success(pos:any) {
    let crd = pos.coords;
    getLocationInfo(crd.latitude, crd.longitude);

  }

  function errors(err:any) {
    console.warn(`ERROR(${err.code}): ${err.message}`);
  }


  function getLocationInfo(latitude:any, longitude:any) {
  
    const url = (cityString === '') ? 
      `https://api.opencagedata.com/geocode/v1/json?q=${latitude},${longitude}&key=${APIkey}`
      :
      null;

    url ?  
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        if (data.status.code === 200) {
          // console.log(data.results);
          const address = 
            !showOnlyCity ?
              data.results[0].components.country+', '+
              data.results[0].components.city+', '+
              data.results[0].components.suburb+', '+
              data.results[0].components.road 
            :
              data.results[0].components.city
          setLocation(address);
          loadingSucsess(false);
        } else {
          setLocation(cityString || defaultGeo);
          loadingSucsess(false);
          console.log("Reverse geolocation request failed.");
        }
      })
      .catch((error) => console.error(error))
    :
    setLocation(cityString);
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
        textInblock = {location ? location : cityString || null}
        iconName = {iconClassName}
        loading = {loading}
        viewInMobile={geoInMobile}
      />
    </div>

  );
}