import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Div, Button, Image } from "react-native-magnus";
import { NoItems, Container } from "../components";
import {
  FavoriteProductTypes,
  ProductImageTypes,
  ProductTypes,
} from "../constants";

const MyItemsScreen = ({ navigation }: any) => {
  const [item, setItem] = useState<String[]>();
  const [img, setImg] = useState<ProductImageTypes[]>([]);
  const [lend, setLend] = useState<FavoriteProductTypes[]>([]);

  useState(() => {
    fetch("http://localhost:3000/products/1")
      .then((response) => response.json())
      .then((json) => {
        const itemArr = [];
        itemArr.push(json);
        setItem(itemArr);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  useState(() => {
    fetch("http://localhost:3000/productImages")
      .then((response) => response.json())
      .then((json) => {
        setImg(json);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  useState(() => {
    fetch("http://localhost:3000/lend/1")
      .then((response) => response.json())
      .then((json) => {
        setLend(json);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <Container>
      <Text fontSize={28} fontWeight={"bold"}>
        สินค้าที่วางให้ยืม
      </Text>
      {item ? (
        <>
          {item.map((item: any, i: number) => {
            return (
              <Div key={i}>
                {item.product.map((item: ProductTypes, i: number) => {
                  if (item.authorId === 1) {
                    return (
                      <Div key={i}>
                        {lend.map((data: FavoriteProductTypes, i: number) => {
                          return (
                            <>
                              <Div
                                row
                                alignItems="center"
                                justifyContent="flex-start"
                                key={i}
                              >
                                {img.map(
                                  (itemImage: ProductImageTypes, i: number) => {
                                    if (itemImage.productId === item.id) {
                                      return (
                                        <Div
                                          h={80}
                                          w={80}
                                          rounded={20}
                                          bgImg={{
                                            uri: itemImage.img,
                                          }}
                                          bgMode="cover"
                                          key={i}
                                        />
                                      );
                                    }
                                  }
                                )}
                                <Div my={15} ml={20}>
                                  <Text my={5} fontWeight="bold">
                                    {item.productName}
                                  </Text>
                                  <Button my={5} bg="#1F4492" color="white">
                                    ดูรายละเอียด
                                  </Button>
                                </Div>
                              </Div>
                              <Text color="#9e9e9e">
                                สถานะ:{" "}
                                {data.productId === item.id
                                  ? "กำลังยืม"
                                  : "ว่าง"}
                              </Text>
                            </>
                          );
                        })}
                      </Div>
                    );
                  }
                })}
              </Div>
            );
          })}
        </>
      ) : (
        <Div w="100%" minH={"70vh"} justifyContent="center" alignItems="center">
          <NoItems />
          <Button
            w={"100%"}
            bg={"#FFB54D"}
            color={"#212121"}
            onPress={() => {
              navigation.navigate("Home");
            }}
            position={"absolute"}
            bottom={10}
          >
            กลับหน้าหลัก
          </Button>
        </Div>
      )}
    </Container>
  );
};

export default MyItemsScreen;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  infoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
});
