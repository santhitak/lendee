import React, { useState } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Avatar, Div, Text, Input, Button } from "react-native-magnus";
// import { Container } from "../components/Container";
import { ReviewTypes } from "../constants";
import { Rating } from "react-simple-star-rating";

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

const labels: { [index: string]: string } = {
  1: "Useless",
  2: "Poor",
  3: "Ok",
  4: "Good",
  5: "Excellent",
};

const AddReviewScreen = ({ navigation, route }: any) => {
  // const [reviews, setReviews] = useState<ReviewTypes[]>(MockData);
  const [text, setText] = useState("");
  const [rating, setRating] = useState(0);

  // Catch Rating value
  const handleRating = (rate: number) => {
    setRating(rate);

    // other logic
  };
  const data = {};
  const createReview = (
    userId: number,
    productId: number,
    detail: string,
    rating: number
  ) => {
    fetch("http://localhost:3000/reviews/create", {
      method: "POST",
      body: JSON.stringify({
        userId: 1,
        detail: "ดีมากครับ ดีมากครับ",
        rating: 4,
        productId: 14,
      }),
    }).then((response) => console.log(response));

    navigation.pop();
  };
  // Optinal callback functions
  const onPointerEnter = () => console.log("Enter");
  const onPointerLeave = () => console.log("Leave");
  // const onPointerMove = (value: number, index: number) => console.log(value, index)
  const onPointerMove = (value: number, index: number) => {
    console.log(value, index);
    setRating(value);
  };

  return (
    <Div>
      <Div row justifyContent="center">
        <Rating
          onClick={handleRating}
          onPointerEnter={onPointerEnter}
          onPointerLeave={onPointerLeave}
          onPointerMove={onPointerMove}
        />
      </Div>
      <Div row justifyContent="center" mb={10}>
        <Text>{labels[rating]}</Text>
      </Div>
      <Div row justifyContent="center" my={10}>
        <Input
          placeholder="Your review"
          p={4}
          w={"90%"}
          value={text}
          onChangeText={(text) => setText(text)}
          focusBorderColor="blue700"
        />
      </Div>
      <Div row justifyContent="center" my={10}>
        <Button
          w={"90%"}
          h={40}
          bg="#1F4492"
          color="#fff"
          underlayColor="blue700"
          onPress={() => createReview(1, route.params.productIds, text, rating)}
        >
          Send review to {text} {rating}
        </Button>
      </Div>
    </Div>
  );
};

export default AddReviewScreen;
