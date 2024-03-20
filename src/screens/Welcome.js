import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View
      style={{ backgroundColor: "#9656ce", flex: 1 }}
      className="flex flex-col justify-between"
    >
      <View className="top-40 self-center">
        <Text className="text-neutral-900 text-5xl italic">Drinkinator</Text>
      </View>

      <Image
        source={require("../../assets/cocktail.png")}
        style={{ width: 420, height: 400 }}
        className=""
      />

      <View className="items-end mx-auto pb-24">
        <TouchableOpacity
          className="bg-white mx-8 p-5 px-14 rounded-full"
          onPress={() => navigation.navigate("Home")}
        >
          <Text className="text-black font-bold text-lg">Let's Go</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
