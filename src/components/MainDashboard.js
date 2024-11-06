import React, { useState, useEffect } from 'react';
import SearchBar from './SearchBar';
import WeatherDisplay from './WeatherDisplay';
import FavoriteCities from './FavoriteCities';
import { getWeather, getForecast } from '../services/weatherService';

function MainDashboard() {
    const [city, setCity] = useState(localStorage.getItem('lastCity') || '');
    const [weatherData, setWeatherData] = useState(null);
    const [forecastData, setForecastData] = useState(null);
    const [unit, setUnit] = useState('metric'); // Celsius by default
    const [favorites, setFavorites] = useState([]);

    useEffect(() => {
        if (city) {
            fetchWeather(city);
        }
    }, [city, unit]);

    const fetchWeather = async (cityName) => {
        const weather = await getWeather(cityName, unit);
        const forecast = await getForecast(cityName, unit);
        setWeatherData(weather);
        setForecastData(forecast);
        localStorage.setItem('lastCity', cityName);
    };

    return (
        <div className="dashboard">
            <SearchBar onSearch={setCity} />
            <button onClick={() => setUnit(unit === 'metric' ? 'imperial' : 'metric')}>
                {unit === 'metric' ? 'Switch to Fahrenheit' : 'Switch to Celsius'}
            </button>
            {weatherData && forecastData && (
                <WeatherDisplay weatherData={weatherData} forecastData={forecastData} favorites={favorites} setFavorites={setFavorites} unit={unit} />
            )}
            <FavoriteCities setCity={setCity} favorites={favorites} setFavorites={setFavorites} unti={unit} />
        </div>
    );
}

export default MainDashboard;
