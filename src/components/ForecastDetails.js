import React from "react";
import PropTypes from "prop-types";
import moment from "moment";

const ForecastDetails = ({ forecast }) => {
  const { date, humidity, temperature, wind } = forecast;

  return (
    <div className="forecast-details">
      <h3 className="forecast-details__date">
        {moment(date).format("ddd Do MMM")}
      </h3>
      <p className="forename-details__temperature">
        <strong>Max Temperature: </strong>
        {temperature.max}
        &deg;C
      </p>
      <p className="forecast-details__temperature">
        <strong>Min Temperature: </strong>
        {temperature.min}
        &deg;C
      </p>
      <p className="forecast-details__humidity">
        <strong>Humidity: </strong>
        {`${humidity}%`}
      </p>
      <p className="forecast-details__humidity">
        <strong>Humidity: </strong>
        {`${wind.speed}mph`}
      </p>
    </div>
  );
};

export default ForecastDetails;

ForecastDetails.propTypes = {
  forecast: PropTypes.shape({
    date: PropTypes.number,
    humidity: PropTypes.number,
    temperature: PropTypes.shape({
      min: PropTypes.number,
      max: PropTypes.number,
    }),
    wind: PropTypes.shape({
      speed: PropTypes.number,
      direction: PropTypes.string,
    }),
  }).isRequired,
};
