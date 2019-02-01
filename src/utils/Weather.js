const WEATHER_API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
const ZIP_API_KEY = process.env.REACT_APP_ZIPCODE_API_KEY;

const Weather = {
    search(zipCode) {
        return fetch(`https://api.openweathermap.org/data/2.5/forecast?zip=${zipCode}&units=imperial&APPID=${WEATHER_API_KEY}`)
            .then(res => res.json())
            .then(results => {
                if (results.list) {
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
    },
    
    getLocation(zipcode) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://www.zipcodeapi.com/rest/${ZIP_API_KEY}/info.json/${zipcode}/degrees`)
            .then(res => res.json())
            .then(results => {
                if (results) {
                    return results;
                } 
            });
    }
}

export default Weather;