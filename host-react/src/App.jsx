import React from "react";
import ReactDOM from "react-dom";

import "./index.css";

import { load } from "growlers/store";
import Taps from "growlers/Taps";
import Search from "growlers/Search";
import Cart from "growlers/Cart";
import DataComponent from "growlers/DataComponent";
import { ChakraProvider, Container, Heading } from "@chakra-ui/react";

load("hv-taplist");

const App = () => (
  <ChakraProvider>
    <Container maxW="container.lg">
      <Heading
        style={{
          marginTop: "2rem",
          marginBottom: "2rem",
        }}
      >
        Host React
      </Heading>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          gap: "16px",
        }}
      >
        <div>
          <Search />
          <DataComponent>
            {({ filteredTaps }) =>
              filteredTaps.map(({ beverageName }) => beverageName).join(", ")
            }
          </DataComponent>
          <Cart />
        </div>
        <Taps />
      </div>
    </Container>
  </ChakraProvider>
);

ReactDOM.render(<App />, document.getElementById("app"));
