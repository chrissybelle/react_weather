import React from "react";
import Card from "./Card";
import "./cardContainer.css";
import landingImg from "../landing.png";
import Error from "./Error";

class CardContainer extends React.Component {
    render() {

        return (

            <div>

                {this.props.error ?
                    <Error />
                    :
                    this.props.results[1] ?

                        <div>
                            <div className="search-location">
                                <h1 className="weather-location">Weather forecast for {this.props.searchedCity}, {this.props.searchedState}:</h1>
                            </div>

                            <div className="card-container">

                                {this.props.results.map(result => {
                                    return <Card weather={result} key={result.id} />
                                })}
                            </div>
                        </div>
                        :
                        <div className="landing">
                            <img className="landing-img" src={landingImg} alt="weather_search" />
                            <h1 className="landing-header">Weather Search</h1>
                        </div>

                }

            </div>
        )
    }

};

export default CardContainer;
