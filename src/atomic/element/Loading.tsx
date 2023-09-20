import React from 'react';
import { View } from 'react-native';
import * as Progress from 'react-native-progress';
import { LoadingProps } from '@/types';

const Loading = (props: LoadingProps) => {
 const { status } = props;

 return status ? (
  <View className="flex-1 flex-row justify-center items-center">
   <Progress.CircleSnail thickness={10} size={140} color={'#0bb3b2'} />
  </View>
 ) : null;
};

export { Loading };
