import React from "react";
import { Text, Div, Button, Icon } from "react-native-magnus";

const HomeScreen = ({ navigation }: { navigation: any }) => {
  return (
    <Div>
      <Text textAlign="center" fontSize="lg" mt="md">
        HomeScreen
      </Text>
      <Button
        mt="lg"
        px="xl"
        py="lg"
        bg="green700"
        color="white"
        suffix={<Icon name="arrowright" ml="md" color="white" />}
        onPress={() => {
          navigation.navigate("AllCategoriesInAllCategories");
        }}
      >
        ดูทั้งหมด
      </Button>
    </Div>
  );
};

export default HomeScreen;
