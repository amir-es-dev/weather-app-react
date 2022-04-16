import './Forecast.css'

const Forecast = ({data}) => {
    return (
        <div className="container-forecast">
            {
                data.list?.map((item, index) =>(
                    <div key={index} className='hourly-forecast'>
                        <img src={`http://openweathermap.org/img/wn/${item?.weather[0].icon}@2x.png`} alt="" />
                        <p style={{fontWeight:'bold'}}>{item.weather[0].description}</p>
                        <p>{item.dt_txt.slice(11,16)}</p>
                        <span style={{color:"red"}}>{Math.floor(item.main.temp_max)}</span>
                        <span style={{color:"blue"}}>{Math.floor(item.main.temp_min)}</span>
                    </div>
                ))
            }
        </div>
    )
}

export default Forecast;