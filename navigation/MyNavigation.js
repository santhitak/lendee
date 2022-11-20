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
import TypeArtScreen from "../screens/categoriesScreen/TypeArtScreen";
import TypeCookingScreen from "../screens/categoriesScreen/TypeCookingScreen";
import TypeCostumeScreen from "../screens/categoriesScreen/TypeCostumeScreen";
import TypeElectricScreen from "../screens/categoriesScreen/TypeElectricScreen";
import TypeElectronicScreen from "../screens/categoriesScreen/TypeElectronicScreen";
import TypeFurnitureScreen from "../screens/categoriesScreen/TypeFurnitureScreen";
import TypeSportsScreen from "../screens/categoriesScreen/TypeSportsScreen";
import TypeStationeryScreen from "../screens/categoriesScreen/TypeStationeryScreen";

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
        component={StackInAllCategoriesScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function StackInAllCategoriesScreen() {
  return (
    <Stack.Navigator initialRouteName="AllCategories">
      <Stack.Screen name="AllCategories" component={AllCategoriesScreen} />
      <Stack.Screen
        name="TypeArt"
        component={TypeArtScreen}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen
        name="TypeCooking"
        component={TypeCookingScreen}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen
        name="TypeElectric"
        component={TypeElectricScreen}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen
        name="TypeElectronic"
        component={TypeElectronicScreen}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen
        name="TypeFurniture"
        component={TypeFurnitureScreen}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen
        name="TypeSports"
        component={TypeSportsScreen}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen
        name="TypeStationery"
        component={TypeStationeryScreen}
        options={{ headerLeft: () => null }}
      />
      <Stack.Screen
        name="TypeCostume"
        component={TypeCostumeScreen}
        options={{ headerLeft: () => null }}
      />
    </Stack.Navigator>
  );
}

export default function MyNavigation() {
  return (
    <NavigationContainer>
      <HomeAndFavoriteAndProfile />
    </NavigationContainer>
  );
}
