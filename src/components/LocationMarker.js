import { Icon } from "@iconify/react";
import wildfire from "@iconify/icons-mdi/fire-alert";

const LocationMarker = ({
  isVolcano = 0,
  isWildfire = 0,
  isStorm = 0,
  isIceberg = 0,
  lat,
  lng,
  onClick,
}) => {
  let volmarker;
  let wildmarker;
  let stormmarker;
  let icebergmarker;

  if (isVolcano) {
    volmarker = <Icon icon="emojione:volcano" className="location-icon" />;
  }
  if (isWildfire) {
    wildmarker = <Icon icon={wildfire} className="location-icon" />;
  }
  if (isStorm) {
    stormmarker = (
      <Icon
        icon="carbon:thunderstorm-severe"
        hFlip={true}
        className="location-icon"
      />
    );
  }
  if (isIceberg) {
    icebergmarker = <Icon icon="openmoji:iceberg" className="location-icon" />;
  }

  return (
    <div className="location-marker" onClick={onClick}>
      {volmarker}
      {wildmarker}
      {stormmarker}
      {icebergmarker}
    </div>
  );
};

export default LocationMarker;
