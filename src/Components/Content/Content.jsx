import './Content.css';


const Content = ({data}) => {
    return (
        <div className='container-content'>
            <div className='city-info'>
                <div>
                    <p>{data?.city?.country}</p>
                    <span>{data?.city?.name}</span>
                </div>
                <p>{Math.floor(data?.list[0]?.main?.temp)}°</p>
                <img src={`http://openweathermap.org/img/wn/${data?.list[0]?.weather[0].icon}@2x.png`} alt="" />
            </div>
            <div className="details">
                <div>
                    <p>Wind Speed</p>
                    <span>{data?.list[0]?.wind?.speed}</span>
                </div>
                <div>
                    <p>feels like</p>
                    <span>{Math.floor(data?.list[0]?.main?.feels_like)}</span>
                </div>
                <div>
                    <p>humidity</p>
                    <span>{data?.list[0]?.main?.humidity}</span>
                </div>
                <div>
                    <p>pressure</p>
                    <span>{data?.list[0]?.main?.humidity}</span>
                </div>
            </div>
        </div>
    )
}

export default Content;