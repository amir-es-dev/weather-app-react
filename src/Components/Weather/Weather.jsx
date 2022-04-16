import Content from "../Content/Content";
import Forecast from "../Forecast/Forecast";
import './Weather.css'

const Weather = ({data}) => {
    return (
       <div className="weather-box">
           <Content data={data} />
           <Forecast data={data}/>
       </div>
    )
}

export default Weather;