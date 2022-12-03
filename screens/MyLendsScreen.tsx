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
      {item ? (
        <></>
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
