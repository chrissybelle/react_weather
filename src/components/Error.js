import React from "react";
import compass from "../compass.png";
import "./error.css";

class Error extends React.Component {
    render() {
        return (
            <div className="error-warning">
                <img className="error-img" src={compass} alt="error" />
                <div className="error-header"><p>Oops!</p><p>Looks like that wasn't a valid zip code...</p><p>Please try again!</p></div>
            </div>
        );
    }
};

export default Error;