import { Box, Typography } from "@mui/material";

import React from "react";

const Valueproposition = ({ isLightmode }) => {
  return (
    <div>
      <Box
        sx={{
          padding: "30px",
          overflow: "hidden",
          maxWidth: "100%",
          color: isLightmode ? "black" : "white",
        }}
      >
        <Typography
          sx={{
            fontSize: "3rem",
            fontWeight: "bold",
            textAlign: "center",
            marginTop: "none",
            "@media (max-width: 442px)": {
              fontSize: "1.5rem",
            },
          }}
        >
          Our Value propositions
        </Typography>

        <Box
          sx={{
            marginTop: "1rem",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            textAlign: "center",
            border: "2px solid #4169E1",
            backgroundColor: isLightmode ? "#ADD8E6" : "#001f3f",
            boxShadow: "0 2px 4px 0 rgba(0,0,0,0.1)",
            padding: "30px",
          }}
        >
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              margin: "10px",
              color: isLightmode ? "black" : "white",
            }}
          >
            High quality product
          </Typography>
          <Typography
            sx={{
              margin: "10px",
              color: isLightmode ? "black" : "white",
            }}
          >
            Experience top-tier performance with our meticulously curated
            selection of computers, peripherals, and accessories. Each product
            is chosen for its reliability and cutting-edge technology to meet
            your computing needs.
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              margin: "10px",
              color: isLightmode ? "black" : "white",
            }}
          >
            Exceptional Customer Service
          </Typography>
          <Typography
            sx={{
              margin: "10px",
              color: isLightmode ? "black" : "white",
            }}
          >
            Our knowledgeable team is dedicated to providing expert advice and
            personalized support. From product inquiries to technical
            assistance, we're here to ensure your shopping experience is smooth
            and satisfying.{" "}
          </Typography>
          <Typography
            variant="h5"
            sx={{
              fontWeight: "bold",
              margin: "10px",
              color: isLightmode ? "black" : "white",
            }}
          >
            Fast and Sequre Delivery
          </Typography>
          <Typography
            sx={{
              margin: "10px",
              color: isLightmode ? "black" : "white",
            }}
          >
            Enjoy peace of mind with our efficient delivery service. Your order
            is handled with care and delivered swiftly to your doorstep,
            ensuring your new tech arrives promptly and securely.{" "}
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Valueproposition;
