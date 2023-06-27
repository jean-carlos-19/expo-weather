import React from "react";
import Constants from "expo-constants";
import { Dimensions, ImageBackground, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSearch,useSearchWeather,useForecastWeather } from "./hooks";
import { Forecast, Items, Search } from "@/global/atomic/component";
import { validation } from './validation'
import { Formik } from 'formik'
import * as Progress from 'react-native-progress'
const { height } = Dimensions.get("screen");


const Home = () => {
  const { show_search, loading, toogle_search,set_loading } = useSearch();
  const {weather,hand_submit,forecast_weather} = useForecastWeather(set_loading,toogle_search);
  const { location,hand_location,handle_search_weather } = useSearchWeather(set_loading,forecast_weather,toogle_search);
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <ImageBackground
        style={{ height: height, paddingTop: Constants.statusBarHeight }}
        source={require("../../assets/images/bg.png")}
        blurRadius={70}
        className="absolute h-full w-full"
      >

        <SafeAreaView className="flex flex-1 pt-5 pb-11">
          <View style={{ height: "7%" }} className="mx-4 relative z-10">
            <Formik
              validateOnMount={true}
              initialValues={{ search: "" }}
              validationSchema={validation}
              onSubmit={(values, action) => {
                action.resetForm();
                hand_submit(values.search);
              }}
            >
              {
                (props) => {
                  const { values, handleSubmit, handleChange, handleBlur, resetForm } = props;
                  handle_search_weather(values.search)
                  return (
                    <>
                      <Search
                        id={"search"}
                        handleSubmit={handleSubmit}
                        show_search={show_search} toogle_search={toogle_search}
                        value={values.search}
                        handleChange={handleChange}
                        handleBlur={handleBlur}
                      />
                      <Items
                        show_itemns={show_search}
                        data={location}
                        hand_location={hand_location}
                        resetForm={resetForm}
                      />
                    </>
                  );
                }
              }
            </Formik>
          </View>
          {
            loading ? (
              <View className="flex-1 flex-row justify-center items-center">
                <Progress.CircleSnail thickness={10} size={140} color={"#0bb3b2"} />
              </View>
            ) : (
              <Forecast data={weather} />
            )
          }
        </SafeAreaView >
      </ImageBackground >
    </View >
  );
};

export { Home };
