import axios from 'axios';

const API_KEY = process.env.REACT_APP_API_KEY;

export const getWeather = async (city, unit) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/weather?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return response.data;
};

export const getForecast = async (city, unit) => {
    const response = await axios.get(
        `${process.env.REACT_APP_API_URL}/forecast?q=${city}&units=${unit}&appid=${API_KEY}`
    );
    return response.data;
};
