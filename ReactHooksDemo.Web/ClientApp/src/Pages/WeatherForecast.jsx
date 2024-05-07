import { useState, useEffect } from 'react';
import axios from 'axios';


const WeatherTable = () => {

    const [weatherData, setWeatherData] = useState([]);

    useEffect(() => {
        const getWeatherData = async () => {
            const { data } = await axios.get('/api/weatherforecast');
            setWeatherData(data);
        }

        getWeatherData();
    }, []);

    return (
        <div style={{ marginTop: 80 }}>
            <h2>Weather Forecast</h2>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Temperature (°C)</th>
                        <th>Temperature (°F)</th>
                        <th>Summary</th>
                    </tr>
                </thead>
                <tbody>
                    {weatherData.map((item, index) => (
                        <tr key={index}>
                            <td>{new Date(item.date).toLocaleString()}</td>
                            <td>{item.temperatureC}</td>
                            <td>{item.temperatureF}</td>
                            <td>{item.summary}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default WeatherTable;