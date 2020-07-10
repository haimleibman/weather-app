import { City } from './../models/city';
import {atom, selector} from 'recoil';


export const Cities = atom<City[]>({
  key: 'cities',
  default: []
});

export const SelectedCityKey = atom({
  key: 'selectedCity',
  default: '215854'
});

export const citiesNames = selector({
  key: 'citiesNames',
  get: ({get}) => {
    const citiesTemp: City[] = get(Cities);

    return citiesTemp.map(city => city.LocalizedName);
  },
});