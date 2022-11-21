import { Text, Button, Icon, Div, Image } from "react-native-magnus";
import React, { useState } from "react";

type ProductTypes = {
  productName: string;
  productDetail: string;
  productUrl: string;
};

const data: ProductTypes[] = [
  {
    productName: "เก้าอี้",
    productDetail: "เก้าอี้คุณภาพชั้นดี",
    productUrl: "",
  },
  {
    productName: "โต๊ะไม้",
    productDetail: "โต๊ะไม้คุณภาพชั้นดี",
    productUrl: "",
  },
];

const HomeProduct = () => {
  const [product, setProduct] = useState(data);

  return (
    <>
      <Div row my={20} w={"100%"} justifyContent="space-evenly">
        {product.map(
          (
            { productName, productDetail, productUrl }: ProductTypes,
            i: number
          ) => {
            return (
              <Div key={i}>
                <Div
                  rounded="xl"
                  h={150}
                  bgImg={{
                    uri: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
                  }}
                ></Div>
                <Div row alignItems="center">
                  <Div flex={1} w="40vw">
                    <Text fontWeight="bold" fontSize="xl" mt="sm">
                      {productName}
                    </Text>
                    <Text color="gray500" fontSize="sm">
                      {productDetail}
                    </Text>
                  </Div>
                  <Div row alignItems="center">
                    <Icon name="heart" color="gray500" fontFamily="Feather" />{" "}
                    {/* ยังไม่ได้ทำที่คลิกละใส่ */}
                  </Div>
                </Div>
              </Div>
            );
          }
        )}
      </Div>
    </>
  );
};

export default HomeProduct;
