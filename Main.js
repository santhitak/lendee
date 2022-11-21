import MyNavigation from "./navigation/MyNavigation";
import { Div } from "react-native-magnus";

export default function Main() {
  return (
    <Div w="100vw" h="100vh">
      <Div w="100%" h="100%" flex={1} justifyContent="space-between">
        <MyNavigation />
      </Div>
    </Div>
  );
}