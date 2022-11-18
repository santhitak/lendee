import React from "react";
import { Text, Div } from "react-native-magnus";

const Categories = ({ props }, { navigation }) => {
  return (
    <Div borderWidth={1}>
      <Text
        onPress={() => {
          navigation.navigate(props.goto);
        }}
      >
        {props.name}
      </Text>
    </Div>
  );
};

export default Categories;
