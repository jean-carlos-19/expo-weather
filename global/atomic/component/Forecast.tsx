import { theme } from '@/global/theme'
import React from 'react'
import { View, Text, Image, ScrollView } from 'react-native'
import { CalendarDaysIcon } from 'react-native-heroicons/outline'

const Forecast = () => {
  return (
    <View className="mx-4 flex justify-around flex-1 mb-2">
      {/* Location */}
      <Text className="text-white text-center text-2xl font-bold">
        London, 
        <Text className="text-lg font-semibold text-gray-300 ">
          United Kingdom
        </Text>
      </Text>
      {/* weather image */}
      <View className="flex-row justify-center">
        <Image 
          className="w-52 h-52 "
          source={require("../../../assets/images/partlycloudy.png")} />
      </View>
      {/* degree celcius */}
      <View className="space-y-2">
        <Text className="text-center font-bold text-white text-6xl ml-5">23 &#176;</Text>
        <Text className="text-center font-bold text-white text-xl tracking-widest">Partly cloudy</Text>
      </View>
      {/* other stats */}
      <View className="flex-row justify-between mx-4">
        <View className="flex-row space-x-2 items-center">
          <Image 
            className="h-6 w-6"
            source={require("../../../assets/icons/wind.png")} />
          <Text className="text-white font-semibold text-base">
            22km
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image 
            className="h-6 w-6"
            source={require("../../../assets/icons/drop.png")} />
          <Text className="text-white font-semibold text-base">
            23%
          </Text>
        </View>
        <View className="flex-row space-x-2 items-center">
          <Image 
            className="h-6 w-6"
            source={require("../../../assets/icons/sun.png")} />
          <Text className="text-white font-semibold text-base">
            6:05AM
          </Text>
        </View>
      </View>
      {/* forecast for next days */}
      <View className='mv-2 space-y-3'>
        <View className='flex-row items-center mx-5 space-x-2'>
          <CalendarDaysIcon size={22} color={"white"} />
          <Text className='text-white'> Daily forecast </Text>
        </View>
        <ScrollView
          horizontal
          contentContainerStyle={{paddingHorizontal:15}}
          showsHorizontalScrollIndicator={false}
        >
          <View 
            className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
            style={{backgroundColor:theme.bg_white(0.15)}}
          >
            <Image source={require("../../../assets/images/heavyrain.png")} className='h-11 w-11' />
            <Text className='text-white'> Monday </Text>
            <Text className='text-white text-xl font-semibold'>13 &#176;</Text>
          </View>
          <View 
            className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
            style={{backgroundColor:theme.bg_white(0.15)}}
          >
            <Image source={require("../../../assets/images/heavyrain.png")} className='h-11 w-11' />
            <Text className='text-white'> Monday </Text>
            <Text className='text-white text-xl font-semibold'>13 &#176;</Text>
          </View>
          <View 
            className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
            style={{backgroundColor:theme.bg_white(0.15)}}
          >
            <Image source={require("../../../assets/images/heavyrain.png")} className='h-11 w-11' />
            <Text className='text-white'> Monday </Text>
            <Text className='text-white text-xl font-semibold'>13 &#176;</Text>
          </View>
          <View 
            className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
            style={{backgroundColor:theme.bg_white(0.15)}}
          >
            <Image source={require("../../../assets/images/heavyrain.png")} className='h-11 w-11' />
            <Text className='text-white'> Monday </Text>
            <Text className='text-white text-xl font-semibold'>13 &#176;</Text>
          </View>
          <View 
            className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
            style={{backgroundColor:theme.bg_white(0.15)}}
          >
            <Image source={require("../../../assets/images/heavyrain.png")} className='h-11 w-11' />
            <Text className='text-white'> Monday </Text>
            <Text className='text-white text-xl font-semibold'>13 &#176;</Text>
          </View>
          <View 
            className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
            style={{backgroundColor:theme.bg_white(0.15)}}
          >
            <Image source={require("../../../assets/images/heavyrain.png")} className='h-11 w-11' />
            <Text className='text-white'> Monday </Text>
            <Text className='text-white text-xl font-semibold'>13 &#176;</Text>
          </View>
          <View 
            className='flex justify-center items-center w-24 rounded-3xl py-3 space-y-1 mr-4'
            style={{backgroundColor:theme.bg_white(0.15)}}
          >
            <Image source={require("../../../assets/images/heavyrain.png")} className='h-11 w-11' />
            <Text className='text-white'> Monday </Text>
            <Text className='text-white text-xl font-semibold'>13 &#176;</Text>
          </View>
        </ScrollView>
      </View>
    </View>
  )
}

export  {Forecast}
