import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { getTime } from "../Helper.js";
export { Details };

function Details() {
  const data = useSelector((store)=>store.cityData)
  

  return (
    <div>
      <p>{data.name}</p>
      <div className="details-display">
        <p>Temperature: {data.main.temp}</p>
        <p>Feels like: {data.main.feels_like}</p>
        <p>Weather: {data.weather[0].main}</p>
        <p>Sunrise: {getTime(data.sys.sunrise)}</p>
        <p>Sunset: {getTime(data.sys.sunset)}</p>
      </div>
    </div>
  );
}

