import { Icon } from "../icon/Icon";

import "./_geo.scss";

interface GeoProps {
  geoInFooter?: boolean;
  geoText?: string;
  iconClassName?: string;
}

export const Geo = ({
  geoInFooter = false,
  geoText = "Санкт-Петербург",
  ...props
}: GeoProps) => {
  return (
    <div className="geo__icon text-white grid grid-cols-2-auto justify-start items-center" {...props}>
      {/* <img src="@@icon" alt="@@text" class="text__icon--icon h-6 w-6 -mt-0.5"></img> */}
      <Icon
        iconColor="#ffffff"
        iconName="map-marker"
        iconSubColor="#0A0A0A"
        iconThirdColor="#ffffff"
        iconClassName="geo__icon--icon"
      />
      <span className="geo__icon--text font-semibold text-base">
        {geoText}
      </span>
    </div>
  );
}