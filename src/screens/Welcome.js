import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";
import LottieView from "lottie-react-native";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View className="flex-1 flex-col justify-between bg-slate-500">
      <View className="top-40 self-center">
        <Text className="text-neutral-900 font-bold text-5xl italic">
          Drinkinator
        </Text>
      </View>

      <View className="justify-center flex-1 pt-10">
        <LottieView
          style={{ flex: 1, paddingTop: 10 }}
          source={require("../../assets/isDdtjAvlk.json")}
          autoPlay
          loop
        />
      </View>

      <View className="items-end mx-auto pb-24">
        <TouchableOpacity
          className="bg-white mx-8 p-5 px-14 rounded-full"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-black font-bold text-lg">Let's Drink!</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
