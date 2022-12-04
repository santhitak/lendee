import React, { useState } from "react";
import { StyleSheet } from "react-native";
import { Text, Div, Button, Image } from "react-native-magnus";
import { NoItems, Container } from "../components";
import {
  FavoriteProductTypes,
  ProductImageTypes,
  ProductTypes,
} from "../constants";

const lendData = [
  {
    id: 2,
    userId: 1,
    productId: 14,
  },
];

const itemData = [
  {
    id: 1,
    createdAt: "2022-12-03T03:48:24.048Z",
    email: "member@kmitl.ac.th",
    name: "Danupa Tangjaidee",
    phone: "0815467894",
    product: [
      {
        id: 4,
        createdAt: "2022-12-03T13:23:47.660Z",
        authorId: 1,
        productName: "EKTORP Sofa",
        productDetail:
          "เอียคทอร์ปโซฟาจากอิเกีย ให้ยืมเช่าเพื่อถ่ายงานครับ สภาพดี\r\n",
        productCost: 899,
        productQuantity: 2,
        productUrl: "",
        isFavorite: true,
      },
      {
        id: 13,
        createdAt: "2022-12-03T13:23:47.834Z",
        authorId: 1,
        productName: "ALSTERN อัลสเติร์น",
        productDetail:
          "ALSTERN อัลสเติร์น\r\nพรมผ้าเทอร์รีผืนนี้จะกลายเป็นขวัญใจคุณได้ไม่ยาก ด้วยความที่เข้ากันกับผ้าเช็ดตัวหลายรุ่นของเราได้ดี\r\n159\r\n",
        productCost: 159,
        productQuantity: 2,
        productUrl: "",
        isFavorite: false,
      },
      {
        id: 14,
        createdAt: "2022-12-03T13:23:48.001Z",
        authorId: 1,
        productName: "RIBBA ริบบ้า",
        productDetail:
          "RIBBA ริบบ้า\r\nให้คุณเนรมิตผนังห้องเป็นแกลเลอรีภาพขนาดใหญ่ได้สบาย แผ่นปิดหน้ากรอบรูปทำจากพลาสติกใส จึงใช้งานได้อย่างปลอดภัย\r\n",
        productCost: 99,
        productQuantity: 3,
        productUrl: "",
        isFavorite: false,
      },
    ],
  },
];

const imgData = [
  {
    id: 1,
    img: "https://www.ikea.com/th/th/images/products/ektorp-3-seat-sofa-totebo-light-beige__0818572_pe774494_s5.jpg",
    productId: 4,
  },
  {
    id: 2,
    img: "https://www.ikea.com/th/th/images/products/ektorp-3-seat-sofa-totebo-light-beige__0818572_pe774494_s5.jpg",
    productId: 14,
  },
  {
    id: 4,
    img: "https://www.ikea.com/th/th/images/products/alstern-bath-mat-dark-grey__1092864_pe863108_s5.jpg",
    productId: 13,
  },
  {
    id: 9,
    img: "https://cdn.homepro.co.th/ART_IMAGE/11/076/1107603/447x447/10072021_1107603$Imagec1.jpg",
    productId: 32,
  },
  {
    id: 11,
    img: "https://img.kaidee.com/prd/20190707/348648729/b/e9cd1142-e862-4eae-9fc7-c7cedb5d0087.jpg",
    productId: 33,
  },
  {
    id: 12,
    img: "https://static.mercdn.net/item/detail/orig/photos/m83023938807_1.jpg",
    productId: 34,
  },
];

const MyItemsScreen = ({ navigation }: any) => {
  const [item, setItem] = useState(itemData);
  const [img, setImg] = useState<ProductImageTypes[]>(imgData);
  const [lend, setLend] = useState<FavoriteProductTypes[]>(lendData);

  // useState(() => {
  //   fetch("http://localhost:3000/products/1")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const itemArr = [];
  //       itemArr.push(json);
  //       setItem(itemArr);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // });

  // useState(() => {
  //   fetch("http://localhost:3000/productImages")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setImg(json);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // });

  // useState(() => {
  //   fetch("http://localhost:3000/lend/1")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       setLend(json);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // });

  return (
    <Container>
      <Text fontSize={28} fontWeight={"bold"}>
        สินค้าที่วางให้ยืม
      </Text>
      {item ? (
        <>
          {item.map((item: any, i: number) => {
            return (
              <Div key={i}>
                {item.product.map((item: ProductTypes, i: number) => {
                  if (item.authorId === 1) {
                    return (
                      <Div key={i}>
                        {lend.map((data: FavoriteProductTypes, i: number) => {
                          return (
                            <>
                              <Div
                                row
                                alignItems="center"
                                justifyContent="flex-start"
                                key={i}
                              >
                                {img.map(
                                  (itemImage: ProductImageTypes, i: number) => {
                                    if (itemImage.productId === item.id) {
                                      return (
                                        <Div
                                          h={80}
                                          w={80}
                                          rounded={20}
                                          bgImg={{
                                            uri: itemImage.img,
                                          }}
                                          bgMode="cover"
                                          key={i}
                                        />
                                      );
                                    }
                                  }
                                )}
                                <Div my={15} ml={20}>
                                  <Text my={5} fontWeight="bold">
                                    {item.productName}
                                  </Text>
                                  <Button my={5} bg="#1F4492" color="white">
                                    ดูรายละเอียด
                                  </Button>
                                </Div>
                              </Div>
                              <Text color="#9e9e9e">
                                สถานะ:{" "}
                                {data.productId === item.id
                                  ? "กำลังยืม"
                                  : "ว่าง"}
                              </Text>
                            </>
                          );
                        })}
                      </Div>
                    );
                  }
                })}
              </Div>
            );
          })}
        </>
      ) : (
        <Div w="100%" minH={"70vh"} justifyContent="center" alignItems="center">
          <NoItems />
          <Button
            w={"100%"}
            bg={"#FFB54D"}
            color={"#212121"}
            onPress={() => {
              navigation.navigate("Home");
            }}
            position={"absolute"}
            bottom={10}
          >
            กลับหน้าหลัก
          </Button>
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
