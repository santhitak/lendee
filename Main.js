import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./screens/LoginScreen";
import ProfileScreen from "./screens/ProfileScreen";
// import TestScreen from "./screens/TestScreen";
import HomeScreen from "./screens/HomeScreen";
import MyNavigation from "./navigation/MyNavigation";
import { Div } from "react-native-magnus";

export default function Main() {
  return (
    <Div w="100vw" h="100vh">
      <Div w="100%" h="100%" flex={1} justifyContent="space-between">
        <MyNavigation />
      </Div>
    </Div>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "Poppin",
  },
});
