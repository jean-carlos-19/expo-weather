import { DegreeCelciusProps } from '@/types'
import React from 'react'
import { Text, View } from 'react-native'

const DegreeCelcius = (props:DegreeCelciusProps) => {
    {/* degree celcius */ }
    const { tempCelcius, text } = props;
    return (
        <View className="space-y-2">
            <Text className="text-center font-bold text-white text-6xl ml-5">
                {tempCelcius}&#176;
            </Text>
            <Text className="text-center font-bold text-white text-xl tracking-widest">
                {text}
            </Text>
        </View>
    )
}

export { DegreeCelcius }
