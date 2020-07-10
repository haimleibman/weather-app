import React, { useState } from 'react';
import styles from './Navigation.module.scss';
import {Favorite, LocationOn} from '@material-ui/icons';
import { Button, ButtonGroup } from '@material-ui/core';
import classNames from 'classnames';

const Navigation = () => {
    const [value, setValue] = useState('Local Weather');

    return <ButtonGroup className={styles.navButtonsContainer} variant="text" color="inherit" aria-label="text primary button group">
    <Button className={classNames(styles.navButton, {[styles.selected]: value === 'Local Weather'})} onClick={() => setValue('Local Weather')}><LocationOn/><p className={styles.text}>Local Weather</p></Button>
    <Button className={classNames(styles.navButton, {[styles.selected]: value === 'Favorite'})} onClick={() => setValue('Favorite')}><Favorite/><p className={styles.text}>Favorite</p></Button>
  </ButtonGroup>
}

export default Navigation;