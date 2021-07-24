import React from "react";
import { Avatar, Box, Button, Flex, Text } from "@chakra-ui/react";

import { MFE_BORDER } from "../constants";

import { useSnapshot } from "valtio";
import store from "../store";

const Cart = () => {
  const { cart } = useSnapshot(store);

  return (
    <Box border={MFE_BORDER}>
      {cart.map((beverage) => (
        <Box
          borderBottom="1px"
          borderBottomColor="gray.200"
          key={[beverage.producerName, beverage.beverageName].join("")}
        >
          <Flex gridGap="4px" mb={3} mt={3}>
            <Avatar src={beverage.logo}></Avatar>
            <Box>
              <Box>
                <Text fontSize="xl">
                  <strong>{beverage.producerName}</strong>&nbsp;
                  {beverage.beverageName}
                </Text>
              </Box>
              <Box>
                <Text>{beverage.beverageStyle}</Text>
              </Box>
            </Box>
          </Flex>
        </Box>
      ))}
      <Box>
        <Button width="100%" onClick={() => (store.cart = [])}>
          Checkout
        </Button>
      </Box>
    </Box>
  );
};

export default Cart;
