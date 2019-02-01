import React from "react";
import SearchBox from "./components/SearchBox";
import CardContainer from "./components/CardContainer";
import Weather from "./utils/Weather";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            searchedState: "",
            searchedCity: ""
        }
        this.searchWeather = this.searchWeather.bind(this);
    }

    searchWeather(input) {
        Weather.search(input).then(results => {
            let dailyResults = [];
            function getDailyResults(array) {
                dailyResults = array.filter((e, i) => i % 8 === 7);
            }
            getDailyResults(results);
            this.setState({
                results: dailyResults
            })
        });
        Weather.getLocation(input).then(results => {
            this.setState({
                searchedState: results.state,
                searchedCity: results.city
            })

        });
    }

    render() {
        return (
            <div className="main-content">
                <SearchBox searchWeather={this.searchWeather} />
                <CardContainer results={this.state.results} searchedCity={this.state.searchedCity} searchedState={this.state.searchedState}/>
            </div>
        );
    }
};

export default App;
