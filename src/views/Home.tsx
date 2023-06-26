import React from "react";
import Constants from "expo-constants";
import { Dimensions, ImageBackground, View, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { useSearch } from "./hooks";
import { Forecast, Items, Search } from "@/global/atomic/component";
const { height } = Dimensions.get("screen");

const Home = () => {
  const { show_search, toogle_search, hand_location } = useSearch();
  return (
    <View className="flex-1 relative">
      <StatusBar style="light" />
      <ImageBackground
        style={{ height: height, paddingTop: Constants.statusBarHeight }}
        source={require("../../assets/images/bg.png")}
        blurRadius={70}
        className="absolute h-full w-full"
      >
        <SafeAreaView className="flex flex-1 pt-5 pb-5">
          <View style={{ height: "7%" }} className="mx-4 relative z-10">
            <Search show_search={show_search} toogle_search={toogle_search} />
            <Items
              show_itemns={show_search}
              data={["1", "2", "3"]}
              hand_location={hand_location}
            />
          </View>
          <Forecast />
        </SafeAreaView>
      </ImageBackground>
    </View>
  );
};

export { Home };
