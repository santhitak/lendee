import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Div } from "react-native-magnus";

type Props = {
  children: React.ReactNode;
};

export const Container = ({ children }: Props) => {
  return (
    <SafeAreaView>
      <Div w="100vw" h="100vh" bg="white">
        <Div h={"100%"} style={style.container}>
          {children}
        </Div>
      </Div>
    </SafeAreaView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});
