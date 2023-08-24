import { createDiv, createImage, createSpan } from "./create-dom-elements";

function displayHourlyWeather(dayForecast) {
  if (document.querySelector(".hourly-weather-display-container")) {
    document.querySelector(".hourly-weather-display-container").remove();
  }
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
    createSpan(hourForecast.tempC, "", "hourly-weather-display-temp", "celsius")
  );
  hourlyWeatherDisplay.appendChild(
    createImage(hourForecast.condition.icon, "", "weather-icon")
  );
  const forecastTime = hourForecast.time.split(" ")[1];
  hourlyWeatherDisplay.appendChild(createSpan(forecastTime));

  hourlyWeatherDisplay.addEventListener("click", () => {
    displayDetailedWeatherDisplay(hourForecast);
  });
  return hourlyWeatherDisplay;
}

function displayDetailedWeatherDisplay(hourForecast) {
  if (document.querySelector("#detailed-weather-display")) {
    document.querySelector("#detailed-weather-display").remove();
  }
  const main = document.getElementById("main");
  const detailedWeatherDisplay = createDiv("detailed-weather-display");
  main.insertAdjacentElement("beforebegin", detailedWeatherDisplay);
  detailedWeatherDisplay.appendChild(
    createSpan(hourForecast.tempC, "", "detailed-weather-temp", "celsius")
  );
  const wrapper = createDiv("", "wrapper");
  detailedWeatherDisplay.appendChild(wrapper);
  wrapper.appendChild(
    createSpan(
      `Feels like: ${hourForecast.feelTempC}`,
      "",
      "feels-like-temp",
      "celsius"
    )
  );
  wrapper.appendChild(
    createSpan(
      `Chance of rain: ${hourForecast.chanceOfRain}%`,
      "chance-of-rain"
    )
  );
  wrapper.appendChild(
    createSpan(`Wind speed: ${hourForecast.windSpeedKPH}`, "wind-speed")
  );
  wrapper.appendChild(
    createSpan(`Condition: ${hourForecast.condition.text}`, "condition")
  );
}

export { displayHourlyWeather, displayDetailedWeatherDisplay };
