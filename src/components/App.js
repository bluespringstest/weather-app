import React from "react";
import PropTypes from "prop-types";
import LocationDetails from "./LocationDetails";
import ForecastSummaries from "./ForecastSummaries";
import "../styles/App.css";

// Step 2 is to import files into the app and render the components. They need to have return otherwise errors occur.
// changing the component below from this: function App() to: const App = () => makes it into a component that renders components and their props.
// step 4 is to add the data from the props using PropTypes.
// step 5 is to add the data into the component as a prop by stating it as a parameter
const App = ({ location, forecasts }) => (
  <div className="forecast">
    <LocationDetails city={location.city} country={location.country} />
    <ForecastSummaries forecasts={forecasts} />
  </div>
);

App.propTypes = {
  forecasts: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.number,
      description: PropTypes.string,
      icon: PropTypes.string,
      temperature: PropTypes.shape({
        max: PropTypes.number,
        min: PropTypes.number,
      }),
    })
  ).isRequired,
  location: PropTypes.shape({
    city: PropTypes.string,
    country: PropTypes.string,
  }).isRequired,
};
// passing in the prop using "<prop /> is the same as passing in  <></>"
export default App;
