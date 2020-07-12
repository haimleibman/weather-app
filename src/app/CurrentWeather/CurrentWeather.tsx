import React, { useState, useEffect } from 'react';
import { useRecoilValue } from 'recoil';
import { SelectedCity } from '../common/store';
import Axios from 'axios';
import { GET_CITY_WEATHER_URL_PREFIX, GET_CITY_WEATHER_URL_SUFFIX } from '../staticStore';
import { CityWeatherDetails } from '../models/cityWeatherDetails';
import styles from './CurrentWeather.module.scss';
import useIconUrl from '../common/iconUrlHook';

const CurrentWeather = () => {
    const [presentCity, setPresentCity] = useState({});
    const city = useRecoilValue(SelectedCity);

    useEffect((): void => {
        (async () => {
            const {data} = await Axios.get(`${GET_CITY_WEATHER_URL_PREFIX}${city.key}${GET_CITY_WEATHER_URL_SUFFIX}`);

            setPresentCity(data[0]);
        })()
    }, [city])

    const iconUrl = useIconUrl((presentCity as CityWeatherDetails).WeatherIcon);

    return <div className={styles.currentWeather}>
        <div className={styles.city}>{city.name}</div>
        <img className={styles.icon} src={iconUrl} alt='Waether icon'/>
        <div className={styles.degree}>{(presentCity as CityWeatherDetails)?.Temperature?.Metric?.Value} c</div>
        <div className={styles.description}>{(presentCity as CityWeatherDetails)?.WeatherText}</div>
    </div>
};

export default CurrentWeather;
