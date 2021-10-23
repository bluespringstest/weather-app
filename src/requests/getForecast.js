import axios from "axios";

const getForecast = ({ setLocation, setSelectedDate, setForecasts }) => {
  const endpoint = "https://mcr-codes-weather-app.herokuapp.com/forecast";
  axios.get(endpoint).then((response) => {
    setForecasts(response.data.forecasts);
    setLocation(response.data.location);
    setSelectedDate(response.data.forecasts[0].date);
  });
};

export default getForecast;
