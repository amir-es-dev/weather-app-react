import axios from 'axios';
import { useEffect, useState } from 'react';
import './Input.css';

const Input = ({setData}) => {
    const [query, setQuery] = useState('tehran');

    const token = '10e500a2733b2361f1e74acf08b3cccc';


    const getData = async () => {
        if(!query) return;
        const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=${query}&appid=${token}&units=metric&cnt=7`);
        console.log(response.data);
        setData(response.data);
        setQuery('')
    }

    useEffect(() => {
        getData();
    }, [])
 
    
    
    return (
        <div className='input-box'>
            <input value={query} placeholder='search the city name' type="text" onChange={(e) => setQuery(e.target.value)  } />
            <button onClick={getData}>Check Weather</button>
        </div>
    )
}

export default Input;