import React from 'react';
import { Dimensions, ImageBackground } from 'react-native';
import Constants from 'expo-constants';
import { BackgroundProps } from '@/types';

const Background = (props: BackgroundProps) => {
 const { image } = props;
 const { height } = Dimensions.get('screen');
 return (
  <ImageBackground
   style={{ height: height, paddingTop: Constants.statusBarHeight }}
   source={image}
   blurRadius={70}
   className="absolute h-full w-full"
  ></ImageBackground>
 );
};

export { Background };
