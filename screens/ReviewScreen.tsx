import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Avatar, Div, Text } from "react-native-magnus";
import { Container } from "../components";
import { ReviewTypes } from "../constants";
import { Rating, AirbnbRating } from "react-native-ratings";

// const MockData: ReviewTypes[] = [
//   {
//     name: "Trent Logan",
//     createdAt: "24 August, 12:00 pm",
//     detail: "ดีมากครับ ดีมากครับ",
//     rating: 5,
//   },
//   {
//     name: "Mojo Magnusito",
//     createdAt: "15 September, 9:20 pm",
//     detail: "ดีมากครับ ยอดเยี่ยมมากเลย",
//     rating: 2,
//   },
//   {
//     name: "Harmony Fitzgerald",
//     createdAt: "8 May, 11:10 am",
//     detail:
//       "ของดีครับแต่ขาโต๊ะเป็นรอยสองข้าง เจ้าของยืนยันไว้ว่ามีอยู่ก่อนแล้วครับ",
//     rating: 4,
//   },
// ];

const ReviewScreen = ({ route, navigation }: any) => {
  const [reviews, setReviews] = useState<ReviewTypes[]>([]);
  const id = route.params.productId;
  // const [rating, setRating] = useState(5)
  useState(() => {
    fetch("http://localhost:3000/reviews")
      .then((response) => response.json())
      .then((json) => {
        setReviews(json);
      })
      .catch((error) => {
        console.error(error);
      });
  });
  return (
    <SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Container>
          <Text
            onPress={() =>
              navigation.navigate("AddReviewScreen", {
                productIds: route.params.productId,
              })
            }
          >
            New review
          </Text>
          {reviews.map((data: ReviewTypes, i: number) => {
            if (route.params.productId === data.productId) {
              return (
                <Div key={i} my={10}>
                  <Div row justifyContent="space-between" alignItems="center">
                    <Div row>
                      <Rating
                        startingValue={data.rating}
                        style={{ marginBottom: 5 }}
                      />
                    </Div>
                    <Text color="#9e9e9e">{data.createdAt.slice(0, 16)}</Text>
                  </Div>
                  <Div row alignItems="center">
                    <Avatar size={24} bg="blue300" color="blue800">
                      {data.name}
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
            }
          })}
        </Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ReviewScreen;
