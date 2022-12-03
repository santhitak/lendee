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
        <NoItems />
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
