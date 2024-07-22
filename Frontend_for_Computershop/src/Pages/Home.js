import { Box } from "@mui/material";
import Header from "../Components/Homecomp";
import Products from "../Components/Products";
import React from "react";
import Valueproposition from "../Components/Valueproposition";

export default function Home({ isLightmode }) {
  return (
    <div>
      <br />
      <br />
      <Box>
        <Header isLightmode={isLightmode} />
      </Box>
      <Valueproposition isLightmode={isLightmode} />
      <br />
      <Products isLightmode={isLightmode} />
    </div>
  );
}
