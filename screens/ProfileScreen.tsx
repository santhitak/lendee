import React from "react";
import { Button, Icon, Div } from "react-native-magnus";

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  return (
    <>
      <Div row>
        <Button bg="blue500" h={40} w={40} rounded="circle">
          <Icon name="like1" color="white" />
        </Button>
        <Button bg="yellow500" h={40} w={40} rounded="circle" ml="md">
          <Icon name="star" color="white" />
        </Button>
        <Button bg="red100" h={40} w={40} rounded="circle" ml="md">
          <Icon name="heart" color="red500" />
        </Button>
        {/* My Item Navigation */}
        <Button
          bg="red100"
          h={40}
          w={40}
          rounded="circle"
          ml="md"
          onPress={() => {
            navigation.navigate("MyItems");
          }}
        >
          <Icon name="box" color="red500" fontFamily="Entypo" />
        </Button>
        {/* My Lend Navigation */}
        <Button
          bg="red100"
          h={40}
          w={40}
          rounded="circle"
          ml="md"
          onPress={() => {
            navigation.navigate("MyLends");
          }}
        >
          <Icon name="people-carry" color="red500" fontFamily="FontAwesome5" />
        </Button>
      </Div>
    </>
  );
};

export default ProfileScreen;
