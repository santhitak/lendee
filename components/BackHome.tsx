import { Button } from "react-native-magnus";

export const BackHome = ({ navigation }: any) => {
  return (
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
  );
};
