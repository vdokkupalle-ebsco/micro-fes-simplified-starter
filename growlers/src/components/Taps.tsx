import React from "react";
import { Box } from "@chakra-ui/react";
import { useSnapshot } from "valtio";
import BeverageCard from "./BeverageCard";
import { MFE_BORDER } from "../constants";
import store from "../store";

const Taps = () => {
  const { filteredTaps } = useSnapshot(store);

  return (
    <Box border={MFE_BORDER}>
      {filteredTaps.map((beverage) => (
        <BeverageCard
          key={[beverage.producerName, beverage.beverageName].join("")}
          beverage={beverage}
        />
      ))}
    </Box>
  );
};

export default Taps;
