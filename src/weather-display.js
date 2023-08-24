import { createDiv, createImage, createParagraph } from "./create-dom-elements";

function displayHourlyWeather(dayForecast) {
  const main = document.getElementById("main");
  const hourlyWeatherDisplayContainer = createDiv(
    "",
    "hourly-weather-display-container"
  );
  dayForecast.forEach((hour) => {
    hourlyWeatherDisplayContainer.appendChild(createHourlyWeatherDisplay(hour));
  });
  main.appendChild(hourlyWeatherDisplayContainer);
}

function createHourlyWeatherDisplay(hourForecast) {
  const hourlyWeatherDisplay = createDiv("", "hourly-weather-display");
  hourlyWeatherDisplay.appendChild(
    createParagraph(
      `${hourForecast.tempC}°C`,
      "",
      "hourly-weather-display-temp"
    )
  );
  hourlyWeatherDisplay.appendChild(
    createImage(hourForecast.condition.icon, "", "weather-icon")
  );
  const forecastTime = hourForecast.time.split(" ")[1];
  hourlyWeatherDisplay.appendChild(createParagraph(forecastTime));
  return hourlyWeatherDisplay;
}
export { displayHourlyWeather };
