import { Button, Icon, Div } from "react-native-magnus";

const ProfileScreen = () => {
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
      </Div>
    </>
  );
};

export default ProfileScreen;
