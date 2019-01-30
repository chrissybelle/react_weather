const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;

const Weather = {
    search(zipCode) {
        return fetch(`http://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&APPID=${API_KEY}`)
            .then(res => res.json())
            .then(results => {
                if (results.list) {
                    console.log(`weather.js results: ${results.list}`);
                    return results.list.map(result => {
                        return {
                            id: result.dt_txt,
                            temp: result.main.temp,
                            weather: result.weather[0].main,
                            details: result.weather[0].description,
                            icon: result.weather[0].icon
                        }
                    })
                }
            });
    }
}

export default Weather;