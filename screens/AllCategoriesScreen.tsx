import React from "react";
import { Text, Div } from "react-native-magnus";
const AllCategoriesScreen = ({ navigation }: any) => {
  return (
    <Div borderColor="black">
      <Text textAlign="center" fontSize="lg" mt="md">
        หมวดหมู่ทั้งหมด
      </Text>

      <Div borderWidth={1}>
        <Text
          onPress={() => {
            navigation.navigate("TypeProductScreen");
          }}
        >
          เครื่องใช้ไฟฟ้า
        </Text>
      </Div>

      <Div borderWidth={1}>
        <Text
          onPress={() => {
            navigation.navigate("TypeCooking");
          }}
        >
          เครื่องครัว
        </Text>
      </Div>

      <Div borderWidth={1}>
        <Text
          onPress={() => {
            navigation.navigate("TypeStationery");
          }}
        >
          เครื่องเขียน
        </Text>
      </Div>

      <Div borderWidth={1}>
        <Text
          onPress={() => {
            navigation.navigate("TypeElectronic");
          }}
        >
          อุปกรณ์อิเล็กทรอทิกส์
        </Text>
      </Div>

      <Div borderWidth={1}>
        <Text
          onPress={() => {
            navigation.navigate("TypeArt");
          }}
        >
          อุปกรณ์ศิลปะ
        </Text>
      </Div>

      <Div borderWidth={1}>
        <Text
          onPress={() => {
            navigation.navigate("TypeSports");
          }}
        >
          อุปกรณ์กีฬา
        </Text>
      </Div>

      <Div borderWidth={1}>
        <Text
          onPress={() => {
            navigation.navigate("TypeCostume");
          }}
        >
          เครื่องแต่งกาย
        </Text>
      </Div>

      <Div borderWidth={1}>
        <Text
          onPress={() => {
            navigation.navigate("TypeFurniture");
          }}
        >
          เฟอร์นิเจอร์
        </Text>
      </Div>
    </Div>
  );
};

export default AllCategoriesScreen;
