import axios from 'axios';

const URL = `${process.env.REACT_APP_JSON_SERVER_URL}/favorites`;

export const getFavorites = async () => {
    const response = await axios.get(URL);
    return response.data;
};

export const addFavorite = async (weatherData) => {
    return axios.post(URL, { weatherData: weatherData });
};

export const removeFavorite = async (id) => {
    return axios.delete(`${URL}/${id}`);
};
