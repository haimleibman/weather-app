import React, { useEffect, useState } from 'react';
import { useRecoilValue } from 'recoil';
import { SelectedCity } from '../common/store';
import Axios from 'axios';
import { GET_5DAY_WEATHER_URL_PREFIX, GET_5DAY_WEATHER_URL_SUFFFIX } from '../staticStore';
import DayWeather from '../DayWeather/DayWeather';
import { DayWeatherProps } from '../models/dayWeatherProps.model';
import styles from './Forecasts.module.scss';

interface TemperatureProps {
    Value: string,
    Unit: string
}

interface VisualProps {
    Icon: number,
    IconPhrase: string
}

interface Temperature {
    Minimum: TemperatureProps,
    Maximum: TemperatureProps
}

interface DayForecast {
    Date: string,
    Temperature: Temperature,
    Day: VisualProps,
    Night: VisualProps
}

const Forecasts = () => {
    const selectedCity = useRecoilValue(SelectedCity);
    const [days, setDays] = useState<DayForecast[]>([]);

  useEffect((): void => {
    (async () => {
      const {data} = await Axios.get(`${GET_5DAY_WEATHER_URL_PREFIX}${selectedCity.key}${GET_5DAY_WEATHER_URL_SUFFFIX}`);

      setDays(data["DailyForecasts"]);
    })();
  }, [selectedCity]);


  const convertDayDateToWaetherProps = (props: DayForecast): DayWeatherProps => {
      return {
          header: props.Date.substring(5,10),
          iconId: props.Day.Icon,
          maxDegree: props.Temperature.Maximum.Value,
          minDegree: props.Temperature.Minimum.Value
      };
  }

  return <div className={styles.forecasts}>
        {days.map(day => {
            const weatherProps = convertDayDateToWaetherProps(day);
            return <DayWeather {...weatherProps} /> 
        })}
    </div> 
}

export default Forecasts;