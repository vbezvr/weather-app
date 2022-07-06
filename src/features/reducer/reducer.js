import { store } from "../../app/store";
import { storage } from "../../Storage";
import {
  viewModeFilter,
  CHANGE_VIEW_MODE,
  UPDATE_SAVED_CITIES,
  ADD_CITY_DATA,
  ADD_FORECAST_DATA,
} from "./actions";

export const initialState = {
  viewModeTab: viewModeFilter.NOW,
  savedCities: storage.getFavoriteCities(),
  cityData: "",
  forecastData: ""
};

export function weatherReducer(state = initialState, action) {
  switch (action.type) {
    case CHANGE_VIEW_MODE:
      return Object.assign({}, state, {
        viewModeTab: action.viewMode,
      });
    case ADD_CITY_DATA:
      return Object.assign({}, state, {
        cityData: action.data
      });
    case ADD_FORECAST_DATA:
      return Object.assign({}, state, {
        forecastData: action.data,
      });
    default:
      return state;
  }
}


