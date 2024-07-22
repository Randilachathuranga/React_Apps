import "aos/dist/aos.css";

import { Box, Typography } from "@mui/material";
import React, { useEffect } from "react";

import AOS from "aos";
import img1 from "../Assest/member1.jpeg";
import img2 from "../Assest/member2.jpeg";
import img3 from "../Assest/member3.jpeg";
import img4 from "../Assest/member4.jpeg";

const AboutUs = ({ isLightmode }) => {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <Box
      sx={{
        minHeight: "500px",
        padding: "2rem",
        color: isLightmode ? "black" : "white",
        overflowX: "hidden", // Ensure no horizontal overflow
      }}
    >
      <Typography
        id="About"
        variant="h2"
        sx={{
          fontFamily: "cursive",
          fontWeight: "bold",
          textAlign: "center",
          margin: "2rem 0",
          color: isLightmode ? "black" : "white", // Ensure text color contrasts with background
        }}
      >
        About Us
      </Typography>

      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "2rem",
          padding: "0 1rem", // Add padding to prevent content from touching the edges
        }}
      >
        <AboutCard
          title="Company History"
          isLightmode={isLightmode}
          dataAos="fade-right"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum tortor eu massa fringilla, vel volutpat purus luctus.
        </AboutCard>

        <AboutCard
          title="Our Mission"
          isLightmode={isLightmode}
          dataAos="fade-left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum tortor eu massa fringilla, vel volutpat purus luctus.
        </AboutCard>

        <AboutCard
          title="Our Team"
          isLightmode={isLightmode}
          dataAos="fade-right"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum tortor eu massa fringilla, vel volutpat purus luctus.
        </AboutCard>

        <Typography
          variant="h4"
          sx={{ width: "100%", textAlign: "center", margin: "1rem 0" }}
        >
          Our Team
        </Typography>
        <hr
          style={{
            width: "100%",
            marginBottom: "2rem",
            borderColor: isLightmode ? "black" : "white",
          }}
        />

        <Box
          component="img"
          src={img1}
          alt="Member 1"
          sx={{
            width: { xs: "100%", sm: "45%", md: "22%" },
            height: "auto",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Box
          component="img"
          src={img2}
          alt="Member 2"
          sx={{
            width: { xs: "100%", sm: "45%", md: "22%" },
            height: "auto",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Box
          component="img"
          src={img3}
          alt="Member 3"
          sx={{
            width: { xs: "100%", sm: "45%", md: "22%" },
            height: "auto",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />
        <Box
          component="img"
          src={img4}
          alt="Member 4"
          sx={{
            width: { xs: "100%", sm: "45%", md: "22%" },
            height: "auto",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        />

        <AboutCard
          title="Our Values"
          isLightmode={isLightmode}
          dataAos="fade-left"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
          condimentum tortor eu massa fringilla, vel volutpat purus luctus.
        </AboutCard>

        <AboutCard
          title="Our Branches"
          isLightmode={isLightmode}
          dataAos="fade-right"
        >
          We have branches in multiple cities across the country to serve our
          customers better. Our major branches are located in:
          <ul>
            <li>Galle</li>
            <li>Colombo</li>
            <li>Matara</li>
            <li>Jaffna</li>
            <li>Nugegoda</li>
          </ul>
          Each branch is equipped with state-of-the-art facilities and a
          dedicated team to assist you with all your needs.
        </AboutCard>
      </Box>
    </Box>
  );
};

const AboutCard = ({ title, children, isLightmode, dataAos }) => (
  <Box
    data-aos={dataAos}
    sx={{
      width: "100%", // Ensure the box takes full width on small screens
      maxWidth: "300px", // Limit the max width
      borderRadius: "1rem",
      padding: "1.5rem",
      boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
      textAlign: "center",
      marginBottom: "2rem",
      flexGrow: 1,
      backgroundColor: isLightmode ? "#ADD8E6" : "#001f3f",
      border: "2px solid #4169E1",
    }}
  >
    <Typography
      variant="h4"
      sx={{
        fontWeight: "bold",
        marginBottom: "1rem",
        color: isLightmode ? "black" : "white",
      }}
    >
      {title}
    </Typography>
    <Typography variant="body1" sx={{ color: isLightmode ? "black" : "white" }}>
      {children}
    </Typography>
  </Box>
);

export default AboutUs;
