import { domManipulator } from './DOM'

export const getWeather = (() => {
  function updateObject(response) {
    const weatherObject = {
      city: response.name,
      country: response.sys.country,
      weatherDescription: response.weather[0].description,
      wind: response.wind.speed,
      feelsLike: response.main.feels_like,
      humidity: response.main.humidity,
      pressure: response.main.pressure,
      temp: response.main.temp,
    }
    domManipulator.showData(weatherObject)
    return weatherObject
  }

  async function getCurrentWeather(cityInput) {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityInput}&appid=c1bac60a85c422dd638979d5502c6074`,
      { mode: 'cors' }
    )
    const data = await response.json()
    updateObject(data)
  }

  // async function getFiveDaysForecast(cityInput) {
  //   const response = await fetch(
  //     `https://api.openweathermap.org/data/2.5/forecast?q=${cityInput}&appid=c1bac60a85c422dd638979d5502c6074`,
  //     {
  //       mode: 'cors',
  //     }
  //   )
  //   const data = await response.json()
  // }

  return {
    getCurrentWeather,
    // getFiveDaysForecast,
  }
})()
