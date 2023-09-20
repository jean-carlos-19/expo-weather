import React, { useState } from 'react';
import { View, Text, Image, ScrollView } from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/outline';
import { weatherImages } from '@/assets';
import { theme } from '@/atomic/theme';
import { forecastProps } from '@/types';
import { WeaterImage } from './WeaterImage';
import { DegreeCelcius } from './DegreeCelcius';
import { Stats } from './Stats';
import { Estimation } from './Estimation';
import { Location } from './Location';

const Forecast = (props: forecastProps) => {
 const { data } = props;
 const { country, name, tempCelcius, text, icon, windKph, humidity, forecastday } =
  data;
 const [img, set_img] = useState('other');
 return (
  <View className="mx-4 flex justify-around flex-1 mb-2">
   <Location country={country} name={name}  />
   <WeaterImage />
   <DegreeCelcius tempCelcius={tempCelcius} text={text} />
   <Stats humidity={humidity} windKph={windKph} />
   <Estimation />
  </View>
 );
};

export { Forecast };
