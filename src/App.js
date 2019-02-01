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
            searchedCity: "",
            error: false
        }
        this.searchWeather = this.searchWeather.bind(this);
    }

    componentWillMount() {
        console.log("Thanks for checking out my app! I built this using the OpenWeatherMap API and the React.js library. Please check out my github (https://github.com/chrissybelle) for other projects and feel free to add me on LinkedIn (https://linkedin.com/in/christabellec/)!");
        console.log("-cbelle");
    }


    searchWeather(input) {
        Weather.search(input).then(results => {
            console.log(`app.js ${results}`);
            if (results !== "404") {
                console.log("searching...");
                let dailyResults = [];
                function getDailyResults(array) {
                    dailyResults = array.filter((e, i) => i % 8 === 7);
                }
                getDailyResults(results);
                this.setState({
                    results: dailyResults,
                    error: false
                })
            } else if (results === "404") {
                this.setState({
                    error: true
                })
            }
        });
        Weather.getLocation(input).then(results => {
            console.log(`zip results ${results}`);
            if (results.error_code !== 404) {
                console.log("locating...");
                this.setState({
                    searchedState: results.state,
                    searchedCity: results.city
                })
            }
        });
    }

    render() {
        return (
            <div className="main-content">
                <SearchBox searchWeather={this.searchWeather} />
                <CardContainer results={this.state.results} searchedCity={this.state.searchedCity} searchedState={this.state.searchedState} error={this.state.error} />
            </div>
        );
    }
};

export default App;
