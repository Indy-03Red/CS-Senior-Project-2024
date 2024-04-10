import React from "react";
import { getRecs } from "../ReccomendFetch.ts";
import { useNavigation } from "@react-navigation/native";
import { getHeaderTitle } from "@react-navigation/elements";
import { Text, View, TouchableOpacity } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import Icon from "react-native-vector-icons/Ionicons";

export default function Reccomendation() {
  const navigation = useNavigation();
  getRecs("Rum", "Sweet", "No preference");
  return (
    <View className=" bg-slate-700 flex-1">
      <View className="pl-6 pt-16">
        <TouchableOpacity
          className="justify-center"
          onPress={() => navigation.navigate("Home")}
        >
          <Icon color="white" name="chevron-back" size={30} />
        </TouchableOpacity>
      </View>
      
      <View className="bg-white border-white h-40 w-11/12 border-4 rounded-xl self-center mb-10 mt-5">
        <Text></Text>
      </View>
      <View className="bg-white border-white box-border h-40 w-11/12 border-4 rounded-xl self-center mb-10">
        <Text></Text>
      </View>
      <View className="bg-white border-white box-border h-40 w-11/12 border-4 rounded-xl self-center">
        <Text></Text>
      </View>

      <View className="pt-10">
        <TouchableOpacity
          className="bg-white mx-16 p-5 px-12 mt-12 rounded-full"
          onPress={() => navigation.navigate("Reccomendation")} //On Press needs to be changed to generate more drinks
        >
          <Text className="text-black font-bold text-lg self-center">
            Generate More
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
