import { useCallback, useEffect, useState } from "react";
import { Weather_Service } from '@/services'
import { debounce } from 'lodash'

const service: Weather_Service = Weather_Service.get_service();

const useSearchWeather = (
    set_loading: (state: boolean) => void,
    forecast_weather: (city: string) => Promise<void>,
    set_show_search:() => void
) => {

    const [location, set_location]: any = useState([]);

    const search_weather = useCallback(
        async (city: string) => {
            const locations: string[] = []
            try {
                const rs = await service.search(city);
                rs.data.map((cities) => {
                    const { country, name } = cities;
                    locations.push(`${country}, ${name}`)
                });
                set_location(locations);

            } catch (error) {
                console.error(error)
            }
        },
        []
    )

    const change_search = (city: string) => {
        if (city !== "") search_weather(city)
    }

    const handle_search_weather = useCallback(debounce(change_search, 1200), []);

    const hand_location = (location: string) => {
        const city = location.split(", ")
        forecast_weather(city[1]);
        cleanAll();
    };

    const cleanAll = () => {
        set_location([])
        set_show_search();
    }

    return { location, handle_search_weather, hand_location };

}
export { useSearchWeather }