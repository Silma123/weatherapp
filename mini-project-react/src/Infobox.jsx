import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./infobox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import SevereColdIcon from '@mui/icons-material/SevereCold';
import WbSunnyIcon from '@mui/icons-material/WbSunny';



export default function InfoBox({weatherInfo}){
    let init_url="https://images.unsplash.com/photo-1722858344552-7acf888a7046?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"
    const Hot_url="https://images.unsplash.com/photo-1504370805625-d32c54b16100?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdCUyMHdlYXRoZXJ8ZW58MHx8MHx8fDA%3D"
    const cold_url="https://images.unsplash.com/photo-1519863436079-8436f74be632?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbGQlMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    const rainy_url="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fHJhaW4lMjB3ZWF0aGVyfGVufDB8fDB8fHww"
    return(
        <div>
            <h1>Weather Info</h1>
            <div className='cdstyle'>
            <Card sx={{ maxWidth: 345 }} >
      <CardMedia
        sx={{ height: 140 }}
        image={ weatherInfo.humidity>80?rainy_url:(weatherInfo.temp>10?Hot_url:cold_url)}
        title="green iguana"
      />
      <CardContent >
        <Typography gutterBottom variant="h5" component="div">
          {weatherInfo.city}{ weatherInfo.humidity>80?<ThunderstormIcon/>:(weatherInfo.temp>10?<WbSunnyIcon/>:<SevereColdIcon/>)}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          <div>Temperature={weatherInfo.temp}&deg;C</div>
          <div>Humidity={weatherInfo.humidity}</div>
          <div>Temperaturemin={weatherInfo.tempmin}&deg;C</div>
          <div>Temperaturemax={weatherInfo.tempmax}&deg;C</div>
          <div>Weather={weatherInfo.weather}</div>
          <div> The weather can be described as <i>{weatherInfo.feelslike}</i></div>
        </Typography>
      </CardContent>
    </Card>
        </div>
        </div>
    )
}