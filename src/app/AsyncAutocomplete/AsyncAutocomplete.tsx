import axios from 'axios';
import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import CircularProgress from '@material-ui/core/CircularProgress';
import { GET_COTIRS_URL } from '../staticStore';
import { useSetRecoilState, useRecoilValue } from 'recoil';
import { cities, citiesNames } from '../store/store';
import styles from './AsyncAutocomplete.module.scss';

export default function Asynchronous() {
  const [open, setOpen] = useState(false);
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const setCities = useSetRecoilState(cities);
  const names = useRecoilValue(citiesNames);

  useEffect((): void => {
    (async () => {
      if (!text)
        return;

      setLoading(true);
      const {data} = await axios.get(`${GET_COTIRS_URL}${text}&language=en-us`);

      setLoading(false);

      setCities(cities => cities.concat(data));
    })();
  }, [setCities, text]);

  return (
    <Autocomplete
      className={styles.autocomplete}
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      getOptionSelected={(option, value) => option === value}
      getOptionLabel={(option) => option}
      options={text ? names : []}
      loading={loading}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Asynchronous"
          variant="filled"
          onChange={event => setText(event.target.value)}
          InputProps={{
            ...params.InputProps,
            endAdornment: (
              <React.Fragment>
                {loading ? <CircularProgress color="inherit" size={20} /> : null}
                {params.InputProps.endAdornment}
              </React.Fragment>
            ),
          }}
        />
      )}
    />
  );
}