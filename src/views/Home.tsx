import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { Dimensions, View } from 'react-native';
import { useSearch, useSearchWeather, useForecastWeather } from '@/hooks';
import { Background, Forecast, SearchForm } from '@/atomic/component';
import { validationSearch } from '@/validations';
import { Loading } from '@/atomic/element';
import { weatherImages } from '@/assets';

const Home = () => {
 const { height } = Dimensions.get('screen');
 const { search, loading, toogleSearch, setLoading } = useSearch();
 const { weather, handSubmit, forecastWeather } = useForecastWeather(
    setLoading,
  toogleSearch,
 );
 const { location, handleWeather, handleLocation } = useSearchWeather(
  setLoading,
  forecastWeather,
  toogleSearch,
 );
 return (
  <>
   <Loading status={loading} />
   <StatusBar style="light" />
   <View className="flex-1 relative" style={{ height: height }}>
    <Background image={weatherImages.Background}>
     <View className="flex flex-1 pt-5 pb-11">
      <View style={{ height: '7%' }} className="mx-4 relative z-10">
       <SearchForm
        validationSchema={validationSearch}
        handleSubmit={handSubmit}
        showSearch={false}
        location={location}
        handleWeather={handleWeather}
        handleLocation={handleLocation}
        toogleSearch={toogleSearch}
       />
      </View>
      <Forecast data={weather} />
     </View>
    </Background>
   </View>
  </>
 );
};

export { Home };