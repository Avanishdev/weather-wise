import axios from 'axios';

const URL = `${process.env.REACT_APP_JSON_SERVER_URL}/favorites`;

export const getFavorites = async () => {
    try {
        const response = await axios.get(URL);
        return response.data;
    } catch (error) {
        console.error("Error getting favorite:", error);
    }
};

export const addFavorite = async (weatherData) => {
    try {
        const response = await axios.post(URL, { weatherData: weatherData });
        return response.data;
    } catch (error) {
        console.error("Error adding favorite:", error);
    }
};

export const removeFavorite = async (id) => {
    try {
        const response = await axios.delete(`${URL}/${id}`);
        return response.data;
    } catch (error) {
        console.error("Error adding favorite:", error);
    }
};
