import { Text, Button, Icon, Div } from "react-native-magnus";
import React from "react";

type Props = { text: string };

const HomeBottonCategories = ({ text }: Props) => {
  return (
    <Div>
      <Div row>
        <Button
          mt="lg"
          mr={10}
          px="xl"
          py="lg"
          h={40}
          w={80}
          bg="#EEE"
          color="#9E9E9E"
          underlayColor="blue700"
          fontWeight="bold"
        >
          {text}
        </Button>
      </Div>
    </Div>
  );
};

export default HomeBottonCategories;
