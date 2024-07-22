import "aos/dist/aos.css";

import { Box, Button, Typography } from "@mui/material";
import React, { createContext, useEffect, useState } from "react";

import AOS from "aos";
import BackgroundImage from "../Assest/1.jpg";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

export const UserName = createContext();

const Header = ({ isLightmode }) => {
  const navigate = useNavigate();
  const [welcomeMessage, setWelcomeMessage] = useState("");
  const [currentTime, setCurrentTime] = useState(new Date());
  const [name, setName] = useState("");

  const navigateTo = (path) => {
    navigate(path);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = () => {
    updateWelcomeMessage();
  };

  const updateWelcomeMessage = () => {
    const hours = new Date().getHours();
    if (hours < 12) {
      setWelcomeMessage(`Good Morning, ${name}!`);
    } else if (hours > 12 && hours < 16) {
      setWelcomeMessage(`Good Afternoon, ${name}!`);
    }else
    {
      setWelcomeMessage(`Good Evening, ${name}!`);

    }
  };

  useEffect(() => {
    document.title = "Welcome to RC Computers";
    console.log("Header component has mounted.");
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <UserName.Provider value={name}>
      <HeaderContainer
        sx={{
          color: isLightmode ? "black" : "white",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", md: "row" },
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: "2rem",
          }}
        >
          <Box
            sx={{
              flex: 1,
              textAlign: "left",
            }}
          >
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", mb: 2, fontFamily: "cursive" }}
            >
              Welcome to RC Computers
            </Typography>

            <Typography sx={{ mb: 2 }}>
              <input
                type="text"
                placeholder="Enter your name"
                style={{
                  backgroundColor: isLightmode ? "" : "black",
                  color: isLightmode ? "black" : "white",
                  borderRadius: "5px",
                  padding: "10px",
                  marginBottom: "10px",
                  border: "none",
                  width: "300px",
                  textAlign: "center",
                }}
                value={name}
                onChange={handleNameChange}
              />
              <br />
              <Button
                onClick={handleSubmit}
                variant="contained"
                sx={{
                  backgroundColor: isLightmode ? "$ADD8E6" : "blue",
                  color: "white",
                  transition: "0.5s",
                  "&:hover": {
                    backgroundColor: "black",
                    
                  },
                }}
              >
                Submit
              </Button>
            </Typography>

            <Typography variant="h4" sx={{ mb: 2 }} dataAos="fade-left">
              {welcomeMessage}
            </Typography>

            <Typography
              variant="h5"
              sx={{
                mb: 2,
                backgroundColor: isLightmode ? "" : "black",
                color: isLightmode ? "black" : "white",
                p: 2,
                borderRadius: "1rem",
              }}
            >
              Current Time: {currentTime.toLocaleTimeString()}
            </Typography>

            <Typography sx={{ mb: 2, maxWidth: "400px" }}>
              Contact us through the button below. We'll respond within 24
              hours!
            </Typography>
            <Button
              onClick={() => navigateTo("/Contact")}
              variant="contained"
              sx={{
                backgroundColor: isLightmode ? "" : "blue",
                color: "white",
                transition: "0.5s",
                "&:hover": {
                  backgroundColor: "black",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>

          <Box sx={{ flex: 1, textAlign: "center", mt: { xs: 2, md: 0 } }}>
            <img
              src={isLightmode ? BackgroundImage : BackgroundImage}
              alt="Background"
              style={{
                maxWidth: "100%",
                height: "auto",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
              }}
            />
          </Box>
        </Box>
      </HeaderContainer>
    </UserName.Provider>
  );
};

const HeaderContainer = styled(Box)`
  margin-top: 10px;
  padding: 30px;
  overflow: hidden;
  max-width: 100%;
`;

export default Header;
