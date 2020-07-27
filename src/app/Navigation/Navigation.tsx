import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import {Favorite, LocationOn} from '@material-ui/icons';
import { Button, ButtonGroup } from '@material-ui/core';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

const Navigation = () => {
    const [value, setValue] = useState('Local Weather');

    return <ButtonGroup className={styles.navButtonsContainer} variant="text" color="inherit" aria-label="text primary button group">
    <Button className={classNames(styles.navButton, {[styles.selected]: value === 'Local Weather'})} onClick={() => setValue('Local Weather')}>
      <Link to='/Haim-Leybman-8-7-2020/home'>
        <LocationOn/>
        <p className={styles.text}>Local Weather</p>
      </Link>
    </Button>
    <Button className={classNames(styles.navButton, {[styles.selected]: value === 'Favorite'})} onClick={() => setValue('Favorite')}>
      <Link to='/Haim-Leybman-8-7-2020/favorites'>
        <Favorite/>
        <p className={styles.text}>Favorite</p>
      </Link>
    </Button>
  </ButtonGroup>
}

export default Navigation;