const WEATHER_API_KEY: string = 'vcU4ppZOKHGMh6TUIfo2YqOaPh6e8vU6';
const WEATHER_API_URL_BASE: string = 'http://dataservice.accuweather.com/';

export const GET_CITIES_URL: string = `${WEATHER_API_URL_BASE}locations/v1/cities/autocomplete?apikey=${WEATHER_API_KEY}&q=`;

export const GET_CITY_WEATHER_URL_PREFIX: string = `${WEATHER_API_URL_BASE}currentconditions/v1/`;
export const GET_CITY_WEATHER_URL_SUFFIX: string = `?apikey=${WEATHER_API_KEY}&details=true`;
