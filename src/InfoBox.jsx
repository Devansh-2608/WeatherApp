import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './InfoBox.css';
import WbSunnyIcon from '@mui/icons-material/WbSunny';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';

export default function InfoBox({info}){
  const INIT_URL = "https://images.unsplash.com/photo-1492011221367-f47e3ccd77a0?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHdlYXRoZXIlMjBhcHB8ZW58MHx8MHx8fDA%3D";

  const HOT_URL = "https://images.unsplash.com/photo-1561473880-3b8b12de0a71?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8aG90JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D";
  const COLD_URL = "https://media.istockphoto.com/id/1089026982/photo/image-of-winter-fog-scene-in-delhi-with-india-gate-as-a-background.jpg?s=612x612&w=0&k=20&c=rXSudGCCelYGe1O4y8Ix3txjVC-UdBlCLa8DIgRr4mg=";
  const RAIN_URL = "https://media.istockphoto.com/id/498063665/photo/rainy-landscape.webp?a=1&b=1&s=612x612&w=0&k=20&c=hOE6L7f7OoSKUW1Q4tR27GoEkOU_ywKJGCvSO77SeZg=";
   return(
    <div className="InfoBox">
        <div className="cardContainer">
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 140 }}
              image= {info.humidity > 75 ? RAIN_URL : info.temp < 20 ? COLD_URL : HOT_URL}
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {info.city} {info.humidity > 75 ? <ThunderstormIcon/> : info.temp < 20 ? <AcUnitIcon/> : <WbSunnyIcon/>}
              </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }} component={"span"}>
                <p>Temprature = {info.temp}&deg;C</p>
                <p>Humidity = {info.humidity}%</p>
                <p>Min Temp = {info.tempMin}&deg;C</p>
                <p>Max Temp = {info.tempMax}&deg;C</p>
                <p>The Weather can be described as <i>{info.weather}</i> and Feels Like ={info.feelslike}&deg;C</p>
              </Typography>
            </CardContent>
        </Card>
      </div>
    </div>
  )
}