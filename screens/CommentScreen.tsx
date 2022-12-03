import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Avatar, Div, Input, Text } from "react-native-magnus";
import { Container } from "../components";
import { CommentTypes } from "../constants";

const MockData: CommentTypes[] = [
  {
    name: "Trent Logan",
    createdAt: "24 August, 12:00 pm",
    detail: "ดีมากครับ ดีมากครับ",
  },
  {
    name: "Mojo Magnusito",
    createdAt: "15 September, 9:20 pm",
    detail: "ดีมากครับ ยอดเยี่ยมมากเลย",
  },
  {
    name: "Harmony Fitzgerald",
    createdAt: "8 May, 11:10 am",
    detail:
      "ของดีครับแต่ขาโต๊ะเป็นรอยสองข้าง เจ้าของยืนยันไว้ว่ามีอยู่ก่อนแล้วครับ",
  },
];

const CommentScreen = () => {
  const [comments, setComment] = useState<CommentTypes[]>(MockData);

  return (
    <SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          {comments.map((data: CommentTypes, i: number) => {
            return (
              <Div key={i} my={10}>
                <Div row justifyContent="space-between" alignItems="center">
                  <Div row alignItems="center">
                    <Avatar size={24} bg="blue300" color="blue800">
                      {data.name.slice(0, 1)}
                    </Avatar>
                    <Text ml={8} fontWeight="bold">
                      {data.name}
                    </Text>
                  </Div>
                  <Text color="#9e9e9e">{data.createdAt}</Text>
                </Div>
                <Text mt={4} color={"#9e9e9e"}>
                  {data.detail}
                </Text>
              </Div>
            );
          })}
          <Input
            placeholder="แสดงความคิดเห็น"
            p={4}
            focusBorderColor="blue700"
          />
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CommentScreen;
