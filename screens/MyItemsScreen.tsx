import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Div, Button } from "react-native-magnus";
import { NoItems, Container } from "../components";

const data = [
  {
    productName: "",
  },
];

const MyItemsScreen = ({ navigation }: any) => {
  const [item, setItem] = useState(data);
  return (
    <Container>
      <Text fontSize={28} fontWeight={"bold"}>
        สินค้าที่วางให้ยืม
      </Text>
      {item ? (
        <>
          {item.map((item: any, i: number) => {
            <Div key={i}></Div>;
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
