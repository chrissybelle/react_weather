import React from "react";
import "./card.css";

class Card extends React.Component {
    render() {
        console.log(`card.js: ${this.props.weather.temp}`);

        return (
            <div className="card-day">
                <p>{this.props.weather.id.slice(0, 11)}</p>
                <p>{this.props.weather.temp}</p>
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