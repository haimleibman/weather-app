import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_CITIES_URL } from '../staticStore';
import { useSetRecoilState, useRecoilValue, useRecoilState } from 'recoil';
import { Cities, citiesNames, SelectedCity } from '../common/store';
import styles from './AsyncAutocomplete.module.scss';
import { City } from '../models/city';
import Axios from 'axios';

export default function AsynAutocomplete() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [cities, setCities] = useRecoilState<City[]>(Cities);
  const setSelectedCityKey = useSetRecoilState(SelectedCity);

  useEffect((): void => {
    (async () => {
      if (!text)
        return;

      setLoading(true);
      const {data} = await Axios.get(`${GET_CITIES_URL}${text}&language=en-us`);

      setLoading(false);

      setCities(previous => previous.concat(data));
    })();
  }, [setCities, text]);

  return (
    <Autocomplete
      className={styles.autocomplete}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionSelected={(option, value) => {
        setSelectedCityKey({key: option.Key, name: option.LocalizedName});
        return option.LocalizedName === value.LocalizedName
      }}
      getOptionLabel={(option) => option.LocalizedName}
      options={text ? cities : []}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Search a city"
          variant="filled"
          onChange={event => setText(event.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </>
            ),
          }}
        />
      )}
    />
  );
}