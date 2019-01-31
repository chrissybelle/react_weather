import React from "react";
import Card from "./Card";
import "./cardContainer.css";
import landingImg from "../landing.png";

class CardContainer extends React.Component {
    render() {
        console.log(`cardcontainer.js: ${this.props.results}`);
        return (
            this.props.results[1] ?

                <div className="card-container">
                    {this.props.results.map(result => {
                        return <Card weather={result} key={result.id} />
                    })}
                </div>

                :

                <div className="landing">
                    <img className="landing-img" src={landingImg} alt="weather_search"/>
                    <h1 className="landing-header">Weather Search</h1>
                </div>

        );
    }
};


export default CardContainer;
