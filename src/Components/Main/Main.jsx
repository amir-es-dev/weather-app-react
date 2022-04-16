import { useState } from "react"
import Input from "../Input/Input";
import Weather from "../Weather/Weather";
import './Main.css';

const Main = () => {
    const [data, setData] = useState();

    return (
        <div className="main-container">
            <Input setData={setData} />
            {data ? <Weather data={data} /> : null}
        </div>
    )
    
}

export default Main