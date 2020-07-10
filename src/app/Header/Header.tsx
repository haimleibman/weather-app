import React from 'react';
import styles from './Header.module.scss';
import {AppBar} from '@material-ui/core';
import Navigation from '../Navigation/Navigation';

const Header = () => {
    return <AppBar position="static" className={styles.header}>
        <div className={styles.title}>
            Weather App
        </div>

        <Navigation />
    </AppBar>
}

export default Header;