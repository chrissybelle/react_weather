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
        });
    }

    handleClick(e) {
        e.preventDefault();
        let search = this.state.zipcode;
        this.props.searchWeather(search);
        this.setState({
            zipcode: "zipcode"
        });
    }

    render() {
        return (
            <form className="searchbox">
                <input className="searchbox-input" type="text" placeholder={this.state.zipcode} pattern="^\d{5}$" onChange={this.handleChange} required></input>
                <button className="searchbox-button" onClick={this.handleClick}>Search</button>
            </form>
        );
    }
};

export default SearchBox;