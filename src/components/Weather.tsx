import { useSelector } from "react-redux"
import { RootState, WeatherInfo } from "../utils/types"

const Weather = () => {

  const weather = useSelector<RootState, WeatherInfo>(state => state.weatherInfo)
  const message = useSelector<RootState, string>(state => state.message)

  return (
    <div className='infoWeath'>{
      !message && <>
        <p>Location: {weather.country}, {weather.city}</p>
        <p>Temp: {weather.temp}</p>
        <p>Pressure: {weather.pressure}</p>
        <p>Sunset: {new Date (weather.sunset! * 1000).toLocaleTimeString()}</p>
      </>
    }
      <>{message}</>
    </div>
  )
}


export default Weather
