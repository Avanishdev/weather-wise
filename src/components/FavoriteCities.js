import React, { useEffect } from 'react';
import { removeFavorite, getFavorites } from '../services/favoriteService';

function FavoriteCities({ setCity, favorites, setFavorites }) {
    useEffect(() => {
        fetchFavorites();
    }, []);

    const fetchFavorites = async () => {
        const favs = await getFavorites();
        setFavorites(favs);
    };

    // const handleAddFavorite = async (city) => {
    //     await addFavorite(city);
    //     fetchFavorites();
    // };

    const handleRemoveFavorite = async (id) => {
        await removeFavorite(id);
        fetchFavorites();
    };

    return (
        <div className="favorites">
            <h3><span>Favorite Cities</span> {favorites.length > 2 && <span className='flashing-text'>Scroll Up !</span>}</h3>
            <ul className='favorites-list'>
                {favorites?.map((fav) => (
                    <li key={fav?.weatherData?.id} onClick={() => setCity(fav?.weatherData?.name)}>
                        <span className="city-name">{fav?.weatherData?.name}</span>
                        <span className="temperature">{fav?.weatherData?.main?.temp}°</span>
                        <span className="description">{fav?.weatherData?.weather[0].description}</span>
                        <button onClick={() => handleRemoveFavorite(fav?.id)}>Remove</button>
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default FavoriteCities;
