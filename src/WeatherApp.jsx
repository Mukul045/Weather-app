import React, { useEffect } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import Footer from "./footer";
import { API_KEY, API_URL } from "./api";

const WeatherApp = () => {
    const [weatherinfo, setWeatherInfo] = React.useState(null);

    const getWeatherInfo = async (city) => {
        try {
            let response = await fetch(
                `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
            );
            let jsonResponse = await response.json();
            let result = {
                city: city,
                temp: jsonResponse.main.temp,
                tempMin: jsonResponse.main.temp_min,
                tempMax: jsonResponse.main.temp_max,
                humidity: jsonResponse.main.humidity,
                feelsLike: jsonResponse.main.feels_like,
                weather: jsonResponse.weather[0].description,
            };
            return result;
        } catch (err) {
            return null;
        }
    };

    useEffect(() => {
        const fetchDefault = async () => {
            let delhiWeather = await getWeatherInfo("Delhi");
            if (delhiWeather) {
                setWeatherInfo(delhiWeather);
            }
        };
        fetchDefault();
    }, []);

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    };
    return (
        <div style={{ textAlign: "center" }}>
            <h2>Weather App </h2>
            <SearchBox updateInfo={updateInfo} />
            {weatherinfo ? <InfoBox info={weatherinfo} /> : <p>Loading...</p>}

            <Footer />
        </div>
    );
};

export default WeatherApp;
