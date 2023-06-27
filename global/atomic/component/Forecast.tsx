import { weatherImages } from "@/global/img";
import { theme } from "@/global/theme";
import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import { CalendarDaysIcon } from "react-native-heroicons/outline";
import {Photo} from '@/global/atomic/element'

interface forecast_props {
  data: {
    country: string,
    name: string,
    temp_c: number,
    text: string,
    icon: string,
    wind_kph: number,
    humidity: number,
    forecastday: any[]
  }
}
const Forecast = (props: forecast_props) => {
  
  const { data } = props;
  const { country, name, temp_c, text, icon, wind_kph, humidity, forecastday } = data;
  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
      {/* Location */}
      <Text className="text-white text-center text-2xl font-bold">
        {country},
        <Text className="text-lg font-semibold text-gray-300 ">
          {` ${name}`}
        </Text>
      </Text>
      {/* weather image */}
      <View className="flex-row justify-center">
        <Photo url={"https://"+icon} className="h-52 w-52" />
      </View>
      {/* degree celcius */}
      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-5">
          {temp_c}&#176; 
        </Text>
        <Text className="text-center font-bold text-white text-xl tracking-widest">
          {text}
        </Text>
      </View>
      {/* other stats */}
      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <Image
            className="h-6 w-6"
            source={require("../../../assets/icons/wind.png")}
          />
          <Text className="text-white font-semibold text-base">{wind_kph}km</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            className="h-6 w-6"
            source={require("../../../assets/icons/drop.png")}
          />
          <Text className="text-white font-semibold text-base">{humidity}%</Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image
            className="h-6 w-6"
            source={require("../../../assets/icons/sun.png")}
          />
          <Text className="text-white font-semibold text-base">6:05AM</Text>
        </View>
      </View>
      {/* forecast for next days */}
      <View className="mv-2 space-y-3">
        <View className="flex-row items-center mx-5 space-x-2">
          <CalendarDaysIcon size={22} color={"white"} />
          <Text className="text-white"> Daily forecast </Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{ paddingHorizontal: 15 }}
          showsHorizontalScrollIndicator={false}
        >
          {
            forecastday.map((item, i) => {

              let date = new Date(item.date)
              let day_name = date.toLocaleDateString('en-US',{weekday:"long"});
              day_name = day_name.split(",")[0]
              return (
                <View
                  key={i}
                  className="flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4"
                  style={{ backgroundColor: theme.bg_white(0.15) }}
                >
                  <Photo url={"https://"+item.day.condition.icon} className="h-11 w-11" />
                  <Text className="text-white"> {day_name} </Text>
                  <Text className="text-white text-xl font-semibold">{item.day.avgtemp_c} &#176;</Text>
                </View>
              )
            })
          }
        </ScrollView>
      </View>
    </View>
  );
};

export { Forecast };
