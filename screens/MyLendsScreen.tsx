import React, { useState } from "react";
import { Text, Div, Button } from "react-native-magnus";
import { NoItems, Container } from "../components";

const MyLendsScreen = ({ navigation }: any) => {
  const [item, setItem] = useState(null);
  return (
    <Container>
      <Text fontSize={28} fontWeight={"bold"}>
        สินค้าที่ยืม
      </Text>
      {item ? <></> : <NoItems />}
    </Container>
  );
};

export default MyLendsScreen;
