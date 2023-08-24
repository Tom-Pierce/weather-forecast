async function getWeather(location) {
  try {
    const weatherData = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=68e2440c2c1f4c7aa91163912232208&q=${location}&days=3`,
      { mode: "cors" }
    );
    const weatherJSON = await weatherData.json();
    
    return weatherJSON;
  } catch (error) {
    console.log("Error fetching weather data", error);
  }
}



export { getWeather };
