import React from "react";
import "./searchBox.css";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: "zipcode"
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let input = e.target.value;
        this.setState({
            zipcode: input
        })
    }

    handleClick(e) {
        this.props.searchWeather(this.state.zipcode);
        e.preventDefault();

    }

    render() {
        return (
            <div className="searchbox">
                <input className="searchbox-input" type="text" placeholder={this.state.zipcode} onChange={this.handleChange}></input>
                <button className="searchbox-button" onClick={this.handleClick}>Search</button>
            </div>
        );
    }
};

export default SearchBox;