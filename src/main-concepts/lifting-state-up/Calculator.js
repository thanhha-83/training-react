import { useEffect, useState } from "react";
import BoilingVerdict from "./BoilingVerdict";
import { toCelsius, toFahrenheit, tryConvert } from "./function-handler";
import TemperatureInput from "./TemperatureInput";

function Calculator() {
  const [state, setState] = useState({temperature: '', scale: 'c'});
  const [celsius, setCelsius] = useState(state.scale);
  const [fahrenheit, setFahrenheit] = useState(state.temperature);

  const handleCelsiusChange = (temperature) => setState({scale: 'c', temperature});

  const handleFahrenheitChange = (temperature) => setState({scale: 'f', temperature});

  useEffect(() => {
    state.scale === 'f' ? setCelsius(tryConvert(state.temperature, toCelsius)) : setCelsius(state.temperature);
    state.scale === 'c' ? setFahrenheit(tryConvert(state.temperature, toFahrenheit)) : setFahrenheit(state.temperature);
  }, [state])

  return (
    <div>
      <TemperatureInput scale="c" temperature={celsius} onTemperatureChange={handleCelsiusChange} />
      <TemperatureInput scale="f" temperature={fahrenheit} onTemperatureChange={handleFahrenheitChange} />
      <BoilingVerdict celsius={parseFloat(celsius)} />
    </div>
  );
}

export default Calculator;