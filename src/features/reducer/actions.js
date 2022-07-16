import { handleResponseWeather, makeResponseForecast } from "../../Server";
export const viewModeFilter = {
  NOW: "NOW",
  DETAILS: "DETAILS",
  FORECAST: "FORECAST",
};
export const CHANGE_VIEW_MODE = "CHANGE_VIEW_MODE";
export const UPDATE_SAVED_CITIES = "UPDATE_SAVED_CITIES";
export const ADD_CITY_DATA = "ADD_CITY_DATA";

export const REQUEST_FORECAST = "REQUEST_FORECAST";
export const RECEIVE_FORECAST = "RECEIVE_FORECAST";

export const REQUEST_WEATHER = "REQUEST_WEATHER";
export const RECEIVE_WEATHER = "RECEIVE_WEATHER";

export function changeViewMode(viewMode) {
  return {
    type: CHANGE_VIEW_MODE,
    viewMode: viewMode,
  };
}

export function addCityData(data) {
  return {
    type: ADD_CITY_DATA,
    data: data
  }
}

export function addForecastData(city) {
  return async function (dispatch) {
    dispatch(requestForecast);
    const data = await makeResponseForecast(city);
    dispatch(receiveForecast(data));
  }
}

function requestForecast() {
  return {
    type: REQUEST_FORECAST
  }
}

function receiveForecast(data) {
  return {
    type: RECEIVE_FORECAST,
    data
  }

}

function addWeatherData(city) {
  return async function(dispatch) {
    dispatch(requestWeather);
    const data = await handleResponseWeather(city);
    dispatch(receiveWeather(data));
  }
}

function requestWeather() {
  return {
    type: RECEIVE_WEATHER
  }
}

function receiveWeather(data) {
  return {
    type: RECEIVE_WEATHER,
    data
  }
}