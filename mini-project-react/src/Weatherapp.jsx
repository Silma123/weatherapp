import Searchbox from './searchbox'
import InfoBox from './Infobox'
import { useState } from 'react'

export default function WeatherApp(){
    const [weatherInfo,setweatherInfo]=useState({
        city:"Dhaka",
        feelslike:24.84,
        temp:25.05,
        tempmin:25.05,
        tempmax:25.05,
        humidity:47,
        weather:"haze"
    })
    let updateInfo=(newInfo)=>{
        setweatherInfo(newInfo);
    }
    return(
        <div>
            <h1>Weather app by delta</h1>
            <Searchbox updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    )
}