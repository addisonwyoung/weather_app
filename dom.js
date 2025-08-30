export function updateUI(data, mode)
{
  if(mode === "F")
  {
      document.querySelector('.location').textContent = `${data.addy}`.toUpperCase();
      document.querySelector('.temp').textContent = `${data.temp_f}`;
      document.querySelector('.symbol').textContent = `°F`
      document.querySelector('.humidity').textContent = `HUMIDITY: ${data.humidity}%`;
      document.querySelector('.wind-speed').textContent = `WIND SPEED: ${data.wind_mph} MPH`;
      document.querySelector('.feels-like').textContent = `FEELS LIKE: ${data.feelsLike_f} °F`
  }
  else
  {
     document.querySelector('.location').textContent = `${data.addy}`.toUpperCase();
      document.querySelector('.temp').textContent = `${data.temp_c}`;
      document.querySelector('.symbol').textContent = `°C`
      document.querySelector('.humidity').textContent = `HUMIDITY: ${data.humidity}%`;
      document.querySelector('.wind-speed').textContent = `WIND SPEED: ${data.wind_mph} MPH`;
      document.querySelector('.feels-like').textContent = `FEELS LIKE: ${data.feelsLike_c} °C`
  }



}