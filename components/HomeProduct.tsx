import { Text, Div, Button } from "react-native-magnus";
import React, { useState, useEffect } from "react";
import { ProductTypes, productMockData } from "../constants";
import { TouchableOpacity } from "react-native";
import ProductDetail from "../screens/ProductDetail";

const HomeProduct = ({ navigation, props }: any) => {
  const [product, setProduct] = useState<ProductTypes[]>(productMockData);
  const [fav, setFav] = useState<boolean>(false);

  const setFavorite = (product: ProductTypes) => {
    product.favorite = fav;
  };

  const navigateToProductPage = (item: ProductTypes) => {
    navigation.navigate("ProductDetail", { product: item });
    // ส่งค่า ProductTypes กับ number ไปให้ ProductDetail
  };
  // useEffect(() => {
  //   console.log(
  //     "🚀 ~ file: ProductDetail.tsx ~ line 35 ~ ProductDetail ~ route.params.product",
  //     product[0]
  //   );
  // });

  return (
    <>
      <Div flex={1}>
        {product.map((item: ProductTypes, i: number) => {
          return (
            <Div
              my={20}
              w={"100%"}
              px={20}
              justifyContent="space-evenly"
              key={i}
            >
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigateToProductPage(item);
                }}
              >
                <Div
                  rounded="xl"
                  h={150}
                  bgImg={{
                    uri: item.productImage,
                  }}
                ></Div>
                <Div row alignItems="center">
                  <Div flex={1}>
                    <Text fontWeight="bold" fontSize="xl" mt="sm">
                      {item.productName}
                    </Text>
                    <Text
                      color="gray500"
                      fontSize="sm"
                      pr={10}
                      ellipsizeMode={"tail"}
                    >
                      {item.productDetail}
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
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M3.9118 4.42079C6.26065 2.37764 9.86993 2.55785 11.9896 4.8341L12 4.84533L12.0105 4.8341C14.1301 2.55785 17.7394 2.37764 20.0882 4.42079C22.4568 6.48108 22.6537 10.0264 20.5158 12.3223L12.7318 20.6815C12.5427 20.8846 12.2776 21 12 21C11.7224 21 11.4573 20.8846 11.2682 20.6815L3.48418 12.3223C1.34629 10.0264 1.54326 6.48108 3.9118 4.42079ZM10.5259 6.19706C9.14539 4.71456 6.76459 4.59006 5.22441 5.92979C3.70393 7.25238 3.58563 9.49647 4.94786 10.9594L12 18.5326L19.0522 10.9594C20.4144 9.49647 20.2961 7.25238 18.7756 5.92979C17.2354 4.59006 14.8546 4.71456 13.4741 6.19706L12.7318 6.9942C12.5427 7.19734 12.2776 7.31272 12 7.31272C11.7224 7.31272 11.4573 7.19734 11.2682 6.9942L10.5259 6.19706Z"
                          fill="#212121"
                        />
                      </svg>
                    )}
                  </Div>
                </Div>
              </TouchableOpacity>
            </Div>
          );
        })}
      </Div>
    </>
  );
};

export default HomeProduct;
