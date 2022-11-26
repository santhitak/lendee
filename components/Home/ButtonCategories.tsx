import { Button } from "react-native-magnus";
import React, { useState } from "react";
import { View } from "react-native";

type categoriesList = {
  categoriesName: string;
};

const data: categoriesList[] = [
  {
    categoriesName: "ทั้งหมด",
  },
  {
    categoriesName: "เครื่องใช้ไฟฟ้า",
  },
  {
    categoriesName: "เครื่องครัว",
  },
  {
    categoriesName: "เครื่องเขียน",
  },
  {
    categoriesName: "อุปกรณ์อิเล็กทรอทิกส์",
  },
  {
    categoriesName: "อุปกรณ์ศิลปะ",
  },
  {
    categoriesName: "อุปกรณ์กีฬา",
  },
  {
    categoriesName: "เครื่องแต่งกาย",
  },
  {
    categoriesName: "เฟอร์นิเจอร์",
  },
  {
    categoriesName: "ดูประเภททั้งหมด →",
  },
];

const HomeBottonCategories = () => {
  const [categories, setProduct] = useState<categoriesList[]>(data);

  return (
    <>
      {categories.map(({ categoriesName }: categoriesList, i: number) => {
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
            >
              {categoriesName}
            </Button>
          </View>
        );
      })}
    </>
  );
};

export default HomeBottonCategories;
