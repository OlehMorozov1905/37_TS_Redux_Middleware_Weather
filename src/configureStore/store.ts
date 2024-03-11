import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { weatherReducer } from "../reducers/weatherReducer";
import { thunk } from "redux-thunk";
import { logger } from "redux-logger";


export const store = createStore(weatherReducer, applyMiddleware( thunk, logger));


export type AppDispatch = typeof store.dispatch;

