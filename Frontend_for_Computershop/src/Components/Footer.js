import { Box, Typography } from "@mui/material";

import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import React from "react";
import YouTubeIcon from "@mui/icons-material/YouTube";
import styled from "styled-components";

const FooterContainer = styled.footer`
  text-align: center;
  padding: 1rem;
  background-color: ${({ isLightmode }) => (isLightmode ? "#ADD8E6" : "#001f3f")};
  color: ${({ isLightmode }) => (isLightmode ? "black" : "white")};
  font-family: Montserrat, sans-serif;
  line-height: 2rem;
`;

const FooterLink = styled.a`
  color: ${({ isLightmode }) => (isLightmode ? "black" : "#fff")};
  margin-right: 1rem;
  transition: color 0.3s;
  &:hover {
    color: blue;
  }
`;

const InstagramIconStyled = styled(InstagramIcon)`
  color: inherit;
`;

const FacebookIconStyled = styled(FacebookIcon)`
  color: inherit;
`;

const LinkedInIconStyled = styled(LinkedInIcon)`
  color: inherit;
`;

const YouTubeIconStyled = styled(YouTubeIcon)`
  color: inherit;
`;

const Footer = ({ isLightmode}) => {

  return (
    <FooterContainer isLightmode={isLightmode}>
      <Typography
        variant="h6"
        sx={{ fontWeight: "bold", color: isLightmode ? "black" : "white" }}
      >
        RC_Computers
      </Typography>
      <Typography>
        &copy; {new Date().getFullYear()} RC_Computers. All rights reserved.
      </Typography>
      <Typography>123 Main Street, City, State, Country</Typography>
      <Typography>+94-756287100</Typography>
      <Typography>info@example.com</Typography>

      <Box sx={{ marginTop: "1rem" }}>
        <FooterLink
          href="https://www.instagram.com/"
          target="_blank"
          rel="noopener noreferrer"
          isLightmode={isLightmode}
        >
          <InstagramIconStyled fontSize="large" />
        </FooterLink>
        <FooterLink
          href="https://www.facebook.com/"
          target="_blank"
          rel="noopener noreferrer"
          isLightmode={isLightmode}
        >
          <FacebookIconStyled fontSize="large" />
        </FooterLink>
        <FooterLink
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noopener noreferrer"
          isLightmode={isLightmode}
        >
          <LinkedInIconStyled fontSize="large" />
        </FooterLink>
        <FooterLink
          href="https://www.youtube.com/"
          target="_blank"
          rel="noopener noreferrer"
          isLightmode={isLightmode}
        >
          <YouTubeIconStyled fontSize="large" />
        </FooterLink>
      </Box>

      <Typography sx={{ marginTop: "1rem" }}>Powered by RC_Computers</Typography>
    </FooterContainer>
  );
};

export default Footer;
