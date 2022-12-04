import React, { useState } from "react";
import { Text, Div, Button } from "react-native-magnus";
import { NoItems, Container } from "../components";
import { ProductTypes } from "../constants";

const MyLendsScreen = ({ navigation }: any) => {
  const [item, setItem] = useState<String[]>();
  const [user, setUser] = useState(1);

  useState(() => {
    fetch(`http://localhost:3000/lends/${user}`)
      .then((response) => response.json())
      .then((json) => {
        setItem(json);
      })
      .catch((error) => {
        console.error(error);
      });
  });

  return (
    <Container>
      <Text fontSize={28} fontWeight={"bold"}>
        สินค้าที่ยืม
      </Text>
      {item?.length ? (
        <>
          {item.map((item: any, i: number) => {
            return (
              <Div key={i}>
                {item.product.map((item: ProductTypes, i: number) => {
                  return (
                    <Div key={i}>
                      <Div my={15}>
                        <Text my={5} fontWeight="bold">
                          {item.productName}
                        </Text>
                        <Text my={5} color="#9E9E9E">
                          {item.productDetail}
                        </Text>
                        <Button my={5} bg="#1F4492" color="white">
                          ดูรายละเอียด
                        </Button>
                      </Div>
                    </Div>
                  );
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

export default MyLendsScreen;
