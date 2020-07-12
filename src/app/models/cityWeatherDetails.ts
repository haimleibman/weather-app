interface Temperature {
    Value: string,
    Unit: string,
    UnitType: number
}

interface TemperatureTypes {
    Metric: Temperature,
    Imperial: Temperature
}

export interface CityWeatherDetails {
    WeatherText: string,
    IsDayTime: string,
    WeatherIcon: number,
    Temperature: TemperatureTypes,
}