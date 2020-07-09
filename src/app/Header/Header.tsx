import React from 'react';
import styles from './Header.module.scss';
import {AppBar} from '@material-ui/core';

const Header = () => {
    return <AppBar position="static">
        <div className={styles.title}>
            Weather App
        </div>
    </AppBar>
}

export default Header;