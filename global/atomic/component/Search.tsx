import React from "react";
import { View, TextInput, TouchableOpacity } from "react-native";
import { MagnifyingGlassIcon } from "react-native-heroicons/outline";
import { theme } from "@/global/theme";

interface search_props {
  show_search: boolean;
  toogle_search: () => void;
}
const Search = (props: search_props) => {
  const { show_search, toogle_search } = props;
  return (
    <View
      style={{
        backgroundColor: show_search ? theme.bg_white(0.2) : "transparent",
      }}
      className="flex-row justify-end items-center rounded-full"
    >
      {show_search ? (
        <TextInput
          placeholder="Search city"
          placeholderTextColor={"lightgray"}
          className="pl-6 h-10 pb-1 flex-1 text-base text-white"
        />
      ) : null}
      <TouchableOpacity
        onPress={() => toogle_search()}
        style={{ backgroundColor: theme.bg_white(0.3) }}
        className="rounded-full p-3 m-1"
      >
        <MagnifyingGlassIcon size={25} color={"white"} />
      </TouchableOpacity>
    </View>
  );
};

export { Search };
