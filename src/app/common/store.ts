import { City } from '../models/city';
import {atom, selector} from 'recoil';


export const Cities = atom<City[]>({
  key: 'cities',
  default: []
});

export const SelectedCity = atom({
  key: 'selectedCity',
  default: {key: '215854', name: 'Tel Aviv'}
});

export const citiesNames = selector({
  key: 'citiesNames',
  get: ({get}) => {
    const citiesTemp: City[] = get(Cities);

    return citiesTemp.map(city => city.LocalizedName);
  },
});