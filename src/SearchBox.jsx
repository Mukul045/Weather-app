import React from "react";
import "./SearchBox.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { API_KEY, API_URL } from "./api";

const SearchBox = ({updateInfo}) => {
    let [city, setCity] = React.useState("");
    let [error, setError] = React.useState(false);
    // const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    // const API_KEY = "20775556cc6efeecb9c47d0e981024ef";

    let getWeatherInfo = async (city) => {
        try{
            let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        let result = {
            city: city,
            temp: jsonResponse.main.temp,
            tempMin: jsonResponse.main.temp_min,
            tempMax: jsonResponse.main.temp_max,
            humidity: jsonResponse.main.humidity,
            feelsLike: jsonResponse.main.feels_like,
            weather: jsonResponse.weather[0].description,
        }
        console.log(result);
        return result;
        } catch(err){
            throw err;
        }
    }

    let handleChange = (evt) => {
        setCity(evt.target.value);
        setError(false);
    };

    let handleSubmit = async(evt) => {
        try{
            evt.preventDefault();
        // console.log(`You have searched for ${city}`);
        let newInfo = await getWeatherInfo(city);
        updateInfo(newInfo);
        setCity("");
        } catch(err){
            setError(true);
        }
    };

    return (
        <div className="SearchBox">
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="City Name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br />
                <br />
                <Button variant="contained" type="submit">
                    Search
                </Button>
                {error && <p style={{color: "red"}}>No Such Place Exist!</p>}
            </form>
        </div>
    );
};

export default SearchBox;
