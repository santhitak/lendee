import { Image, Text, Button, Div } from "react-native-magnus";

const LoginScreen = ({ navigation }: any) => {
  const navigateToHomeScreen = () => {
    navigation.navigate("HomeAndFavoriteAndProfile");
  };
  return (
    <Div w="100vw" h="20vh">
      <Div w="100%" h="100%" flex={1} justifyContent="space-between">
        <Div>
          <Text fontWeight="bold" textAlign="center" fontSize="6xl" mt="md">
            Sign in
          </Text>
          <Text textAlign="center" fontSize="lg" mt="md" color="#8E8E93">
            เข้าสู่ระบบเพื่อเริ่มต้นใช้งาน
          </Text>
        </Div>
        <Button
          onPress={() => navigateToHomeScreen()}
          block
          prefix={
            <Image
              h={20}
              w={20}
              m={10}
              rounded="circle"
              source={{
                uri: "https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png",
              }}
            />
          }
          bg="#F5F5F5"
          p={12}
          mt="lg"
          py={10}
        >
          <Text fontSize="lg" color="#8E8E93" style={{ marginHorizontal: 10 }}>
            Sign in with Google
          </Text>
        </Button>
      </Div>
    </Div>
  );
};

export default LoginScreen;
