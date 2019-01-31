import React from "react";
import "./card.css";

class Card extends React.Component {

    render() {

        console.log(`card.js: ${this.props.weather.temp}`);
        const extractedDate = this.props.weather.id.slice(0, 11); //removes timestamp from API data
        console.log(`extracted: ${extractedDate}`);
        const formattedDate = extractedDate.slice(5, 10) + "-" + extractedDate.slice(0, 5).slice(0, -1); //reformats date from YYYY-MM-DD to MM-DD-YYYY
        console.log(`formatted: ${formattedDate}`);
        const weatherDate = new Date(formattedDate);
        console.log(`WEATHER DAY ${weatherDate}`);
        const daysOfTheWeek = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
        let weatherDay = daysOfTheWeek[weatherDate.getDay()];
        console.log(`final day: ${weatherDay}`);
       



        return (
            <div className="card-day">
                <p>{formattedDate}</p>
                <p>{weatherDay}</p>
                <p>{this.props.weather.temp}°F</p>
                <img src={process.env.PUBLIC_URL + "/icons/" + this.props.weather.icon + ".png"} alt={this.props.weather.weather} />
                <p>{this.props.weather.weather}</p>
                <p>{this.props.weather.details}</p>
                {/* {this.props.dayOfTheWeek.map(day => {
                    return (
                        <div>
                            <div className="card-day" key={day}>
                                <p className={day}>{day}</p>
                            </div>
                            <div className="card-high">
                                {this.props.tempHigh.map(temp => {
                                    return <p className={`${day}-high`} key={`${day}-high`}>{temp}</p>
                                })}
                            </div>
                            <div className="card-low">
                                {this.props.tempLow.map(temp => {
                                    return <p className={`${day}-low`} key={`${day}-low`}>{temp}</p>
                                })}
                            </div>
                        </div>
                    )
                })} */}
            </div>
        );
    }
};

export default Card;