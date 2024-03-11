import { AppDispatch } from "../configureStore/store"
import { api_key, base_url } from "../utils/constants"
import { WeatherInfo } from "../utils/types"

export const PUT_WEATHER_INFO = 'PUT_WEATHER_INFO'
export const PUT_MESSAGE = 'PUT_MESSAGE'

export const putWeatherInfo = (weatherInfo: WeatherInfo) => ({
    type: PUT_WEATHER_INFO,
    payload: weatherInfo
})

export const putMessage = (message: string) => ({
    type: PUT_MESSAGE,
    payload: message
})

export const getWeather = (city: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch(putMessage('Please wait...'))
        try {
            const responce = await fetch(`${base_url}?q=${city}&appid=${api_key}&units=metric`)
            const data = await responce.json();
            dispatch(putWeatherInfo({
                city: data.name,
                country: data.sys.country,
                temp: data.main.temp,
                pressure: data.main.pressure,
                sunset: data.sys.sunset
            }));
        } catch (error) {
            dispatch(putMessage('City not found or enter correct city name'));
        }
    }
}

export const handleChange = (setCity: React.Dispatch<React.SetStateAction<string>>) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
        setCity(e.target.value);
    };
}

export const submitHandler = (city: string, dispatch: AppDispatch, setCity: React.Dispatch<React.SetStateAction<string>>) => {
    return (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(getWeather(city));
        setCity('');
    };
};


