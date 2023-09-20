import React from 'react'
import { Image, ScrollView, Text, View } from 'react-native';
import { CalendarDaysIcon } from 'react-native-heroicons/outline';
import { theme } from '../theme';

{/* forecast for next days */}
const Estimation = () => {
  return (
   <View className="mv-2 space-y-3">
    <View className="flex-row items-center mx-5 space-x-2">
     <CalendarDaysIcon size={22} color={'white'} />
     <Text  className="text-white"> Daily forecast </Text>
    </View>
    <ScrollView
     horizontal
     contentContainerStyle={{ paddingHorizontal: 15 }}
     showsHorizontalScrollIndicator={false}
    >
     {forecastday.map((item, i) => {
      let date = new Date(item.date);
      let day_name = date.toLocaleDateString('en-US', { weekday: 'long' });
      day_name = day_name.split(',')[0];
      return (
       <View
        key={i}
        className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
        style={{ backgroundColor: theme.bg_white(0.15) }}
       >
        {/* <Photo url={"https://" + item.day.condition.icon} className="h-11 w-11" /> */}
        <Image
         className="h-11 w-11"
         source={weatherImages[item.day.condition.text]}
        />
        <Text className="text-white"> {day_name} </Text>
        <Text className="text-white text-xl font-semibold">
         {item.day.avgtemp_c} &#176;
        </Text>
       </View>
      );
     })}
    </ScrollView>
   </View>
  )
}

export {Estimation}
