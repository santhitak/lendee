import React, { useState } from "react";
import { SafeAreaView, ScrollView, TextInput, FlatList } from "react-native";
import { Avatar, Div, Text, Textarea, Input, Button, Image, } from "react-native-magnus";
import { backgroundProps } from "react-native-magnus/lib/typescript/src/types";
import { Container } from "../components/Container";
import DropDownPicker from 'react-native-dropdown-picker';
import { Colors } from "react-native/Libraries/NewAppScreen";

const UselessTextInput = (props: any) => {
    return (
      <TextInput
        {...props} // Inherit any props passed to it; e.g., multiline, numberOfLines below
        editable
        maxLength={"100"}
        
      />
    );
  }

const AddReviewScreen = ({ navigation } : any) => {
    const [value, onChangeText] = React.useState("รายละเอียดโพสต์");

    const [open, setOpen] = useState(false);
    const [dropdownValue, setdropdownValue] = useState(null);
    const [items, setItems] = useState([
        {label: 'Apple', value: 'apple'},
        {label: 'Banana', value: 'banana'}
    ]);

  return (
    <Div>
      <Div row justifyContent="center" p={10} rounded="10">
        <UselessTextInput
            multiline
            numberOfLines={4}
            onChangeText={(text: any) => onChangeText(text)}
            value={value}
            style={{padding: 20, width: "100%", background: "#F5F5F5", borderRadius: 10, color: "#C4C4C4"}}
        />
      </Div>
      <Div row justifyContent="center" p={10}>
        <DropDownPicker
            open={open}
            value={dropdownValue}
            items={items}
            setOpen={setOpen}
            setValue={setdropdownValue}
            setItems={setItems}
            style={{ borderColor: "#C4C4C4"}}
            textStyle={{ color: "#C4C4C4" }}
            />
        </Div>
        <Div row justifyContent="center">
            <Button
                w={"95%"}
                h={40}
                bg="#fff"
                color="#C4C4C4"
                underlayColor="blue700"
                borderColor="#C4C4C4"
                borderWidth={1}
                // onPress={() => navigation.navigate("ReviewScreen")}
            >
                แนบรูปภาพ
            </Button>
        </Div>
        <Div row>
            <Image
                h={100}
                w={100}
                m={10}
                rounded={10}
                source={{
                    uri:
                    "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                }}
            />
            <Image
                h={100}
                w={100}
                m={10}
                rounded={10}
                source={{
                    uri:
                    "https://images.unsplash.com/photo-1593642532400-2682810df593?ixid=MXwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60",
                }}
            />
        </Div>
      <Div row justifyContent="center" my={10}>
        <Button
            w={"95%"}
            h={40}
            bg="#1F4492"
            color="#fff"
            underlayColor="blue700"
            // onPress={() => navigation.navigate("ReviewScreen")}
        >
            โพสต์
        </Button>
      </Div>
    </Div>
  );
};

export default AddReviewScreen;
