const CounterInfo = ({ volcanoes, wildfires, storms, icebergs }) => {
  return (
    <div className="counter-info">
      <ul>
        <li>
          Volcanoes : <strong style={{ color: "red" }}>{volcanoes}</strong>
        </li>
        <li>
          Wildfires : <strong style={{ color: "red" }}>{wildfires}</strong>
        </li>
        <li>
          Storms : <strong style={{ color: "red" }}>{storms}</strong>
        </li>
        <li>
          IceBergs : <strong style={{ color: "red" }}>{icebergs}</strong>
        </li>
      </ul>
    </div>
  );
};

export default CounterInfo;
