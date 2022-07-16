import { combineReducers } from "@reduxjs/toolkit";
import {
  viewModeFilter,
  CHANGE_VIEW_MODE,
  REQUEST_FORECAST,
  RECEIVE_FORECAST,
  REQUEST_WEATHER,
  RECEIVE_WEATHER,
} from "./actions";

const {NOW} = viewModeFilter;


function cityData(state = null, action) {
  switch(action.type) {
    case REQUEST_WEATHER:
      return {
        isFetching: true
      }
    case RECEIVE_WEATHER:
      return {
        isFetching: false,
        data: action.data
      }
    default:
      return state
  }
}

function forecastData(state=null, action) {
  switch (action.type) {
    case REQUEST_FORECAST:
      return Object.assign({}, state, {
        forecastData: {
          isFetching: true,
        },
      });
    case RECEIVE_FORECAST:
      return Object.assign({}, state, {
        forecastData: {
          isFetching: false,
          data: action.data,
        },
      });

    default:
      return state;
  }
}

export function viewModeTab(state = NOW, action) {
  switch (action.type) {
    case CHANGE_VIEW_MODE:
      return action.viewMode;
    default:
      return state;
  }
}

export const weatherReducer = combineReducers({cityData, forecastData, viewModeTab})
