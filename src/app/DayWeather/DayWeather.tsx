import React from 'react';
import styles from './DayWeather.module.scss';
import { DayWeatherProps } from '../models/dayWeatherProps.model';
import useIconUrl from '../common/iconUrlHook';

const DayWeather = (props: DayWeatherProps) => {
    const iconUrl = useIconUrl(props.iconId);

    return <div className={styles.dayWrather}>
        <header className={styles.header}>{props.header}</header>
        <img src={iconUrl} alt="Weather Icon"/>
        <div>{props.minDegree} | {props.maxDegree}</div>
    </div>
}

export default DayWeather;