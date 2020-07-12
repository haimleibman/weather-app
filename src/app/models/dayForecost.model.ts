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

export interface DayForecast {
    Date: string,
    Temperature: Temperature,
    Day: VisualProps,
    Night: VisualProps
}