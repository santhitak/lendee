import { Button } from "react-native-magnus";
import React, { useState } from "react";
import { View } from "react-native";

type categoriesList = {
  categoriesName: string;
  nav: string;
  id: number;
};

const data: categoriesList[] = [
  {
    categoriesName: "ทั้งหมด",
    nav: "AllNavigationInHome",
    id: 0,
  },
  {
    categoriesName: "เครื่องใช้ไฟฟ้า",
    nav: "TypeProductScreen",
    id: 5,
  },
  {
    categoriesName: "เครื่องครัว",
    nav: "TypeProductScreen",
    id: 1,
  },
  {
    categoriesName: "เครื่องเขียน",
    nav: "TypeProductScreen",
    id: 6,
  },
  {
    categoriesName: "อุปกรณ์อิเล็กทรอทิกส์",
    nav: "TypeProductScreen",
    id: 3,
  },
  {
    categoriesName: "อุปกรณ์ศิลปะ",
    nav: "TypeProductScreen",
    id: 10,
  },
  {
    categoriesName: "อุปกรณ์กีฬา",
    nav: "TypeProductScreen",
    id: 8,
  },
  {
    categoriesName: "เครื่องแต่งกาย",
    nav: "TypeProductScreen",
    id: 4,
  },
  {
    categoriesName: "เฟอร์นิเจอร์",
    nav: "TypeProductScreen",
    id: 2,
  },
  {
    categoriesName: "ดูประเภททั้งหมด →",
    nav: "AllCategoriesInAllCategories",
    id: 12,
  },
];

const HomeButtonCategories = ({navigation}:any) => {
  const [categories, setProduct] = useState<categoriesList[]>(data);

  return (
    <>
      {categories.map(({ categoriesName,nav,id }: categoriesList, i: number) => {
        return (
          <View key={i}>
            <Button
              mt="lg"
              mr={10}
              px="xl"
              py="lg"
              h={40}
              bg="#EEE"
              color="#9E9E9E"
              underlayColor="blue700"
              fontWeight="bold"
              onPress={() => navigation.navigate({nav},{id:id})}
            >
              {categoriesName}
            </Button>
          </View>
        );
      })}
    </>
  );
};

export default HomeButtonCategories;
