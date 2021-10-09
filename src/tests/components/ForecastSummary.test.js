import React from "react";
import { render } from "@testing-library/react";
import ForecastSummary from "../../components/ForecastSummary";

describe("ForecastSummary", () => {
    // const date = new Date('Tuesday 2 April');
    const validProps = {
        date: 1111111,
        description: "Stub Description",
        icon: "stubIcon",
        temperature: {
            min: 12,
            max: 22,
        },
    };
    
    it("renders the objects correctly in the virtual DOM", () => {
        const { asFragment } = render(
            <ForecastSummary 
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperature={validProps.temperature}
            />
        );
        expect(asFragment()).toMatchSnapshot();
    });
    it("renders the correct values for the props", () => {
        const { getByText, getByTestId } = render(
            <ForecastSummary 
            date={validProps.date}
            description={validProps.description}
            icon={validProps.icon}
            temperature={validProps.temperature}
            />
        );
        expect(getByText('Thu 4th Jan')).toHaveClass("forecast-summary__date");
        expect(getByText("Stub Description")).toHaveClass("forecast-summary__description");
        expect(getByTestId("forecast-icon")).toHaveClass("forecast-summary__icon");
        expect(getByText("22°C")).toHaveClass("forecast-summary__temperature");
    });
});