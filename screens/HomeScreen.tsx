import { SafeAreaView } from "react-native";
import { Text, Button, Icon, Div, Input, Image } from "react-native-magnus";
import HomeBottonCategories from "../components/HomeBottonCategories";
import HomeProduct from "../components/HomeProduct";
const HomeScreen = () => {
  return (
    <SafeAreaView>
      <Div w={"100vw"} h={"100vh"} bg={"white"}>
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
          <Div row>
            <HomeBottonCategories categoriesName="ทั้งหมด" />
            <HomeBottonCategories categoriesName="1" />
            <HomeBottonCategories categoriesName="2" />
            <HomeBottonCategories categoriesName="ดูทั้งหมด" />
          </Div>
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
        <Div row my={30} mx={15}>
          <Text fontWeight="bold" fontSize="4xl">
            ใหม่ล่าสุด
          </Text>
        </Div>
        <Div>
          <HomeProduct />
        </Div>
      </Div>
    </SafeAreaView>
  );
};
export default HomeScreen;
