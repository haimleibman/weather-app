import React from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import AsyncAutocomplete from '../AsyncAutocomplete/AsyncAutocomplete';
import { WeatherDetailsContainer } from '../WeatherDetailsContainer/WeatherDetailsContainer';

const Layout = () => {
    return <div className={styles.root}>
        <Header/>
        <div className={styles.body}>
            <AsyncAutocomplete/>
            <WeatherDetailsContainer/>
        </div>
    </div>
}

export default Layout;