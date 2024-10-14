import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function Searchbox({updateInfo}){
    let [city,setCity]=useState("");
    let[error,setError]=useState(false);
    
    const API_Key="4a2039ff510af0e2c3aab64db5a5d7ab";
    const getweatherInfo = async () => {
        try {
            // Construct the API URL dynamically using the entered city
            const API_URl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_Key}&units=metric`;
            let response = await fetch(API_URl);
            let jsonResponse = await response.json();
    
            // Log the API response for debugging
            console.log(jsonResponse);
    
            // Ensure that the response is valid (API code 200)
            if (jsonResponse.cod === 200 && jsonResponse.main) {
                // Return the weather object to be used
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
                // If the API response is invalid (e.g., city not found)
                throw new Error("City not found or invalid response structure");
            }
        } catch (err) {
            console.error("Error fetching weather data:", err);
            return null;
        }
    };
    const handlechange=(event)=>{
        setCity(event.target.value);
    }
    const handleSubmit = async (event) => {
        event.preventDefault();  // Prevent form submission default behavior
        setError(false);         // Reset error state
    
        // Fetch the new weather information
        let newInfo = await getweatherInfo();
        if (newInfo) {
            // If the weather information is valid, update the state
            updateInfo(newInfo);
            setCity("");  // Clear the input field
        } else {
            // If there is an error (e.g., invalid city), show the error message
            setError(true);
        }
    };
    return(
        <div>
         <h3>Search for weather</h3>
         <form onSubmit={handleSubmit}>
         <TextField id="city" label="city-name" variant="outlined" required value={city} onChange={handlechange}/>
         <br></br><br></br>
         <Button variant="contained" type="submit">Search</Button>
         {error && <p>No such place exist</p>}
         </form>
        </div>
    )
}