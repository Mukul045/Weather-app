import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";
import ThunderstormIcon from '@mui/icons-material/Thunderstorm';
import AcUnitIcon from '@mui/icons-material/AcUnit';
import SunnyIcon from '@mui/icons-material/Sunny';
import HOT_URL from "./assets/hot_image.avif"
import COLD_URL from "./assets/cold_image.avif"
import RAIN_URL from "./assets/rain_image.avif"

const InfoBox = ({info}) => {
    // const HOT_URL="https://images.unsplash.com/photo-1422257986712-4f02edc298ce?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHN1bW1lciUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfDB8NHx8fDI%3D";
    // const COLD_URL="https://images.unsplash.com/photo-1454688515140-ce3372b1b6f8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29sZCUyMHdlYXRoZXIlMjBpbWFnZXxlbnwwfDB8NHx8fDI%3D";
    // const RAIN_URL="https://images.unsplash.com/photo-1554221526-e854c9b4d274?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fFJhaW4lMjB3ZWF0aGVyJTIwaW1hZ2V8ZW58MHwwfDR8fHwy";
    return (
        <div className="InfoBox">
            <div className="cardContainer">
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        sx={{ height: 240, borderRadius: 4}}
                        image={info.humidity>80? RAIN_URL : info.temp > 15 ? HOT_URL :  COLD_URL }
                        title="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {info.city}&nbsp;
                            {info.humidity>80? <ThunderstormIcon/> : info.temp > 15 ? <SunnyIcon/> :  <AcUnitIcon/> }
                        </Typography>
                        <Typography
                            variant="body2"
                            sx={{ color: "text.secondary" }}
                            component={"span"}>
                            <p>Temperature = {info.temp}&deg;C</p>
                            <p>Humidity = {info.humidity}</p>
                            <p>Min Temperature = {info.tempMin}&deg;C</p>
                            <p>Max Temperature = {info.tempMax}&deg;C</p>
                            <p>
                                The Weather can be described as{" "}
                                <i>{info.weather}</i> and feels like{" "}
                                {info.feelsLike}&deg;C
                            </p>
                        </Typography>
                    </CardContent>
                </Card>
            </div>
        </div>
    );
};

export default InfoBox;
