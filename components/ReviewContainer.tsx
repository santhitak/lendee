import React from "react";
import { Text, Div, Button, Icon, Image, Box } from "react-native-magnus";

type Props = {
  img: string;
  name: string;
  detail: string;
  date: string;
  star: string;
};
const ReviewContainer = ({ img, name, detail, date, star }: Props) => {
  return (
    <Div borderColor="grey" borderWidth={0} ml={15} mt={25}>
      <Div flexDir="row" justifyContent="space-around">
        <Text fontSize="lg">{star}</Text>
        <Text color="grey" fontSize={17}>
          {date}
        </Text>
      </Div>
      <Div flexDir="row" mt={3}>
        <Image
          h={30}
          w={30}
          rounded="circle"
          // "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60"
          source={{
            uri: img,
          }}
        />
        <Text ml={10} fontSize={20}>
          {name}
        </Text>
      </Div>
      <Div flexDir="row">
        <Text color="grey" fontSize={17} mt={3}>
          {detail}
        </Text>
      </Div>
    </Div>
  );
};

export default ReviewContainer;
