import { useCallback, useEffect, useState } from "react";
import { Weather_Service } from '@/services'

const service: Weather_Service = Weather_Service.get_service();

const useForecastWeather = (
    set_loading: (state: boolean) => void,
    set_show_search: () => void
) => {

    const [weather, set_weather] = useState({
        country: "",
        name: "",
        temp_c: 0,
        text: "",
        icon: "",
        wind_kph: 0,
        humidity: 0,
        forecastday: []
    });

    useEffect(() => {
        forecast_weather("Portoviejo");
    }, [])

    const forecast_weather = useCallback(
        async (city: string) => {
            set_loading(true);
            try {
                const rs = await service.forecast(city, 7);
                const { country, name } = rs.data.location;
                const { temp_c, wind_kph, humidity } = rs.data.current;
                const { text, icon } = rs.data.current.condition;
                const { forecastday } = rs.data.forecast;
                set_weather({
                    country,
                    name,
                    temp_c,
                    text,
                    icon,
                    wind_kph,
                    humidity,
                    forecastday
                })
            } catch (error) {
                console.error(error)
            }
            set_loading(false);
        },
        []
    )
    const hand_submit = (city: string) => {
        forecast_weather(city);
        cleanAll();
    }
    const cleanAll = () => {
        set_show_search();
    }
    return { weather,hand_submit,forecast_weather};
}
export { useForecastWeather }