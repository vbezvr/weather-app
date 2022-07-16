import React, { useContext, useState } from "react";
import { SaveLocations } from "./SaveLocations.js";
import { storage } from "../Storage.js";
import { Details } from "./Details.js";
import { Forecast } from "./Forecast.js";
import { Content } from "./Content.js";
import { NavigateButtons } from "./NavigateButtons.js";
import { useSelector } from "react-redux/es/hooks/useSelector.js";


export { MainPage };

function MainPage({handleResponse, viewMode}) {
  const data = useSelector((store)=>store.cityData)
  const [savedCities, setSavedCities] = useState(storage.getFavoriteCities());
  const tabs = {
    NOW: <Content handleChosenCity={handleChosenCity} />,
    DETAILS: <Details />,
    FORECAST: <Forecast />
  }

  if (!data) {
    if (storage.isEmpty()) {
      storage.saveFavoriteCities("");
    }
  }

  function handleChosenCity(city) {

    if (storage.isCitySaved(city)) {
      storage.deleteFavoriteCitiesItem(city);
    } else {
      storage.addFavoriteCitiesItem(city);
    }

    setSavedCities(storage.getFavoriteCities())

  }

  return (
    <div className="display">
      <div className="now-display">
        {data && tabs[viewMode]}
        <NavigateButtons />
      </div>
      <SaveLocations
        cityData={savedCities}
        handleResponse={handleResponse}
        handleUpdates={handleChosenCity}
      />
    </div>
  );
}
