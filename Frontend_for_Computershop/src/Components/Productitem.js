import { Box, Button, Typography } from "@mui/material";

import React from "react";

const ProductItem = ({ image, title, buttonText }) => {
  return (
    <Box
      sx={{
        transition: "0.2s",
        alignItems: "center",
        marginRight: "1rem",
        "&:hover": {
          transform: "scale(1.1)",
        },
      }}
    >
      <img
        src={image}
        alt={title}
        style={{ width: "13rem", height: "10rem", borderRadius: "2em" }}
      />
      <Typography
        sx={{
          fontFamily: "Montserrat",
          fontSize: "1.2rem",
          fontWeight: "bold",
          textAlign: "center",
          margin: "1rem 0",
        }}
      >
        {title}
      </Typography>
      <Button
        sx={{
          backgroundColor: "blue",
          color: "white",
          transition: "0.5s",
          "&:hover": {
            backgroundColor: "black",
          },
        }}
      >
        {buttonText}
      </Button>
    </Box>
  );
};

export default ProductItem;
