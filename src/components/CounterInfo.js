const CounterInfo = ({ volcanoes, wildfires, storms, icebergs }) => {
  return (
    <div className="counter-info">
      <ul>
        <li>
          Ηφαίστεια : <strong style={{ color: "red" }}>{volcanoes}</strong>
        </li>
        <li>
          Πυρκαγιές : <strong style={{ color: "red" }}>{wildfires}</strong>
        </li>
        <li>
          Καταιγίδες : <strong style={{ color: "red" }}>{storms}</strong>
        </li>
        <li>
          Παγόβουνα : <strong style={{ color: "red" }}>{icebergs}</strong>
        </li>
      </ul>
    </div>
  );
};

export default CounterInfo;
