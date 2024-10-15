import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Searchbox({ updateInfo }) {
    const [city, setCity] = useState("");
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false); // Added loading state

    const API_Key = "4a2039ff510af0e2c3aab64db5a5d7ab";

    const getweatherInfo = async () => {
        try {
            const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
            setLoading(true); // Start loading
            let response = await fetch(API_URL);
            let jsonResponse = await response.json();

            console.log(jsonResponse); // Log the API response

            if (jsonResponse.cod === 200 && jsonResponse.main) {
                return {
                    city: city,
                    temp: jsonResponse.main.temp,
                    tempmin: jsonResponse.main.temp_min,
                    tempmax: jsonResponse.main.temp_max,
                    humidity: jsonResponse.main.humidity,
                    feelslike: jsonResponse.main.feels_like,
                    weather: jsonResponse.weather[0].description
                };
            } else {
                throw new Error(jsonResponse.message || "City not found or invalid response structure");
            }
        } catch (err) {
            console.error("Error fetching weather data:", err);
            return null;
        } finally {
            setLoading(false); // End loading
        }
    };

    const handleChange = (event) => {
        setCity(event.target.value);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setError(false);
        let newInfo = await getweatherInfo();
        if (newInfo) {
            updateInfo(newInfo);
            setCity(""); // Clear input
        } else {
            setError(true); // Show error
        }
    };

    return (
        <div>
            <h3>Search for weather</h3>
            <form onSubmit={handleSubmit}>
                <TextField
                    id="city"
                    label="city-name"
                    variant="outlined"
                    required
                    value={city}
                    onChange={handleChange}
                />
                <br /><br />
                <Button variant="contained" type="submit" disabled={loading}>
                    {loading ? "Searching..." : "Search"} {/* Display loading state */}
                </Button>
                {error && <p>No such place exists</p>}
            </form>
        </div>
    );
}