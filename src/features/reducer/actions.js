
export const viewModeFilter = {
  NOW: "NOW",
  DETAILS: "DETAILS",
  FORECAST: "FORECAST",
};
export const CHANGE_VIEW_MODE = "CHANGE_VIEW_MODE";
export const UPDATE_SAVED_CITIES = "UPDATE_SAVED_CITIES";
export const ADD_CITY_DATA = "ADD_CITY_DATA";
export const ADD_FORECAST_DATA = "ADD_FORECAST_DATA";

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

export function addForecastData(data) {
  return {
    type: ADD_FORECAST_DATA,
    data: data,
  };
}
