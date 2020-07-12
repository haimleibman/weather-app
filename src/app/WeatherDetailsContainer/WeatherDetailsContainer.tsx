import React from 'react';
import styles from './WeatherDetailsContainer.module.scss';
import { Paper } from '@material-ui/core';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecasts from '../Forecasts/Forecasts';
import { FavoriteBorder, Favorite } from '@material-ui/icons';
import { useRecoilState, useRecoilValue } from 'recoil';
import { Favorites, SelectedCity } from '../common/store';
import { City } from '../models/city';


export const WeatherDetailsContainer = () => {
    const [favorites, setFavorites] = useRecoilState(Favorites);
    const currentCity = useRecoilValue(SelectedCity);

    const upsertFavorites = () => {
        const tempFavorites: City[] = [...favorites, currentCity];
        const newFavorites: City[] = favorites.length < 5 ? tempFavorites : (() => {
            tempFavorites.shift();
            return tempFavorites;
        })();
        setFavorites(newFavorites);
    }

    const deleteFromFavorites = () => {
        const withoutCurrentCity = favorites.filter(_ => _.Key !== currentCity.Key)
        setFavorites(withoutCurrentCity);
    }

    return <div className={styles.container}>
        <div className={styles.favoritesButton}>
            {favorites.includes(currentCity) ? 
                <Favorite onClick={deleteFromFavorites}/>
                : <FavoriteBorder onClick={upsertFavorites}/>
            }
        </div>
        <CurrentWeather />
        <Forecasts />
    </div>
};
