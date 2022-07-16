import saved from "../icons/fav_enable.svg";
import unsaved from "../icons/fav_disable.svg";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import {loadIcon} from "../Server.js";

export function Content(props) {
  const data = useSelector((store)=>store.cityData);
  const [temperature, iconId, cityName] = [
    data.main.temp + "°",
    data.weather[0].icon,
    data.name,
  ];

  return (
    <div className="content">
      <span className="degree">{temperature}</span>
      <img className="weather-icon" src={loadIcon(iconId)}></img>
      <div className="city-footer">
        <span id="current-city">{cityName}</span>
        <SaveCityButton
          name={cityName}
          isActive={storage.isCitySaved(cityName)}
          handleChosenCity={...props}
        />
      </div>
    </div>
  );
}

function SaveCityButton({name, isActive, handleChosenCity}) {
  return (
    <a className="like-btn" onClick={handleChosenCity.bind(this, name)}>
      <img id="like-btn" src= {isActive ? saved : unsaved} width="30px"></img>
    </a>
  );
}
