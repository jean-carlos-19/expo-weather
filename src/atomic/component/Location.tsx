import { LocationProps } from '@/types'
import React from 'react'
import { Text } from 'react-native'

{/* Location */}
const Location = (props:LocationProps) => {
    const {country,name} = props;
  return (
   <Text className="text-white text-center text-2xl font-bold">
   {country},
   <Text className="text-lg font-semibold text-gray-300 ">{` ${name}`}</Text>
  </Text>
  )
}

export {Location}
