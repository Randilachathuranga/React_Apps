import "./App.css";

import { Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";

import About from "./Pages/About";
import { Box } from "@mui/material";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "@emotion/react";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: "cursive"
  },
});

function App() {
  const [isLightmode, setIsLightmode] = useState(false);

  const toggleTheme = () => {
    setIsLightmode((prevMode) => !prevMode);
  };

  useEffect(() => {
    if (isLightmode) {
      document.body.classList.add('lightmode');
    } else {
      document.body.classList.remove('lightmode');
    }
  }, [isLightmode]);

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <Navbar isLightmode={isLightmode} toggleTheme={toggleTheme} />
        <Routes>
          <Route path="/" element={<Home isLightmode={isLightmode} />} />
          <Route path="/About" element={<About isLightmode={isLightmode} />} />
          <Route path="/Contact" element={<Contact isLightmode={isLightmode} />} />
        </Routes>
        <br />
        <Footer isLightmode={isLightmode} />
      </Box>
    </ThemeProvider>
  );
}

export default App;
