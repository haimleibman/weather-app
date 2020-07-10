import React, { useEffect, useState } from 'react';
import styles from './WeatherDetailsContainer.module.scss';
import { Paper } from '@material-ui/core';
import Axios from 'axios';
import { GET_CITY_WEATHER_URL_SUFFIX, GET_CITY_WEATHER_URL_PREFIX } from '../staticStore';
import { useRecoilValue } from 'recoil';
import { SelectedCityKey } from '../store/store';

interface Temperature {
    Value: string,
    Unit: string,
    UnitType: number
}

interface TemperatureTypes {
    Metric: Temperature,
    Imperial: Temperature
}

interface CityWeatherDetails {
    WeatherText: string,
    IsDayTime: string,
    Temperature: TemperatureTypes,
}

export const WeatherDetailsContainer = () => {
    const [presentCity, setPresentCity] = useState({});
    const cityKey = useRecoilValue(SelectedCityKey);

    useEffect((): void => {
        (async () => {
            const {data} = await Axios.get(`${GET_CITY_WEATHER_URL_PREFIX}${cityKey}${GET_CITY_WEATHER_URL_SUFFIX}`);
            console.table(data);
            setPresentCity(data[0]);
        })()
    }, [cityKey])

    return <Paper className={styles.container}>
        {(presentCity as CityWeatherDetails)?.Temperature?.Metric?.Value}
    </Paper>
};
