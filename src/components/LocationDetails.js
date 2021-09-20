import React from "react";
import PropType from "prop-types";

const LocationDetails = (props) => {
  const {city, country} = props;
    return <h1>{`${city}, ${country}`}</h1>
}

export default LocationDetails.PropType = {
    city: PropType.string.isRequired,
    country: PropType.string.isRequired,
};