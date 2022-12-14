import React, { useState, useEffect } from "react";
import { SafeAreaView, ScrollView } from "react-native";
import { Text, Button, Div } from "react-native-magnus";

type ProductTypes = {
  productName: string;
  productDetail: string;
  productCost: number;
  productUrl: string;
  productImage: string;
  favorite: boolean;
  productCategories: Array<String>;
};

const data: ProductTypes[] = [
  {
    productName: "เก้าอี้",
    productDetail:
      "เก้าอี้คุณภาพชั้นดี ชั้นวางข้างเตียง เปิดให้เช่าแค่รายเดือนนะครับ บริการส่งฟรีรอบรั้วมหาวิทยาลัย ขออนุญาตเก็บค่ามัดจำล่วงหน้า 1 เดือนครับ",
    productCost: 20,
    productUrl: "",
    productImage:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
    favorite: false,
    productCategories: ["เฟอร์นิเจอร์", "testดึงค่า"],
  },
];

const ProductInfoScreen = ({ navigation, route }: any) => {
  const [product, setProduct] = useState<ProductTypes[]>(route.params.product);

  const [fav, setFav] = useState<boolean>(false);

  const setFavorite = (product: ProductTypes) => {
    product.favorite = fav;
  };
  useEffect(() => {
    console.log(
      "🚀 ~ file: ProductDetail.tsx ~ line 31 ~ ProductDetail ~ route.params.product",
      route.params.product
    );
  });
  return (
    <ScrollView>
      <SafeAreaView>
        {product.map((item: ProductTypes, i: number) => {
          return (
            <Div row flex={1} w={"100%"} justifyContent="space-evenly">
              <Div>
                <Div
                  h={"50vh"}
                  w={"100vw"}
                  bgImg={{
                    uri: item.productImage,
                  }}
                ></Div>
                <Div row alignItems="center" my={"lg"} mx={"lg"}>
                  <Div flex={1} w="40vw">
                    <Text fontWeight="bold" fontSize="3xl" mt="sm">
                      {item.productName}
                    </Text>
                    <Text color="gray500" fontSize="md" mt={"xs"} mb={"lg"}>
                      $ {item.productCost} per month
                    </Text>
                  </Div>
                  <Div row alignItems="center">
                    {item.favorite ? (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          setFav(!fav);
                          setFavorite(item);
                        }}
                      >
                        <path
                          d="M11.9895 4.83407C9.86992 2.55782 6.26063 2.37761 3.91179 4.42076C1.54324 6.48105 1.34627 10.0264 3.48417 12.3223L11.2682 20.6815C11.4573 20.8846 11.7224 21 12 21C12.2776 21 12.5427 20.8846 12.7318 20.6815L20.5158 12.3223C22.6537 10.0264 22.4568 6.48105 20.0882 4.42076C17.7394 2.37761 14.1301 2.55782 12.0104 4.83407L12 4.8453L11.9895 4.83407Z"
                          fill="#212121"
                        />
                      </svg>
                    ) : (
                      <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        onClick={() => {
                          setFav(!fav);
                          setFavorite(item);
                        }}
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M3.9118 4.42079C6.26065 2.37764 9.86993 2.55785 11.9896 4.8341L12 4.84533L12.0105 4.8341C14.1301 2.55785 17.7394 2.37764 20.0882 4.42079C22.4568 6.48108 22.6537 10.0264 20.5158 12.3223L12.7318 20.6815C12.5427 20.8846 12.2776 21 12 21C11.7224 21 11.4573 20.8846 11.2682 20.6815L3.48418 12.3223C1.34629 10.0264 1.54326 6.48108 3.9118 4.42079ZM10.5259 6.19706C9.14539 4.71456 6.76459 4.59006 5.22441 5.92979C3.70393 7.25238 3.58563 9.49647 4.94786 10.9594L12 18.5326L19.0522 10.9594C20.4144 9.49647 20.2961 7.25238 18.7756 5.92979C17.2354 4.59006 14.8546 4.71456 13.4741 6.19706L12.7318 6.9942C12.5427 7.19734 12.2776 7.31272 12 7.31272C11.7224 7.31272 11.4573 7.19734 11.2682 6.9942L10.5259 6.19706Z"
                          fill="#212121"
                        />
                      </svg>
                    )}
                  </Div>
                </Div>
                <Div row px={"2xl"} flexWrap="wrap" overflow="scroll">
                  <Text>{item.productDetail}</Text>
                </Div>
                <Div>
                  <Div row mt={"xl"} mb={"sm"} mx={"lg"}>
                    <Text fontWeight="bold" fontSize="xl" color="gray700">
                      แท็กที่เกี่ยวข้อง
                    </Text>
                  </Div>
                  <Div row>{/* {displayCategories} */}</Div>
                </Div>
                <Div row justifyContent="center">
                  <Button
                    mr={10}
                    px="xl"
                    py="lg"
                    w={"85%"}
                    bg="#1F4492"
                    color="#fff"
                    // fontWeight="bold"
                  >
                    ต้องการยืม
                  </Button>
                </Div>
              </Div>
            </Div>
          );
        })}
      </SafeAreaView>
    </ScrollView>
  );
};
export default ProductInfoScreen;
