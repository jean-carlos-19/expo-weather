import { weatherImages } from '@/assets'
import React from 'react'
import { View } from 'react-native'

{/* weather image */ }
const WeaterImage = () => {
    return (
        <View className="flex-row justify-center">
            <Image className="h-52 w-52" source={weatherImages[img]} />
        </View>
    )
}

export { WeaterImage }
