import React from 'react';
import { addFavorite, getFavorites } from '../services/favoriteService';

function WeatherDisplay({ weatherData, forecastData, favorites, setFavorites, unit }) {

    const handleAddFavorite = async (weatherData) => {
        if (weatherData) {
            // const uniqueWeatherData = {
            //     ...weatherData,
            //     uniqueId: `${weatherData.id}-${Date.now()}`
            // };
            await addFavorite(weatherData);
            fetchFavorites();
        }
    };

    const fetchFavorites = async () => {
        const favs = await getFavorites();
        setFavorites(favs);
    };

    const filteredForcastData = forecastData?.list?.filter(item => item.dt_txt.includes('12:00:00'));

    return (
        <div className="weather-display">
            <div className="add-favorite">
                <h2>{weatherData.name}</h2>
                <button onClick={() => handleAddFavorite(weatherData)}>Add to Favorites</button>
                <div className='add-favorite-btn' onClick={() => handleAddFavorite(weatherData)}>+</div>
            </div>
            <p>{weatherData.main.temp}°</p>
            <p>{weatherData.weather[0].description}</p>
            <div className="forecast">
                {filteredForcastData?.map((day, index) => (
                    <div key={day.dt}>
                        <p>{new Date(day.dt * 1000).toDateString()}</p>
                        <p>{day.main.temp}°{unit === 'metric' ? 'C' : 'F'}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default WeatherDisplay;
