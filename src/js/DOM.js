import { getWeather } from './getWeatherAPI'

export const domManipulator = (() => {
  const body = document.querySelector('body')
  const form = document.querySelector('form')
  const cityInput = document.querySelector('#cityInput')
  const submitButton = document.querySelector('#submit')
  const dataContainer = document.querySelector('#data')
  const cityContainer = document.querySelector('#city')
  const countryContainer = document.querySelector('#country')
  const weatherContainer = document.querySelector('#weatherDescription')
  const windContainer = document.querySelector('#wind')
  const feelsLikeContainer = document.querySelector('#feelsLike')
  const humidityContainer = document.querySelector('#humidity')
  const pressureContainer = document.querySelector('#pressure')
  const tempContainer = document.querySelector('#temp')

  function getData() {
    submitButton.addEventListener('click', (event) => {
      getWeather.getCurrentWeather(cityInput.value)
      // getWeather.getFiveDaysForecast(cityInput.value)
      event.preventDefault()
      dataContainer.classList = ''
      dataContainer.classList = 'show'
      form.reset()
    })
  }

  function setBackground(weatherObject) {
    if (weatherObject.weatherDescription === 'clear sky') {
      body.style.backgroundImage = 'url("../src/materials/sunny.jpg")'
    } else if (weatherObject.weatherDescription === 'rainy') {
      body.style.backgroundImage = 'url("../src/materials/rain.jpg")'
    } else if (weatherObject.weatherDescription === 'fog') {
      body.style.backgroundImage = 'url("../src/materials/fog.jpg")'
    } else if (weatherObject.weatherDescription === 'snow') {
      body.style.backgroundImage = 'url("../src/materials/snow.jpg")'
    } else if (weatherObject.weatherDescription === 'thunderstorm') {
      body.style.backgroundImage = 'url("../src/materials/thunderstorm.jpg")'
    } else if (weatherObject.weatherDescription.includes('cloud')) {
      body.style.backgroundImage = 'url("../src/materials/clouds.jpg")'
    }
  }

  function showData(weatherObject) {
    setBackground(weatherObject)
    cityContainer.textContent = weatherObject.city
    countryContainer.textContent = weatherObject.country
    weatherContainer.textContent = weatherObject.weatherDescription
    windContainer.textContent = `Wind: ${weatherObject.wind}`
    feelsLikeContainer.textContent = `Feels like: ${weatherObject.feelsLike}`
    humidityContainer.textContent = `Humidity: ${weatherObject.humidity}`
    pressureContainer.textContent = `Pressure: ${weatherObject.pressure}`
    tempContainer.textContent = `Temperature: ${weatherObject.temp}`
  }

  return {
    getData,
    showData,
  }
})()
