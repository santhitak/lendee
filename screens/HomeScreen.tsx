import { useEffect, useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Text, Icon, Div, Input } from "react-native-magnus";
import ButtonCategories from "../components/Home/ButtonCategories";
import HomeProduct from "../components/HomeProduct";
import { ProductTypes } from "../constants";

const HomeScreen = () => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      showsHorizontalScrollIndicator={false}
    >
      <SafeAreaView>
        <Div w={"100vw"} minH={"100vh"} bg={"white"}>
          <Div p={20}>
            <Div row>
              <Input
                placeholder="Search"
                p={10}
                w={"100%"}
                focusBorderColor="blue700"
                bg="#EEE"
                color="gray700"
                borderColor="gray200"
                prefix={
                  <Icon name="search" color="gray500" fontFamily="Feather" />
                }
              />
            </Div>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              <ButtonCategories />
            </ScrollView>
            <Div row>
              <Input
                placeholder="สร้างโพสต์ใหม่"
                p={10}
                my={10}
                w="100%"
                bg="#EEE"
                color="gray700"
                fontWeight="bold"
                borderColor="gray200"
                suffix={
                  <Icon name="edit" color="gray500" fontFamily="AntDesign" />
                }
              />
            </Div>
          </Div>
          <Div row my={10} mx={15}>
            <Text fontWeight="bold" fontSize="4xl">
              ใหม่ล่าสุด
            </Text>
          </Div>
          <Div>
            <HomeProduct />
          </Div>
        </Div>
      </SafeAreaView>
    </ScrollView>
  );
};
export default HomeScreen;
