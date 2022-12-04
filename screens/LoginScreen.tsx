import React, { useState } from "react";
import { Text, Button, Div, Input } from "react-native-magnus";
import Toast from "react-native-root-toast";

const LoginScreen = ({ navigation }: any) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showToast, setShowToast] = useState(false);

  const navigateToHomeScreen = () => {
    if (email === "member@kmitl.ac.th" && password === "123456")
      navigation.navigate("HomeAndFavoriteAndProfile");
    else {
      setShowToast(!showToast);
    }
  };

  if (showToast) {
    let toast = Toast.show("อีเมลล์หรือรหัสผ่านไม่ถูกต้อง");

    setTimeout(function hideToast() {
      Toast.hide(toast);
      setShowToast(!showToast);
    }, 1500);
  }

  return (
    <Div w="100vw" h="80vh">
      <Div w="100%" h="100%" flex={1} justifyContent={"center"}>
        <Text fontWeight="bold" textAlign="center" fontSize="6xl" mt="md">
          Sign in
        </Text>
        <Text textAlign="center" fontSize="lg" mt="md" color="#8E8E93">
          เข้าสู่ระบบเพื่อเริ่มต้นใช้งาน
        </Text>
        <Div mx={15} my={20}>
          <Input
            placeholder="email@kmitl.ac.th"
            mt="md"
            p={10}
            focusBorderColor="blue700"
            onChangeText={(value) => {
              setEmail(value);
            }}
          />
          <Input
            placeholder="Password"
            mt="md"
            p={10}
            secureTextEntry
            focusBorderColor="blue700"
            onChangeText={(value) => {
              setPassword(value);
            }}
          />
        </Div>
        <Button
          onPress={() => navigateToHomeScreen()}
          block
          bg="#1F4492"
          p={12}
          mt="lg"
          py={10}
          mx={15}
        >
          <Text
            fontSize="lg"
            color="white"
            style={{ marginHorizontal: 10 }}
            onPress={navigateToHomeScreen}
          >
            เข้าสู่ระบบ
          </Text>
        </Button>
      </Div>
    </Div>
  );
};

export default LoginScreen;
