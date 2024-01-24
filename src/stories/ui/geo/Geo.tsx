import useGeoState from "../../../hooks/GeoState";

import TextWithIcon from "../text-with-icon/TextWithIcon";

interface GeoProps {
  geoInMobile?: boolean;
  iconClassName?: string;
  onlyCityShow?: boolean;
  cityAsString?: string;
  defaultGeoPosition?: string;
  duplicate?: boolean;
}

/**
 * If you don't want to use api.opencagedata, you can put cityAsString, with name of City <br>
 * if for some reason the API is not available, you can put defaultGeo, with name of City as a placeholder<br>
 * If you need to show Only City Name from GeoPosition used onlyCityShow
 */

export default function Geo(
  {
    geoInMobile = false,
    iconClassName = 'map-marker',
    onlyCityShow = false,
    defaultGeoPosition = 'Москва',
    cityAsString = '',
  }: GeoProps ) {

  const{loading, location} = useGeoState({
    showOnlyCity: onlyCityShow, 
    defaultGeo: defaultGeoPosition
  });

  
  return (
    <TextWithIcon
      textInblock = {cityAsString === '' ? location : cityAsString}
      iconName = {iconClassName}
      loading = {cityAsString === '' ? !loading : false}
      viewInMobile={geoInMobile}
    />
  );
}