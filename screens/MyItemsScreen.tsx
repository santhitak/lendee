import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Div } from "react-native-magnus";
import { BackHome } from "../components/BackHome";
import { Container } from "../components/Container";

const data = [
  {
    productName: "",
  },
];

const MyItemsScreen = ({ navigation }: any) => {
  const [item, setItem] = useState(null);
  return (
    <Container>
      <Text fontSize={28} fontWeight={"bold"}>
        สินค้าที่วางให้ยืม
      </Text>
      {item ? (
        <></>
      ) : (
        <Div
          w={"100%"}
          h={"auto"}
          minH={"80%"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <svg
            width="125"
            height="120"
            viewBox="0 0 125 120"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M43.76 37C44.4922 37.7101 44.4918 37.7106 44.4918 37.7106L44.4936 37.7089L44.5126 37.6914C44.5311 37.6745 44.5609 37.6476 44.6017 37.612C44.6834 37.5408 44.8084 37.4354 44.9725 37.307C45.3016 37.0497 45.7833 36.7038 46.3841 36.3581C47.5971 35.6601 49.2299 35 51.04 35C52.8501 35 54.4829 35.6601 55.6959 36.3581C56.2967 36.7038 56.7784 37.0497 57.1075 37.307C57.2716 37.4354 57.3966 37.5408 57.4783 37.612C57.5191 37.6476 57.549 37.6745 57.5674 37.6914L57.5864 37.7089L57.5882 37.7106C57.5882 37.7106 57.5878 37.7101 58.32 37C59.0522 36.2899 59.0511 36.2888 59.0511 36.2888L59.0497 36.2875L59.0461 36.284L59.0353 36.2739L58.9999 36.2413C58.9702 36.2142 58.9285 36.1766 58.8752 36.1302C58.7686 36.0373 58.6155 35.9084 58.42 35.7555C58.0298 35.4503 57.4665 35.0462 56.764 34.6419C55.3702 33.8399 53.363 33 51.04 33C48.717 33 46.7098 33.8399 45.316 34.6419C44.6135 35.0462 44.0502 35.4503 43.66 35.7555C43.4646 35.9084 43.3114 36.0373 43.2048 36.1302C43.1515 36.1766 43.1098 36.2142 43.0801 36.2413L43.0447 36.2739L43.0339 36.284L43.0303 36.2875L43.0283 36.2894C43.0283 36.2894 43.0278 36.2899 43.76 37Z"
              fill="#212121"
            />
            <path
              d="M67.3717 37.7106C67.3717 37.7106 67.3722 37.7101 66.6399 37C65.9077 36.2899 65.9082 36.2894 65.9082 36.2894L65.9102 36.2875L65.9138 36.284L65.9246 36.2739L65.96 36.2413C65.9897 36.2142 66.0315 36.1766 66.0848 36.1302C66.1913 36.0373 66.3445 35.9084 66.54 35.7555C66.9301 35.4503 67.4935 35.0462 68.196 34.6419C69.5897 33.8399 71.5969 33 73.9199 33C76.243 33 78.2502 33.8399 79.6439 34.6419C80.3464 35.0462 80.9098 35.4503 81.2999 35.7555C81.4954 35.9084 81.6485 36.0373 81.7551 36.1302C81.8084 36.1766 81.8502 36.2142 81.8798 36.2413L81.9152 36.2739L81.926 36.284L81.9297 36.2875L81.9311 36.2888C81.9311 36.2888 81.9322 36.2899 81.1999 37C80.4677 37.7101 80.4681 37.7106 80.4681 37.7106L80.4663 37.7089L80.4473 37.6914C80.4289 37.6745 80.399 37.6476 80.3582 37.612C80.2765 37.5408 80.1515 37.4354 79.9874 37.307C79.6583 37.0497 79.1766 36.7038 78.5758 36.3581C77.3628 35.6601 75.73 35 73.9199 35C72.1098 35 70.477 35.6601 69.2641 36.3581C68.6632 36.7038 68.1815 37.0497 67.8525 37.307C67.6883 37.4354 67.5634 37.5408 67.4817 37.612C67.4409 37.6476 67.411 37.6745 67.3925 37.6914L67.3735 37.7089L67.3717 37.7106Z"
              fill="#212121"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M56.24 45.5C56.24 47.433 54.8431 49 53.12 49C51.3969 49 50 47.433 50 45.5C50 43.567 51.3969 42 53.12 42C54.8431 42 56.24 43.567 56.24 45.5ZM52.08 46C52.08 46.5523 52.5456 47 53.12 47C53.6944 47 54.16 46.5523 54.16 46C54.16 45.4477 53.6944 45 53.12 45C52.5456 45 52.08 45.4477 52.08 46Z"
              fill="#212121"
            />
            <path
              d="M62.48 62C64.2031 62 65.6 60.6569 65.6 59C65.6 57.3431 64.2031 56 62.48 56C60.7569 56 59.36 57.3431 59.36 59C59.36 60.6569 60.7569 62 62.48 62Z"
              fill="#212121"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M71.84 49C73.5631 49 74.96 47.433 74.96 45.5C74.96 43.567 73.5631 42 71.84 42C70.1169 42 68.72 43.567 68.72 45.5C68.72 47.433 70.1169 49 71.84 49ZM71.84 47C71.2656 47 70.8 46.5523 70.8 46C70.8 45.4477 71.2656 45 71.84 45C72.4144 45 72.88 45.4477 72.88 46C72.88 46.5523 72.4144 47 71.84 47Z"
              fill="#212121"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M86.8325 64.8107C92.3713 59.0955 95.76 51.4283 95.76 43C95.76 25.3269 80.86 11 62.48 11C44.0999 11 29.2 25.3269 29.2 43C29.2 51.5604 32.6958 59.3357 38.3896 65.0781C38.3017 64.9894 38.2143 64.9003 38.1275 64.8107C21.6806 73.2081 10.48 89.8463 10.48 109H14.64C14.64 90.8898 25.5242 75.224 41.3459 67.7206C41.3459 67.7206 41.3459 67.7206 41.3459 67.7206C47.0935 72.2689 54.455 75 62.48 75C70.5212 75 77.8964 72.2577 83.6491 67.6928C83.6375 67.702 83.6258 67.7113 83.6141 67.7206C99.4358 75.224 110.32 90.8898 110.32 109H114.48C114.48 89.8463 103.279 73.2081 86.8325 64.8107ZM62.48 71C78.5625 71 91.6 58.464 91.6 43C91.6 27.536 78.5625 15 62.48 15C46.3974 15 33.36 27.536 33.36 43C33.36 58.464 46.3974 71 62.48 71Z"
              fill="#212121"
            />
          </svg>
          <Text fontSize={28} fontWeight={"bold"}>
            ไม่มีสินค้าที่วางให้ยืม
          </Text>
          <BackHome />
        </Div>
      )}
    </Container>
  );
};

export default MyItemsScreen;

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
