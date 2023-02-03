function fiveDaysForecast() {
  fetch(
    'https://api.openweathermap.org/data/2.5/forecast?q=Zagreb&appid=c1bac60a85c422dd638979d5502c6074',
    {
      mode: 'cors',
    }
  )
    .then(function (response) {
      return response.json()
    })
    .then(function (response) {
      return response
    })
}
