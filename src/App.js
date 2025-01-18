import Map from "./components/Map";
import Loader from "./components/Loader";
import Header from "./components/Header";

import { useState, useEffect } from "react";
import { MultiSelect } from "react-multi-select-component";
const options = [
  { label: "Πυρκαγιές 🔥", value: "W" },
  { label: "Ηφαίστεια 🌋", value: "V" },
  { label: "Καταιγίδες ⛈️", value: "S" },
  { label: "Παγόβουνα 🧊", value: "I" },
];

function App() {
  const [eventData, setEventData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selected, setSelected] = useState([]);
  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true);
      const res = await fetch("https://eonet.gsfc.nasa.gov/api/v2.1/events");
      const { events } = await res.json();

      setEventData(events);
      setLoading(false);
    };

    fetchEvents();

  }, []);

  return (
    <div>
      <div>
      <Header eventData={eventData}/>
      
      </div>
      <div className="selection-menu">
        <h1>Select Disaster</h1>
        <MultiSelect
          options={options}
          value={selected}
          onChange={setSelected}
          labelledBy="Select"
          shouldToggleOnHover={true}
        />     
      </div>
      
      {!loading ? (
        <Map selected={selected} eventData={eventData} />
      ) : (
        <Loader />
      )}
      
    </div>
  );
}

export default App;
