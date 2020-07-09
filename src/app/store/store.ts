import { City } from './../models/city';
import {atom, selector} from 'recoil';


export const cities = atom({
  key: 'cities',
  default: []
});

export const citiesNames = selector({
  key: 'citiesNames',
  get: ({get}) => {
    const citiesTemp: City[] = get(cities);

    return citiesTemp.map(city => city.LocalizedName);
  },
});