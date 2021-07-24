import React from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  Box,
} from "@chakra-ui/react";

import { MFE_BORDER } from "../constants";
import { useSnapshot } from "valtio";
import store, { setAlcoholLimit, setSearchText } from "../store";

const Search = () => {
  const { alcoholLimit, searchText } = useSnapshot(store);

  return (
    <Box border={MFE_BORDER}>
      <FormControl id="search">
        <FormLabel>Search</FormLabel>
        <Input
          type="text"
          value={searchText}
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
        />
      </FormControl>

      <FormControl id="alcohol">
        <FormLabel>Alcohol ({alcoholLimit})</FormLabel>
        <Slider
          colorScheme="pink"
          defaultValue={alcoholLimit}
          min={0}
          max={17}
          value={alcoholLimit}
          onChange={(limit) => {
            setAlcoholLimit(limit);
          }}
        >
          <SliderTrack>
            <SliderFilledTrack />
          </SliderTrack>
          <SliderThumb />
        </Slider>
      </FormControl>
    </Box>
  );
};

export default Search;
