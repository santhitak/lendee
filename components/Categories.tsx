import React from "react";
import { Text, Div } from "react-native-magnus";

type Props = { name: string; goto: string };
const Categories = (
  { name, goto }: Props,
  { navigation }: { navigation: any }
) => {
  return (
    <Div borderWidth={1}>
      <Text
        onPress={() => {
          navigation.navigate(goto);
        }}
      >
        {name}
      </Text>
    </Div>
  );
};

export default Categories;
