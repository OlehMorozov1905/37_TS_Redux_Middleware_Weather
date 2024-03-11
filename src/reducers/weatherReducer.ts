import { PUT_WEATHER_INFO, PUT_MESSAGE } from "../actions/weatherAction"
import { ReduxAction, RootState } from "../utils/types"

const initialState = {
    weatherInfo: {},
    message: 'Enter city name'
}

export const weatherReducer = (state: RootState = initialState, action: ReduxAction) => {
    switch (action.type) {
        case PUT_WEATHER_INFO:
            return {...state, weatherInfo: action.payload, message: ''}
        case PUT_MESSAGE:
            return {...state, message: action.payload, weatherInfo: {} }
        default:
            return state
    }
}
