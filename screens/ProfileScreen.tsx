import React, { useState } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import { Div, Text, Avatar, Input, Button } from "react-native-magnus";

type User = {
  name: string;
  email: string;
  phone: string;
};

const data: User = {
  name: "Morgan Freefarm",
  email: "63070045@kmitl.ac.th",
  phone: "0896598877",
};

const ProfileScreen = ({ navigation }: { navigation: any }) => {
  const [user, setUser] = useState<User>(data);
  const [edit, setEdit] = useState(false);
  const [newName, setNewName] = useState<string>(user.name);
  const [newPhone, setNewPhone] = useState<string>(user.phone);

  return (
    <>
      <SafeAreaView>
        <Div w={"100vw"} h={"100vh"} bg={"white"}>
          <Div style={style.container} h={"100%"}>
            <Div row justifyContent="space-between" alignItems="baseline">
              <Text fontSize={28}>บัญชีของฉัน</Text>
              {!edit ? (
                <Button
                  bg="transparent"
                  onPress={() => {
                    setEdit(!edit);
                  }}
                >
                  <svg
                    width="26"
                    height="26"
                    viewBox="0 0 26 26"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M20.3841 21.4567H5.36437C5.07984 21.4567 4.80696 21.5698 4.60576 21.771C4.40457 21.9721 4.29153 22.245 4.29153 22.5296C4.29153 22.8141 4.40457 23.087 4.60576 23.2882C4.80696 23.4894 5.07984 23.6024 5.36437 23.6024H20.3841C20.6686 23.6024 20.9415 23.4894 21.1427 23.2882C21.3439 23.087 21.4569 22.8141 21.4569 22.5296C21.4569 22.245 21.3439 21.9721 21.1427 21.771C20.9415 21.5698 20.6686 21.4567 20.3841 21.4567Z"
                      fill="#C4C4C4"
                    />
                    <path
                      d="M5.36416 19.3112H5.46072L9.93444 18.9035C10.4245 18.8547 10.8829 18.6387 11.2326 18.292L20.8881 8.63645C21.2628 8.24054 21.4654 7.71221 21.4513 7.16724C21.4372 6.62227 21.2077 6.1051 20.813 5.72907L17.8734 2.7895C17.4898 2.42913 16.987 2.22235 16.4608 2.20851C15.9347 2.19466 15.4218 2.37471 15.0197 2.7144L5.36416 12.3699C5.01739 12.7196 4.80147 13.178 4.75265 13.668L4.29133 18.1418C4.27688 18.2989 4.29727 18.4573 4.35104 18.6056C4.40482 18.754 4.49066 18.8887 4.60245 19C4.7027 19.0995 4.82158 19.1781 4.9523 19.2315C5.08301 19.2849 5.22297 19.312 5.36416 19.3112ZM16.3822 4.29147L19.311 7.22031L17.1653 9.31233L14.2901 6.43714L16.3822 4.29147ZM6.83395 13.8504L12.874 7.85328L15.7707 10.7499L9.76279 16.7578L6.54428 17.0582L6.83395 13.8504Z"
                      fill="#C4C4C4"
                    />
                  </svg>
                </Button>
              ) : (
                <></>
              )}
            </Div>
            <Div style={style.infoContainer}>
              <Div alignItems="baseline" py={20} row>
                <Avatar bg="red300" size={32} color="red800">
                  {user.name.slice(0, 1)}
                </Avatar>
                {!edit ? (
                  <Text fontSize={16} ml={10} fontWeight={"600"}>
                    {user.name}
                  </Text>
                ) : (
                  <Input
                    placeholder="Username"
                    ml={10}
                    w={"80%"}
                    focusBorderColor="blue700"
                    value={newName}
                    onChangeText={(value) => {
                      setNewName(value);
                      console.log(value);
                    }}
                  />
                )}
              </Div>
              <Div alignItems="baseline" py={20}>
                <Text fontSize={16} fontWeight={"600"}>
                  Email
                </Text>
                <Text fontSize={16} fontWeight={"400"} color={"#9E9E9E"}>
                  {user.email}
                </Text>
              </Div>
              <Div alignItems="baseline" py={20}>
                <Text fontSize={16} fontWeight={"600"}>
                  Phone number
                </Text>
                {!edit ? (
                  <Text fontSize={16} fontWeight={"400"} color={"#9E9E9E"}>
                    {user.phone}
                  </Text>
                ) : (
                  <Input
                    placeholder="Phone"
                    focusBorderColor="blue700"
                    mt={10}
                    w={"100%"}
                    value={newPhone}
                    onChangeText={(value) => {
                      setNewPhone(value);
                      console.log(value);
                    }}
                  />
                )}
              </Div>
              {!edit ? (
                <>
                  <Div alignItems="baseline" py={20}>
                    <Text fontSize={16} fontWeight={"600"}>
                      My items
                    </Text>
                  </Div>
                  <Div alignItems="baseline" py={20}>
                    <Text fontSize={16} fontWeight={"600"}>
                      My Lends
                    </Text>
                  </Div>
                  <Div row alignItems="center" py={20}>
                    <svg
                      width="19"
                      height="18"
                      viewBox="0 0 19 18"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M3.53278 2.45667C3.81818 2.45667 4.0919 2.34329 4.29371 2.14148C4.49552 1.93967 4.60889 1.66596 4.60889 1.38056C4.60889 1.09515 4.49552 0.82144 4.29371 0.61963C4.0919 0.417819 3.81818 0.304443 3.53278 0.304443H1.38056C1.09515 0.304443 0.82144 0.417819 0.61963 0.61963C0.417819 0.82144 0.304443 1.09515 0.304443 1.38056V16.4461C0.304443 16.7315 0.417819 17.0053 0.61963 17.2071C0.82144 17.4089 1.09515 17.5222 1.38056 17.5222H3.53278C3.81818 17.5222 4.0919 17.4089 4.29371 17.2071C4.49552 17.0053 4.60889 16.7315 4.60889 16.4461C4.60889 16.1607 4.49552 15.887 4.29371 15.6852C4.0919 15.4834 3.81818 15.37 3.53278 15.37H2.45667V2.45667H3.53278Z"
                        fill="#231F20"
                      />
                      <path
                        d="M18.4047 8.28919L15.37 3.98474C15.2054 3.75274 14.9557 3.59534 14.6754 3.54695C14.3951 3.49855 14.1071 3.5631 13.8742 3.72647C13.7578 3.80803 13.6588 3.91183 13.5827 4.03188C13.5067 4.15193 13.4551 4.28586 13.4311 4.42593C13.4071 4.566 13.4111 4.70944 13.4428 4.84797C13.4745 4.9865 13.5334 5.11737 13.616 5.23303L15.4669 7.83722H15.37H6.76111C6.47571 7.83722 6.20199 7.9506 6.00018 8.15241C5.79837 8.35422 5.685 8.62793 5.685 8.91334C5.685 9.19874 5.79837 9.47245 6.00018 9.67426C6.20199 9.87607 6.47571 9.98945 6.76111 9.98945H15.37L13.433 12.5721C13.3482 12.6852 13.2865 12.8138 13.2515 12.9507C13.2164 13.0876 13.2086 13.2301 13.2286 13.37C13.2486 13.5099 13.2959 13.6445 13.3679 13.7661C13.4399 13.8877 13.5352 13.9939 13.6482 14.0787C13.8345 14.2184 14.0611 14.2939 14.2939 14.2939C14.461 14.2939 14.6257 14.255 14.7752 14.1803C14.9246 14.1056 15.0546 13.9971 15.1548 13.8635L18.3831 9.55901C18.5209 9.377 18.5973 9.15588 18.6012 8.92761C18.6051 8.69935 18.5362 8.47576 18.4047 8.28919V8.28919Z"
                        fill="#231F20"
                      />
                    </svg>
                    <Text fontSize={16} ml={10} fontWeight={"600"}>
                      Sign out
                    </Text>
                  </Div>
                </>
              ) : (
                <Div row justifyContent="space-between">
                  <Button
                    onPress={() => {
                      setEdit(!edit);
                    }}
                    bg={"transparent"}
                    borderColor={"#8E8E93"}
                    borderWidth={1}
                    color={"#8E8E93"}
                    w={"40%"}
                  >
                    ยกเลิก
                  </Button>
                  <Button
                    bg={"#1F4492"}
                    borderColor={"#1F4492"}
                    borderWidth={1}
                    w={"40%"}
                    color={"white"}
                    onPress={() => {
                      setUser({
                        name: newName,
                        email: user.email,
                        phone: newPhone,
                      });
                      setEdit(!edit);
                    }}
                  >
                    บันทึก
                  </Button>
                </Div>
              )}
            </Div>
          </Div>
        </Div>
      </SafeAreaView>
    </>
  );
};

export default ProfileScreen;

const style = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    paddingVertical: 20,
  },
  infoContainer: {
    paddingHorizontal: 15,
    paddingVertical: 30,
  },
});
