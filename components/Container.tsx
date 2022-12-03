import React from "react";
import { SafeAreaView, ScrollView, StyleSheet } from "react-native";
import { Div } from "react-native-magnus";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return (
    <ScrollView
      showsHorizontalScrollIndicator={false}
      showsVerticalScrollIndicator={false}
    >
      <SafeAreaView>
        <Div w="100vw" minH="100vh" bg="white">
          <Div h={"100%"} style={style.container}>
            {children}
          </Div>
        </Div>
      </SafeAreaView>
    </ScrollView>
  );
};

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
});

export default Container;
