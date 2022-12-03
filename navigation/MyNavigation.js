import React from "react";
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
import HomeProduct from "../components/HomeProduct";
import ReviewScreen from "../screens/ReviewScreen";
import CommentScreen from "../screens/CommentScreen";
import ProductInfoScreen from "../screens/ProductInfoScreen";
import LoginScreen from "../screens/LoginScreen";

//Categories Screen
import TypeArtScreen from "../screens/categoriesScreen/TypeArtScreen";
import TypeCookingScreen from "../screens/categoriesScreen/TypeCookingScreen";
import TypeCostumeScreen from "../screens/categoriesScreen/TypeCostumeScreen";
import TypeElectricScreen from "../screens/categoriesScreen/TypeElectricScreen";
import TypeElectronicScreen from "../screens/categoriesScreen/TypeElectronicScreen";
import TypeFurnitureScreen from "../screens/categoriesScreen/TypeFurnitureScreen";
import TypeSportsScreen from "../screens/categoriesScreen/TypeSportsScreen";
import TypeStationeryScreen from "../screens/categoriesScreen/TypeStationeryScreen";

import ProductScreen from "../screens/ProductScreen";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Assign() {
  return (
    <Stack.Navigator initialRouteName="LoginScreen">
      <Stack.Screen
        name="HomeAndFavoriteAndProfile"
        component={HomeAndFavoriteAndProfile}
      />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
}
{
  /* <Stack.Screen name="Login" component={LoginScreen} /> */
}
function HomeAndFavoriteAndProfile() {
  return (
    <Tab.Navigator initialRouteName="AllNavigationInHome">
      <Tab.Screen
        name="AllNavigationInHome"
        component={AllNavigationInHomeScreen}
        options={{
          //   tabBarShowLabel: false,
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 30 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.1207 16.969H16.969V25.4535H12.1207V16.969Z"
                    fill={color}
                  />
                  <path
                    d="M24.7506 12.3389L15.4055 2.78773C15.2928 2.67412 15.1588 2.58395 15.0111 2.52242C14.8634 2.46088 14.7049 2.4292 14.5449 2.4292C14.3849 2.4292 14.2265 2.46088 14.0788 2.52242C13.9311 2.58395 13.797 2.67412 13.6844 2.78773L4.33925 12.351C4.11312 12.579 3.93453 12.8496 3.81385 13.1471C3.69317 13.4446 3.6328 13.7632 3.63625 14.0843V24.2415C3.63531 24.8619 3.87233 25.4592 4.2985 25.9101C4.72466 26.3611 5.30753 26.6315 5.92707 26.6656H9.69662V15.7569C9.69662 15.4355 9.82432 15.1272 10.0516 14.8999C10.2789 14.6726 10.5872 14.5449 10.9087 14.5449H18.1811C18.5026 14.5449 18.8109 14.6726 19.0382 14.8999C19.2655 15.1272 19.3932 15.4355 19.3932 15.7569V26.6656H23.1628C23.7823 26.6315 24.3652 26.3611 24.7913 25.9101C25.2175 25.4592 25.4545 24.8619 25.4536 24.2415V14.0843C25.4546 13.4333 25.2025 12.8074 24.7506 12.3389Z"
                    fill={color}
                  />
                </svg>
              </>
            );
          },
          tabBarActiveTintColor: "#231F20",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="Favorite"
        component={FavoriteScreen}
        options={{
          //   tabBarShowLabel: false,
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M5.21574 5.89435C8.34753 3.17015 13.1599 3.41042 15.9861 6.44543L16 6.46039L16.0139 6.44543C18.8401 3.41042 23.6525 3.17015 26.7843 5.89435C29.9424 8.6414 30.205 13.3686 27.3545 16.4297L16.9758 27.5753C16.7236 27.8461 16.3701 28 16 28C15.6299 28 15.2765 27.8461 15.0242 27.5753L4.64558 16.4297C1.79505 13.3686 2.05767 8.6414 5.21574 5.89435ZM14.0345 8.26271C12.1939 6.28604 9.01945 6.12003 6.96588 7.90634C4.93858 9.6698 4.78084 12.6619 6.59714 14.6124L16 24.7101L25.4029 14.6124C27.2192 12.6619 27.0615 9.6698 25.0342 7.90634C22.9806 6.12003 19.8062 6.28604 17.9655 8.26271L16.9758 9.32556C16.7236 9.59642 16.3701 9.75025 16 9.75025C15.6299 9.75025 15.2765 9.59642 15.0242 9.32556L14.0345 8.26271Z"
                    fill={color}
                  />
                </svg>
              </>
            );
          },
          tabBarActiveTintColor: "#231F20",
          tabBarInactiveTintColor: "gray",
        }}
      />
      <Tab.Screen
        name="AllNavigationInProfile"
        component={AllNavigationInProfileScreen}
        options={{
          //   tabBarShowLabel: false,
          title: "",
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            return (
              <>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M22.6666 9.33329C22.6666 13.0152 19.6819 16 16 16C12.3181 16 9.33329 13.0152 9.33329 9.33329C9.33329 5.65139 12.3181 2.66663 16 2.66663C19.6819 2.66663 22.6666 5.65139 22.6666 9.33329ZM20 9.33329C20 11.5424 18.2091 13.3333 16 13.3333C13.7908 13.3333 12 11.5424 12 9.33329C12 7.12415 13.7908 5.33329 16 5.33329C18.2091 5.33329 20 7.12415 20 9.33329Z"
                    fill={color}
                  />
                  <path
                    d="M5.99996 29.3333C7.33329 29.3333 7.33329 29.3339 7.33329 29.3344L7.33345 29.3229C7.33365 29.3096 7.33409 29.2868 7.33508 29.2551C7.33706 29.1918 7.34121 29.093 7.34984 28.964C7.36715 28.7056 7.40232 28.3284 7.47356 27.8725C7.61706 26.954 7.90157 25.7513 8.45724 24.5659C9.01142 23.3836 9.81787 22.2544 10.9914 21.4199C12.1522 20.5944 13.7517 20 16 20C18.2483 20 19.8477 20.5944 21.0085 21.4199C22.182 22.2544 22.9885 23.3836 23.5427 24.5659C24.0983 25.7513 24.3829 26.954 24.5264 27.8725C24.5976 28.3284 24.6328 28.7056 24.6501 28.964C24.6587 29.093 24.6629 29.1918 24.6648 29.2551C24.6658 29.2868 24.6663 29.3096 24.6665 29.3229L24.6666 29.3344C24.6666 29.3339 24.6666 29.3333 26 29.3333C27.3333 29.3333 27.3333 29.3326 27.3333 29.3319L27.3333 29.3304L27.3333 29.3264L27.3332 29.3156L27.3328 29.2825C27.3324 29.2554 27.3317 29.2183 27.3302 29.1719C27.3273 29.079 27.3217 28.9486 27.3108 28.7859C27.289 28.461 27.2461 28.0049 27.1611 27.4608C26.9921 26.3792 26.6516 24.9153 25.9572 23.434C25.2614 21.9496 24.1929 20.4122 22.5539 19.2467C20.9022 18.0722 18.7517 17.3333 16 17.3333C13.2483 17.3333 11.0977 18.0722 9.44601 19.2467C7.80704 20.4122 6.7385 21.9496 6.04268 23.434C5.34835 24.9153 5.00785 26.3792 4.83886 27.4608C4.75385 28.0049 4.71089 28.461 4.68914 28.7859C4.67824 28.9486 4.67262 29.079 4.66972 29.1719C4.66827 29.2183 4.66749 29.2554 4.66708 29.2825L4.6667 29.3156L4.66664 29.3264L4.66663 29.3304V29.3319C4.66663 29.3326 4.66663 29.3333 5.99996 29.3333Z"
                    fill={color}
                  />
                </svg>
              </>
            );
          },
          tabBarActiveTintColor: "#231F20",
          tabBarInactiveTintColor: "gray",
        }}
      />
    </Tab.Navigator>
  );
}

function AllNavigationInProfileScreen() {
  return (
    <Stack.Navigator initialRouteName="Profile">
      <Stack.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen name="MyItems" component={MyItemsScreen} />
      <Stack.Screen name="MyLends" component={MyLendsScreen} />
    </Stack.Navigator>
  );
}

function AllNavigationInHomeScreen() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ headerLeft: null }}
      />
      <Stack.Screen
        name="AllCategoriesInAllCategories"
        component={StackInAllCategoriesScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="HomeProduct" component={HomeProduct} />
      <Stack.Screen name="ProductScreen" component={ProductScreen} />

      {/* Nav In ProductScreen */}
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
      <Stack.Screen name="CommentScreen" component={CommentScreen} />
      <Stack.Screen name="ProductInfoScreen" component={ProductInfoScreen} />
    </Stack.Navigator>
  );
}
function AllNavigationInProductScreen() {
  return (
    <Stack.Navigator initialRouteName="ProductScreen">
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="ReviewScreen" component={ReviewScreen} />
    </Stack.Navigator>
  );
}
function AllNavigationInHomeProductScreen() {
  return (
    <Stack.Navigator initialRouteName="HomeProduct">
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
      <Stack.Screen name="HomeProduct" component={HomeProduct} />
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

function ToProductPage() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#4a148c" },
        headerTintColor: "white",
        headerShown: false,
      }}
    >
      <Stack.Screen name="ProductScreen" component={ProductScreen} />
    </Stack.Navigator>
  );
}

export default function MyNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="LoginScreen">
        <Stack.Screen
          name="HomeAndFavoriteAndProfile"
          component={HomeAndFavoriteAndProfile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ headerShown: false, headerLeft: null }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
