import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Avatar, Div, Text } from "react-native-magnus";
import { Container } from "../components/Container";
import { ReviewTypes } from "../constants";
import { Rating } from "react-simple-star-rating";

const MockData: ReviewTypes[] = [
  {
    name: "Trent Logan",
    createdAt: "24 August, 12:00 pm",
    detail: "ดีมากครับ ดีมากครับ",
    rating: 5,
  },
  {
    name: "Mojo Magnusito",
    createdAt: "15 September, 9:20 pm",
    detail: "ดีมากครับ ยอดเยี่ยมมากเลย",
    rating: 2,
  },
  {
    name: "Harmony Fitzgerald",
    createdAt: "8 May, 11:10 am",
    detail:
      "ของดีครับแต่ขาโต๊ะเป็นรอยสองข้าง เจ้าของยืนยันไว้ว่ามีอยู่ก่อนแล้วครับ",
    rating: 4,
  },
];

const ReviewScreen = () => {
  const [reviews, setReviews] = useState<ReviewTypes[]>(MockData);

  // const [rating, setRating] = useState(5)

  return (
    <SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          {reviews.map((data: ReviewTypes, i: number) => {
            return (
              <Div key={i} my={10}>
                <Div row justifyContent="space-between" alignItems="center">
                  <Div row>
                    <Rating />
                  </Div>
                  <Text color="#9e9e9e">{data.createdAt}</Text>
                </Div>
                <Div row alignItems="center">
                  <Avatar size={24} bg="blue300" color="blue800">
                    {data.name.slice(0, 1)}
                  </Avatar>
                  <Text ml={8} fontWeight="bold">
                    {data.name}
                  </Text>
                </Div>
                <Text mt={4} color={"#9e9e9e"}>
                  {data.detail}
                </Text>
              </Div>
            );
          })}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewScreen;
