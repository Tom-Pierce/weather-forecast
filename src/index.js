import "./style.css";
import { getWeather } from "./get-weather";
import { pageLoad } from "./page-load";
import { displayHourlyWeather } from "./weather-display";

async function createForecastArray() {
  const weather = await getWeather("Dublin");
  let forecast = {};
  weather.forecast.forecastday.forEach((day, index) => {
    forecast[`day${index}`] = day;
  });
  console.log(forecast);
  const dayForecast = createDayForecast(forecast.day0);
  // console.log(dayForecast);
  displayHourlyWeather(dayForecast);

}

function createDayForecast(forecast) {
  let forecastArray = [];
  forecast.hour.forEach((hour, index) => {
    const hourForecast = {
      time: hour.time,
      condition: hour.condition,
      tempC: hour.temp_c,
      tempF: hour.temp_f,
      feelTempC: hour.feelslike_c,
      feelTempF: hour.feelslike_f,
      chanceOfRain: hour.chance_of_rain,
    };
    forecastArray.push(hourForecast);
  });
  console.log(forecastArray);
  return forecastArray;
}
createForecastArray();
pageLoad();
