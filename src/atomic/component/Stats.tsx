import { StatsProps } from '@/types'
import React from 'react'
import { Image } from 'react-native'
import { Text, View } from 'react-native'

{/* other stats */ }
const Stats = (props:StatsProps) => {
    const {humidity,windKph} = props;
    return (
        <View className="flex-row justify-between mx-4">
            <View className="flex-row space-x-2 items-center">
                <Image
                    className="h-6 w-6"
                    source={require('../../../assets/icons/wind.png')}
                />
                <Text className="text-white font-semibold text-base">{windKph}km</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
                <Image
                    className="h-6 w-6"
                    source={require('../../../assets/icons/drop.png')}
                />
                <Text className="text-white font-semibold text-base">{humidity}%</Text>
            </View>
            <View className="flex-row space-x-2 items-center">
                <Image
                    className="h-6 w-6"
                    source={require('../../../assets/icons/sun.png')}
                />
                <Text className="text-white font-semibold text-base">6:05AM</Text>
            </View>
        </View>
    )
}

export { Stats }
