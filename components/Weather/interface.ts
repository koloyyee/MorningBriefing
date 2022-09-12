export interface TempInterface {
    temp: number
    feels_like: number
    temp_min: number
    temp_max: number
    pressure: number
    humidity: number
}

interface IconWeatherInterface {
    weather: IconInterface[]
}

export interface IconInterface {
    id: string
    main: string
    description: string
    icon: string
}