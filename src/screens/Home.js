import React from "react";
import { useNavigation } from "@react-navigation/native";
import { getHeaderTitle } from "@react-navigation/elements";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import LiquorDropDown from "../components/LiquorDropDown";
import FlavorDropDown from "../components/FlavorDropDown";
import SpecificsDropDown from "../components/SpecificsDropDown";


export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View style={{ backgroundColor: "white", flex: 1 }}>
      <View className=" bg-slate-700 basis-36 justify-center">
        <Text className="justify-center text-bold text-white text-3xl text-center pt-9">
          Let's find you a drink
        </Text>
      </View>

      <View>
        <Text className="text-bold text-2xl pt-3 pl-3">Liquor</Text>
        <LiquorDropDown />
        <Text className="text-bold text-2xl pt-3 pl-3">Flavors</Text>
        <FlavorDropDown />
        <Text className="text-bold text-2xl pt-3 pl-3">Specifics</Text>
        <SpecificsDropDown />
        <View className="pt-8" />
        <TouchableOpacity
          className="bg-slate-700 mx-16 p-5 px-12 rounded-full "
          onPress={() => { 
            navigation.navigate("Reccomendation", { 
              liquor: "Rum",
             flavor: "Sweet",
            specific: "Lime"});
          }}
        >
          <Text className="text-white font-bold text-lg self-center">
            Reccommend a Drink
          </Text>
        </TouchableOpacity>
      </View>

      <View className="bg-black w-full h-1 mx-auto mt-12 mb-6 border-0" />
      <Text className="text-base self-center px-5">OR</Text>
      <View className="bg-black w-full h-1 mx-auto mt-4 mb-6 border-0" />

      <View className="pt-10">
        <TouchableOpacity
          className="bg-slate-700 mx-16 p-5 px-12 rounded-full"
          onPress={() => navigation.navigate("Reccomendation")}
        >
          <Text className="text-white font-bold text-lg self-center">
            Dealers Choice
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});

