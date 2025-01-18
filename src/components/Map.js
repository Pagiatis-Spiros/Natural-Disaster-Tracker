import GoogleMapReact from "google-map-react";
import LocationMarker from "./LocationMarker";
import LocationInfoBox from "./LocationInfoBox";
import CounterInfo from "./CounterInfo";
import { useState } from "react";

const Map = ({ selected, eventData, center, zoom }) => {
  const [locationInfo, setLocationInfo] = useState(null);
  let volcanoes = 0;
  let wildfires = 0;
  let storms = 0;
  let icebergs = 0;
  let Vol = 0;
  let Wild = 0;
  let Storm = 0;
  let Iceberg = 0;
  const checker = () => {
    selected.forEach((elem) => {
      if (elem.value === "V") {
        Vol = 1;
      } else if (elem.value === "W") {
        Wild = 1;
      } else if (elem.value === "S") {
        Storm = 1;
      } else if (elem.value === "I") {
        Iceberg = 1;
      }
    });
  };
  checker();
  const markers = eventData.map((ev) => {
    if (ev.categories[0].id === 8) {
      wildfires += 1;
      return (
        <LocationMarker
          isWildfire={Wild}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({ id: ev.categories[0].title, title: ev.title });
          }}
        />
      );
    } else if (ev.categories[0].id === 12) {
      volcanoes += 1;
      return (
        <LocationMarker
          isVolcano={Vol}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({ id: ev.categories[0].title, title: ev.title });
          }}
        />
      );
    } else if (ev.categories[0].id === 10) {
      storms += 1;
      return (
        <LocationMarker
          isStorm={Storm}
          lat={ev.geometries[0].coordinates[1]}
          lng={ev.geometries[0].coordinates[0]}
          onClick={() => {
            setLocationInfo({ id: ev.categories[0].title, title: ev.title });
          }}
        />
      );
    } else if (ev.categories[0].id === 15) {
        icebergs += 1;
        return (
          <LocationMarker
            isIceberg={Iceberg}
            lat={ev.geometries[0].coordinates[1]}
            lng={ev.geometries[0].coordinates[0]}
            onClick={() => {
              setLocationInfo({ id: ev.categories[0].title, title: ev.title });
            }}
          />
        );
      }

    return null;
  });

  return (
    <div>
      <div className="map">
        <GoogleMapReact
          bootstrapURLKeys={{ key: "AIzaSyBdBvxU8-2HtDvYhPDUS2jyP5x9Ze2f5hw" }}
          defaultCenter={center}
          defaultZoom={zoom}
          border-color={"black"}
        >
          {markers}
        </GoogleMapReact>
      </div>
      {locationInfo && <LocationInfoBox info={locationInfo} />}
      {<CounterInfo volcanoes={volcanoes} wildfires={wildfires} storms={storms} icebergs={icebergs}/>}
    </div>
  );
};

Map.defaultProps = {
  center: {
    lat: 39.6237, 
    lng: 19.9201,
  },
  zoom: 8,
};

export default Map;
