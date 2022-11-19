import { Text, Button, Icon, Div, Image } from "react-native-magnus";
import React from "react";

type Props = { productName: string, productDetail: string, productUrl: string }

const HomeProduct = ({ productName, productDetail, productUrl }: Props) => {
  return (
    <>
      <Div row>
        <Div m="sm">
          <Div>
            <Div
              rounded="xl"
              h={150}
              bgImg={{
                uri:
                "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
              }}
            >
              {/* <Div
                bg="orange500"
                rounded="sm"
                row
                flexWrap="wrap"
                px="md" pb="xs"
                m="lg"
                alignSelf="flex-start"
              >
                <Text color="white" fontSize="sm">
                  new
                </Text>
              </Div> */}
            </Div>
            <Div row alignItems="center">
            <Div flex={1} w="40vw">
              <Text fontWeight="bold" fontSize="xl" mt="sm">
                { productName }
              </Text>
              <Text color="gray500" fontSize="sm">
              { productDetail }
              </Text>
            </Div>
            <Div row alignItems="center">
              <Icon name="heart" color="gray500" fontFamily="Feather"/> {/* ยังไม่ได้ทำที่คลิกละใส่ */}
            </Div>
          </Div>
          </Div>
        </Div>
      </Div>
    </>
  );
};

export default HomeProduct;

{/* <Div row>
        <Div m="sm">
          <Div>
            <Div
              rounded="xl"
              h={150}
              bgImg={{
                uri:
                  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80",
              }}
            >
              {/* <Div
                bg="orange500"
                rounded="sm"
                row
                flexWrap="wrap"
                px="md" pb="xs"
                m="lg"
                alignSelf="flex-start"
              >
                <Text color="white" fontSize="sm">
                  new
                </Text>
              </Div> */}
    //         </Div>
    //         <Div row alignItems="center">
    //         <Div flex={1} w="40vw">
    //           <Text fontWeight="bold" fontSize="xl" mt="sm">
    //             product name babababa { text }
    //           </Text>
    //           <Text color="gray500" fontSize="sm">
    //             description bababababbbabababababababba
    //           </Text>
    //         </Div>
    //         <Div row alignItems="center">
    //           <Icon name="heart" color="gray500" fontFamily="Feather"/> {/* ยังไม่ได้ทำที่คลิกละใส่ */}
    //         </Div>
    //       </Div>
    //       </Div>
    //     </Div>
    //   </Div> */}