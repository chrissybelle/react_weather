import React from "react";
import SearchBox from "./components/SearchBox";
import CardContainer from "./components/CardContainer";
import Weather from "./utils/Weather";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            results: []
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
    }

    render() {
        return (
            <div className="main-content">
                <SearchBox searchWeather={this.searchWeather} />
                <CardContainer results={this.state.results} />
            </div>
        );
    }
};

export default App;
