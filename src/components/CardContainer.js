import React from "react";
import Card from "./Card";
import "./cardContainer.css";

class CardContainer extends React.Component {
    render() {
        console.log(`cardcontainer.js: ${this.props.results}`);
        return (
            <div className="card-container">
                {this.props.results.map(result => {
                    return <Card weather={result} key={result.id}/>
                })}
            </div>
        );
    }
};


export default CardContainer;
