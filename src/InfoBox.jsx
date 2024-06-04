import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import ThunderstormIcon from "@mui/icons-material/Thunderstorm";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";

// Define the infoBox component
export default function infoBox({ info }) {
  // Define the INIT_URL, HOT_URL, COLD_URL, and RAIN_URL constants
  let INIT_URL =
    "https://cdn.pixabay.com/photo/2015/07/05/10/18/tree-832079_1280.jpg";
  const HOT_URL =
    "https://cdn.pixabay.com/photo/2015/12/29/23/17/mountains-1113547_1280.jpg";
  const COLD_URL =
    "https://cdn.pixabay.com/photo/2015/10/20/14/12/cabin-997781_1280.jpg";
  const RAIN_URL =
    "https://cdn.pixabay.com/photo/2020/08/30/09/28/buildings-5528981_1280.jpg";

  // Render the infoBox component
  return (
    <>
      <div className="infoBox">
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            sx={{ height: 140 }}
            image={
              info.Humidity > 80
                ? RAIN_URL
                : info.temp > 13
                ? HOT_URL
                : COLD_URL
            }
            title="green iguana"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {info.city}{" "}
              {info.Humidity > 80 ? (
                <ThunderstormIcon />
              ) : info.temp > 13 ? (
                <WbSunnyIcon />
              ) : (
                <AcUnitIcon />
              )}
            </Typography>
            <Typography
              variant="body2"
              color="text.secondary"
              component={"span"}
            >
              <p>Temprature = {info.temp}&deg;C</p>
              <p>Humidity = {info.Humidity}</p>

              <p>Min Temp = {info.tempMin}&deg;C</p>
              <p>Max Temp = {info.tempMax}&deg;C</p>
              <p>
                The weather can be described as <b> {info.weather}</b> and feels
                like = {info.feelsLike}&deg;C
              </p>
            </Typography>
          </CardContent>
        </Card>
      </div>
    </>
  );
}
