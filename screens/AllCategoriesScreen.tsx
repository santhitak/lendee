import { Text, Div, Button } from "react-native-magnus";
import Categories from "../components/Categories";
const AllCategoriesScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Div borderColor="black">
      <Text textAlign="center" fontSize="lg" mt="md">
        หมวดหมู่ทั้งหมด
      </Text>

      <Div borderWidth={1}>
        <Text
          onPress={() => {
            navigation.navigate("TypeElectric");
          }}
        >
          เครื่องใช้ไฟฟ้า
        </Text>
      </Div>

      {/* <Categories name="เครื่องใช้ไฟฟ้า" goto="TypeElectric" />
      <Categories name="เครื่องครัว" />
      <Categories name="เครื่องเขียน" />
      <Categories name="อุปกรณ์อิเล็กทรอทิกส์" />
      <Categories name="อุปกรณ์ศิลปะ" />
      <Categories name="อุปกรณ์กีฬา" />
      <Categories name="เครื่องแต่งกาย" />
      <Categories name="เฟอร์นิเจอร์" /> */}
    </Div>
  );
};

export default AllCategoriesScreen;
