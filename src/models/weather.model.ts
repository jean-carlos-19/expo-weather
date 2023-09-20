interface WeatherModel {
    country: string,
    name: string,
    tempCelcius: number,
    text: string,
    icon: string,
    windKph: number,
    humidity: number,
    forecastday: [],
}
export type { WeatherModel };
