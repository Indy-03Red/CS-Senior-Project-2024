import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { NativeWindStyleSheet } from "nativewind";

export default function Welcome() {
  const navigation = useNavigation();
  return (
    <View className="bg-slate-700 flex-1">
      <Text></Text>
    </View>
  );
}

NativeWindStyleSheet.setOutput({
  default: "native",
});
