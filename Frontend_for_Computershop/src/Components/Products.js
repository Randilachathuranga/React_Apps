import { Box, Container, Typography } from "@mui/material";

import ProductItem from "../Components/Productitem";
import React from "react";
import p1 from "../Assest/p1.png";
import p2 from "../Assest/p2.png";
import p3 from "../Assest/p3.png";
import p4 from "../Assest/p4.png";
import p5 from "../Assest/p5.png";
import p6 from "../Assest/p6.png";

const productData = [
  { image: p3, title: "Megaport PC Gamer", buttonText: "Get" },
  { image: p4, title: "Video game Desktop", buttonText: "Get" },
  { image: p5, title: "Television, game", buttonText: "Get" },
  { image: p6, title: "Gaming computer", buttonText: "Get" },
  { image: p1, title: "Gaming computer", buttonText: "Get" },
  { image: p2, title: "ASUS Computer", buttonText: "Get" },
  { image: p3, title: "Megaport PC Gamer", buttonText: "Get" },
  { image: p4, title: "Video game Desktop", buttonText: "Get" },
  { image: p5, title: "Television, game", buttonText: "Get" },
  { image: p6, title: "Gaming computer", buttonText: "Get" },
  { image: p1, title: "Gaming computer", buttonText: "Get" },
  { image: p2, title: "ASUS Computer", buttonText: "Get" },
  { image: p3, title: "Megaport PC Gamer", buttonText: "Get" },
  { image: p4, title: "Video game Desktop", buttonText: "Get" },
  { image: p5, title: "Television, game", buttonText: "Get" },
  { image: p6, title: "Gaming computer", buttonText: "Get" },
  { image: p2, title: "ASUS Computer", buttonText: "Get" },
  { image: p3, title: "Megaport PC Gamer", buttonText: "Get" },
  { image: p4, title: "Video game Desktop", buttonText: "Get" },
  { image: p5, title: "Television, game", buttonText: "Get" },
  { image: p6, title: "Gaming computer", buttonText: "Get" },
  { image: p1, title: "Gaming computer", buttonText: "Get" },
];

const Products = ({ isLightmode }) => {
  return (
    <div>
      <Container
        sx={{
          color: isLightmode ? "black" : "white",
          margin: "4rem auto",
          backgroundColor: isLightmode ? "$ADD8E6" : "",

        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            overflowX: "auto",
            width: "100%",
            textAlign: "center",
            padding: "4rem 0",
            "&::-webkit-scrollbar": {
              height: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#888",
              borderRadius: "30px",
            },
            "&::-webkit-scrollbar-thumb:hover": {
              background: "",
            },
          }}
        >
          {productData.map((product, index) => (
            <ProductItem
              key={index}
              image={product.image}
              title={product.title}
              buttonText={product.buttonText}
            />
          ))}
        </Box>

        <Typography
          sx={{
            textAlign: "left",
            marginTop: "2rem",
            fontSize: "1rem",
            lineHeight: "1.6",
            backgroundColor: isLightmode ? "#B0C4DE" : "#001f3f",
            padding: "1.5rem",
            borderRadius: "8px",
          }}
        >
          Welcome to our collection of premium gaming computers and accessories.
          At RC Computers, we pride ourselves on offering the highest quality
          products to elevate your gaming experience to the next level. Whether
          you're looking for a powerful gaming PC, a high-performance desktop
          for your video game adventures, or state-of-the-art gaming
          accessories, we have something for everyone. Our products are
          meticulously selected to ensure top performance, reliability, and
          cutting-edge technology, ensuring you stay ahead in the gaming world.
          We believe in providing exceptional customer service, fast and secure
          delivery, and a seamless shopping experience. Explore our wide range
          of products and discover the perfect fit for your gaming needs. At RC
          Computers, we are dedicated to helping you achieve your gaming dreams
          with the best equipment available. Thank you for choosing us as your
          trusted gaming partner. Enjoy your shopping!
        </Typography>
      </Container>
    </div>
  );
};

export default Products;
