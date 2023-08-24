import "./style.css";
import { getWeather } from "./get-weather";
import { pageLoad } from "./page-load";
import {
  displayDetailedWeatherDisplay,
  displayHourlyWeather,
} from "./weather-display";

async function createForecastArray() {
  const weather = await getWeather("Dublin");
  let forecast = {};
  const currentDate = new Date();
  const currentHour = roundMinutes(currentDate).getHours();
  console.log(currentHour);

  weather.forecast.forecastday.forEach((day, index) => {
    forecast[`day${index}`] = day;
  });
  console.log(forecast);
  const dayForecast = createDayForecast(forecast.day0);
  displayDetailedWeatherDisplay(dayForecast[currentHour]);
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
      windSpeedKPH: hour.wind_kph,
      windSpeedMPH: hour.wind_mph,
    };
    forecastArray.push(hourForecast);
  });
  console.log(forecastArray);
  return forecastArray;
}

function roundMinutes(date) {

  date.setHours(date.getHours() + Math.round(date.getMinutes()/60));
  date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

  return date;
}

pageLoad();
createForecastArray();
