import React from "react";
import "./card.css";

class Card extends React.Component {

    render() {

        const extractedDate = this.props.weather.id.slice(0, 11); //removes timestamp from API data
        const formattedDate = extractedDate.slice(5, 10) + "-" + extractedDate.slice(0, 5).slice(0, -1); //reformats date from YYYY-MM-DD to MM-DD-YYYY
        const weatherDate = new Date(formattedDate);
        const daysOfTheWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let weatherDay = daysOfTheWeek[weatherDate.getDay()];
        let tempFahrenheit = this.props.weather.temp;
        let tempCelsius = Math.round((tempFahrenheit - 32) * 5 / 9);


        return (
            <div className="card-day">

                <div className="card-header">
                    <h4 className="weather-day">{weatherDay}</h4>
                    <h6 className="weather-date">{formattedDate}</h6>
                </div>

                <div className="temp">
                    <span className="temp-f">{tempFahrenheit}°F</span> | <span className="temp-c">{tempCelsius}°C</span>
                </div>

                <div className="weather-description">
                    <img className="weather-icons" src={process.env.PUBLIC_URL + "/icons/" + this.props.weather.icon + ".png"} alt={this.props.weather.weather} />
                    <p className="general-description">{this.props.weather.weather}</p>
                    <p className="detail-description">{this.props.weather.details}</p>
                </div>
            </div>
        );
    }
};

export default Card;