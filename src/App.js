import { useEffect, useState } from "react";
import { MainPage } from "./components/MainPage";
import { SearchForm } from "./components/SearchForm";
import { handleResponseWeather, makeResponseForecast } from "./Server.js";
import "./styles/App.css";
import "./styles/tabs.css";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useDispatch } from "react-redux/es/hooks/useDispatch";
import { addCityData, addForecastData } from "./features/reducer/actions";

function App() {
  const [city, setCity] = useState("Bali");
  const viewMode = useSelector((store)=>store.viewModeTab);
  const data = useSelector((store)=>store.cityData)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      if (viewMode === "FORECAST") {
        dispatch(addForecastData(city))
      } else {
        dispatch(addCityData(city))
      }
    };

    fetchData();
  }, [city, viewMode]);

  function handleResponse(cityName) {
    setCity(cityName);
  }

  return (
    <div className="wrapper">
        <SearchForm handleResponse={handleResponse} city={city} />
        <MainPage handleResponse={handleResponse} viewMode ={viewMode} />
    </div>
  );
}

export default App;
