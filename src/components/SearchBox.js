import React from "react";

class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            zipcode: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        let input = e.target.value;
        this.setState({
            zipcode: input
        })
        console.log(`zipcode entered: ${this.state.zipcode}`);
    }

    handleClick(e) {
        this.props.searchWeather(this.state.zipcode);
        console.log(`searching.. ${this.state.zipcode}`);
        e.preventDefault();
    }

    render() {
        return (
            <div className="searchBox">
                <input type="text" placeholder="zipcode" onChange={this.handleChange}></input>
                <button onClick={this.handleClick}>Search</button>
            </div>
        );
    }
};

export default SearchBox;