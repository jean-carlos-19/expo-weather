import React from "react";
import { View, TouchableOpacity, Text } from "react-native";
import { MapPinIcon } from "react-native-heroicons/outline";
interface items_props {
  data: string[];
  show_itemns: boolean;
  hand_location: (location: string) => void;
}
const Items = (props: items_props) => {
  const { data, show_itemns, hand_location } = props;
  return show_itemns ? (
    <View className="absolute w-full bg-gray-300 top-16 rounded-3xl">
      {data.map((location: string, i: number) => (
        <TouchableOpacity
          className="flex-row items-center border-0 p-3 px-4 mb-1"
          onPress={() => hand_location(location)}
          key={i}
        >
          <MapPinIcon size={"20"} color={"gray"} />
          <Text className="text-black text-lg ml-2">
            London, United kingdom
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  ) : null;
};

export { Items };
