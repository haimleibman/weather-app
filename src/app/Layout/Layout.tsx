import React from 'react';
import styles from './Layout.module.scss';
import Header from '../Header/Header';
import AsyncAutocomplete from '../AsyncAutocomplete/AsyncAutocomplete';
import { WeatherDetailsContainer } from '../WeatherDetailsContainer/WeatherDetailsContainer';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';

const Layout = () => {
    return <Router>
        <Switch>
            <Route path="/home">
                <div className={styles.root}>
                    <Header/>
                    <div className={styles.body}>
                        <AsyncAutocomplete/>
                        <WeatherDetailsContainer/>
                    </div>
                </div>
            </Route>
            <Route path="/favorites">
                {/* <Favorites/> */}
            </Route>
            <Route path="*" render={() => <Redirect to="/home" />} />
        </Switch>
    </Router>
}

export default Layout;