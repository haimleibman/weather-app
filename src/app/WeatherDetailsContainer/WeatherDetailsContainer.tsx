import React from 'react';
import styles from './WeatherDetailsContainer.module.scss';
import { Paper } from '@material-ui/core';
import CurrentWeather from '../CurrentWeather/CurrentWeather';
import Forecasts from '../Forecasts/Forecasts';


export const WeatherDetailsContainer = () => {

    return <Paper className={styles.container}>
        <CurrentWeather />
        <Forecasts />
    </Paper>
};
