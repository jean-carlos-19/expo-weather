import { useCallback, useEffect, useState } from 'react';
import { Weather_Service } from '@/services';
import { WeatherModel } from '@/models';

const service: Weather_Service = Weather_Service.get_service();

const useForecastWeather = (
 setLoading: (state: boolean) => void,
 setShowSearch: () => void,
) => {
 const [weather, setWeather] = useState<WeatherModel>();

 useEffect(() => {
  forecastWeather('Portoviejo');
 }, []);

 const forecastWeather = useCallback(async (city: string) => {
  setLoading(true);
  try {
   const rs = await service.forecast(city, 7);
   const { country, name } = rs.data.location;
   const { temp_c, wind_kph, humidity } = rs.data.current;
   const { text, icon } = rs.data.current.condition;
   const { forecastday } = rs.data.forecast;
//    setWeather();
  } catch (error) {
   console.error(error);
  }
  setLoading(false);
 }, []);
 const handSubmit = (city: string) => {
  forecastWeather(city);
  cleanAll();
 };
 const cleanAll = () => {
  setShowSearch();
 };
 return { weather, handSubmit, forecastWeather };
};
export { useForecastWeather };
