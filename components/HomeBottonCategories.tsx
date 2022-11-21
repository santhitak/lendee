import { Text, Button, Icon, Div } from "react-native-magnus";
import React , { useState } from "react";

// type Props = { text: string };

type categoriesList = {
  categoriesName: string
};

const data: categoriesList[] = [
  {
    categoriesName: "ทั้งหมด",
  },
  {
    categoriesName: "เครื่องใช้ไฟฟ้า"
  },
  {
    categoriesName: "เครื่องครัว"
  },
  {
    categoriesName: "เครื่องเขียน"
  },
  {
    categoriesName: "อุปกรณ์อิเล็กทรอทิกส์"
  },
  {
    categoriesName: "อุปกรณ์ศิลปะ"
  },
  {
    categoriesName: "อุปกรณ์กีฬา"
  },
  {
    categoriesName: "เครื่องแต่งกาย"
  },
  {
    categoriesName: "เฟอร์นิเจอร์"
  },
];

const HomeBottonCategories = ({ categoriesName }: categoriesList) => {
  const [categories, setProduct] = useState(data);

  return (
    <Div>
      <Div row>
        {categories.map(
          (
            { categoriesName }: categoriesList,
            i: number
          ) => {
            return (
              <Div key={i}>
                <Button
                  mt="lg"
                  mr={10}
                  px="xl"
                  py="lg"
                  h={40}
                  w={105}
                  bg="#EEE"
                  color="#9E9E9E"
                  underlayColor="blue700"
                  fontWeight="bold"
                >
                  { categoriesName }
                </Button>
              </Div>
            );
          }
        )}
      </Div>
    </Div>
  );
};

export default HomeBottonCategories;
