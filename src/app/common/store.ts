import { City } from './../models/city';
import { atom } from 'recoil';


export const Cities = atom<City[]>({
  key: 'cities',
  default: []
});

export const SelectedCity = atom<City>({
  key: 'selectedCity',
  default: {Key: '215854', LocalizedName: 'Tel Aviv'}
});

export const Favorites = atom<City[]>({
  key: 'favorites',
  default: []
});