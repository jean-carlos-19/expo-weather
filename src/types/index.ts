import { WeatherModel } from '@/models';
import React from 'react';
import { ImageSourcePropType } from 'react-native';
import { AnyObjectSchema } from 'yup';

/* props of components */
interface itemsProps {
 data: string[];
 show_itemns: boolean;
 resetForm: any;
 hand_location: (location: string) => void;
}
interface searchProps {
 show_search: boolean;
 value: string;
 id: string;
 toogle_search: () => void;
 handleChange: any;
 handleBlur: any;
 handleSubmit: any;
}
interface forecastProps {
 data: WeatherModel;
}
interface LoadingProps {
 status: boolean;
}
interface SearchFormProps {
 validationSchema: AnyObjectSchema;
 showSearch: boolean;
 location: string[];
 handleSubmit: (target: string) => void;
 handleWeather: (target: string) => void;
 handleLocation: (location: string) => void;
 toogleSearch: () => void;
}
interface BackgroundProps {
 children: JSX.Element | JSX.Element[];
 image: ImageSourcePropType;
}
interface DegreeCelciusProps{
    tempCelcius:number;
    text:string;
}
interface StatsProps{
    windKph:number,
    humidity:number
}
interface LocationProps{
    country:string;
    name:string;
}
export {
 itemsProps,
 StatsProps,
 searchProps,
 LoadingProps,
 forecastProps,
 LocationProps,
 SearchFormProps,
 BackgroundProps,
 DegreeCelciusProps
};
