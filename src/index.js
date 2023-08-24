import "./style.css";
import { getWeather } from "./get-weather";
import { pageLoad } from "./page-load";
import {
  displayDetailedWeatherDisplay,
  displayHourlyWeather,
} from "./weather-display";
import { createSpan } from "./create-dom-elements";

async function createForecastArray(location) {
  const weather = await getWeather(location);
  if (weather.error) {
    if (weather.error.code === 1006) {
      locationErrorMsg();
    }
    console.log(`Error fetching your data: ${weather.error.message}`);
    return;
  }
  let forecast = {};
  const currentDate = new Date();
  const currentHour = roundMinutes(currentDate).getHours();

  weather.forecast.forecastday.forEach((day, index) => {
    forecast[`day${index}`] = day;
  });
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
  return forecastArray;
}

function roundMinutes(date) {

  date.setHours(date.getHours() + Math.round(date.getMinutes()/60));
  date.setMinutes(0, 0, 0); // Resets also seconds and milliseconds

  return date;
}


export {
  createForecastArray
}

function locationErrorMsg() {
  const locationErrorMsg = createSpan(
    "No location found, please provide a city or region name",
    "",
    "no-location-found-error"
  );
  document
    .querySelector(".search-bar-container")
    .insertAdjacentElement("beforeend", locationErrorMsg);
  setTimeout(() => {
    locationErrorMsg.classList.add("fade-out");
  }, 2000);
  locationErrorMsg.addEventListener("animationend", () => {
    locationErrorMsg.remove();
  });
}

pageLoad();
createForecastArray("auto:ip");
