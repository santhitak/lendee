import React from "react";
import { Icon } from "react-native-magnus";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//screens
import HomeScreen from "../screens/HomeScreen";
import FavoriteScreen from "../screens/FavoriteScreen";
import ProfileScreen from "../screens/ProfileScreen";
import MyItemsScreen from "../screens/MyItemsScreen";
import MyLendsScreen from "../screens/MyLendsScreen";
import AllCategoriesScreen from "../screens/AllCategoriesScreen";

//Categories Screen
import TypeElectricScreen from "../screens/TypeElectricScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function assign() {
  return (
    <Stack.Navigator
      //   initialRouteName="HomeAndFavoriteAndProfile"
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
        headerShown: false,
      }}
    >
      <Stack.Screen name="MyItems" component={MyItemsScreen} />
      <Stack.Screen name="MyLends" component={MyLendsScreen} />
    </Stack.Navigator>
  );
}
function HomeAndFavoriteAndProfile() {
  return (
    <Tab.Navigator initialRouteName="Profile">
      <Tab.Screen
        name="AllNavigationInHome"
        component={AllNavigationInHomeScreen}
        options={{
          //   tabBarShowLabel: false,
          title: "lendee",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name="home" color="yellow700" fontSize="6xl" />;
          },
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          //   tabBarShowLabel: false,
          title: "สินค้าที่บันทึกไว้",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name="heart" color="yellow700" fontSize="6xl" />;
          },
        }}
      />
      <Tab.Screen
        name="AllNavigationInProfile"
        component={AllNavigationInProfileScreen}
        options={{
          //   tabBarShowLabel: false,
          title: "บัญชีของฉัน",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return <Icon name="android1" color="yellow700" fontSize="6xl" />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

function AllNavigationInProfileScreen() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="MyItems" component={MyItemsScreen} />
      <Stack.Screen name="MyLends" component={MyLendsScreen} />
    </Stack.Navigator>
  );
}

function AllNavigationInHomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen
        name="AllCategoriesInAllCategories"
        component={AllCategoriesInAllCategoriesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function AllCategoriesInAllCategoriesScreen() {
  return (
    <Stack.Navigator initialRouteName="AllCategories">
      <Stack.Screen name="AllCategories" component={AllCategoriesScreen} />
      <Stack.Screen name="TypeElectric" component={TypeElectricScreen} />
    </Stack.Navigator>
  );
}

// function AllPages() {
//   <Stack.Navigator
//     initialRouteName="HomeAndFavoriteAndProfile"
//     screenOptions={{
//       headerStyle: { backgroundColor: "#4a148c" },
//       headerTintColor: "white",
//       headerShown: false,
//     }}
//   >
//     <Stack.Screen
//       name="HomeAndFavoriteAndProfile"
//       component={HomeAndFavoriteAndProfile}
//     />
//   </Stack.Navigator>;
// }

export default function MyNavigation() {
  return (
    <NavigationContainer>
      <HomeAndFavoriteAndProfile />
    </NavigationContainer>
  );
}
