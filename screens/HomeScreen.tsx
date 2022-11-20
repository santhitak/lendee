import { Text, Button, Icon, Div , Input, Image, } from "react-native-magnus";
import HomeBottonCategories from "../components/HomeBottonCategories";
import HomeProduct from "../components/HomeProduct";

const HomeScreen = () => {
  return (
    <>
      {/* <Div row>
        <Red text="text"/>
        
      </Div>
      
      <Div row>
        <Red text="yeahhh"/>
      </Div> */}

      <Div row>
        <Input
          placeholder="Search"
          p={10} w="90vw"
          focusBorderColor="blue700"
          bg="#EEE" color="gray700"
          borderColor="gray200"
          prefix={<Icon name="search" color="gray500" fontFamily="Feather" />}
        />
      </Div>

      <Div row>
        <HomeBottonCategories text="ทั้งหมด"/>
        <HomeBottonCategories text="1"/>
        <HomeBottonCategories text="2"/>
        <HomeBottonCategories text="ดูทั้งหมด"/>
      </Div>

      <Div row>
        <Input
          mt="lg" py="lg" 
          placeholder="สร้างโพสต์ใหม่"
          p={10} w="90vw"
          // focusBorderColor="blue700"
          bg="#EEE" color="gray700"
          fontWeight="bold"
          borderColor="gray200"
          suffix={<Icon name="edit" color="gray500" fontFamily="AntDesign"/>}
        />
      </Div>

      <Div row my={30} left={-100}>
        <Text fontWeight="bold" fontSize="4xl">ใหม่ล่าสุด</Text>
      </Div>

      <Div row flexWrap="wrap">
        <HomeProduct productName="nameeeeeeeeeeeeeee1" productDetail="detailllllllllllllllllllll1" productUrl="" ></HomeProduct>
        <HomeProduct productName="nameeeeeeee2" productDetail="detaillllllllllllllllllllllllllllllllllllllllllllllllllll2" productUrl=""></HomeProduct>
      </Div>

    </>
    
  );
};

export default HomeScreen;
