import React, { useEffect } from "react";
import "../styles/App.css";
// import PropTypes from "prop-types";
import { useState } from "react/cjs/react.development";
import getForecast from "../requests/getForecast";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import ForecastDetails from "./ForecastDetails";

// Step 2 is to import files into the app and render the components. They need to have return otherwise errors occur.
// changing the component below from this: function App() to: const App = () => makes it into a component that renders components and their props.
// step 4 is to add the data from the props using PropTypes.
// step 5 is to add the data into the component as a prop by stating it as a parameter
const App = () => {
  // the items below are hooks with the default state and newly set set which activates only when prompted
  const [forecasts, setForecasts] = useState([]);
  const [location, setLocation] = useState({ city: "", country: "" });
  const [selectedDate, setSelectedDate] = useState(0);
  const selectedForecast = forecasts.find(
    (forecast) => forecast.date === selectedDate
  );
  useEffect(() => {
    getForecast({ setForecasts, setLocation, setSelectedDate });
  }, []);
  const handleForecastSelect = (date) => {
    setSelectedDate(date);
  };
  return (
    <div className="forecast">
      <LocationDetails city={location.city} country={location.country} />
      <ForecastSummaries
        forecasts={forecasts}
        //  below is the prop that is also a function
        onForecastSelect={handleForecastSelect}
      />
      {selectedForecast && <ForecastDetails forecast={selectedForecast} />}
    </div>
  );
};

// passing in the prop using "<prop /> is the same as passing in  <></>"
export default App;

// App.propTypes = {
//   forecasts: PropTypes.arrayOf(
//     PropTypes.shape({
//       date: PropTypes.number,
//       description: PropTypes.string,
//       icon: PropTypes.string,
//       temperature: PropTypes.shape({
//         max: PropTypes.number,
//         min: PropTypes.number,
//       }),
//     })
//   ).isRequired,
//   location: PropTypes.shape({
//     city: PropTypes.string,
//     country: PropTypes.string,
//   }).isRequired,
// };
