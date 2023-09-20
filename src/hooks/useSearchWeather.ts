import { useCallback, useEffect, useState } from 'react';
import { Weather_Service } from '@/services';
import { debounce } from 'lodash';

const service: Weather_Service = Weather_Service.get_service();

const useSearchWeather = (
 setLoading: (state: boolean) => void,
 forecastWeather: (city: string) => Promise<void>,
 set_show_search: () => void,
) => {
 const [location, setLocation]: any = useState([]);

 const searchWeather = useCallback(async (city: string) => {
  const locations: string[] = [];
  try {
   const rs = await service.search(city);
   rs.data.map((cities) => {
    const { country, name } = cities;
    locations.push(`${country}, ${name}`);
   });
   setLocation(locations);
  } catch (error) {
   console.error(error);
  }
 }, []);

 const changeSearch = (city: string) => {
  if (city !== '') searchWeather(city);
 };

 const handleWeather = useCallback(debounce(changeSearch, 1200), []);

 const handleLocation = (location: string) => {
  const city = location.split(', ');
  forecastWeather(city[1]);
  cleanAll();
 };

 const cleanAll = () => {
  setLocation([]);
  set_show_search();
 };

 return { location, handleWeather, handleLocation };
};
export { useSearchWeather };
