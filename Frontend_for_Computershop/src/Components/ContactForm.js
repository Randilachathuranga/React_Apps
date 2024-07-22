import { Box, Button, Container, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";

import img from "../Assest/contact.jpg";

const ContactForm = ({ isLightmode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Load form data from local storage on component mount
  useEffect(() => {
    const savedFormData = localStorage.getItem("contactFormData");
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  // Save form data to local storage whenever it changes
  useEffect(() => {
    localStorage.setItem("contactFormData", JSON.stringify(formData));
  }, [formData]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      errors.name = "Name is required";
      isValid = false;
    }

    if (!formData.email.trim()) {
      errors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Email address is invalid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      errors.message = "Message is required";
      isValid = false;
    }

    setFormErrors(errors);
    return isValid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Form submitted successfully:", formData);
      setFormData({
        name: "",
        email: "",
        message: "",
      });
      alert("Form submitted successfully!");
      localStorage.removeItem("contactFormData");
    } else {
      console.error("Form validation failed");
    }
  };

  return (
    <Container
      id="Contact"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "2rem",
        color: isLightmode ? "black" : "white",
        minHeight: "100vh",
      }}
    >
      <Typography
        sx={{
          fontSize: "4rem",
          fontWeight: "bold",
          textAlign: "center",
          margin: "2rem 0",
          fontFamily: "cursive",
          "@media (max-width: 442px)": {
            fontSize: "4rem",
            margin: "1rem 0",
            fontFamily: "cursive"

          },
        }}
      >
        Contact Us
      </Typography>
      <Typography
        variant="body1"
        sx={{
          maxWidth: "30rem",
          textAlign: "center",
          marginBottom: "2rem",
          color: isLightmode ? "black" : "white",
          fontFamily: "Montserrat",
          fontSize: "1.5rem",
          margin: "3rem auto",
          fontWeight: "bold",

          "@media (max-width: 442px)": {
            fontSize: "1rem",
            margin: "1rem auto",
          },
        }}
      >
        Have a question or feedback? Fill out the form below and we'll get back
        to you as soon as possible!
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          justifyContent: "center",
          gap: "2rem",
        }}
      >
        <Box
          component="img"
          src={img}
          alt="Contact"
          sx={{
            width: { xs: "100%", md: "50%" },
            height: "auto",
            borderRadius: "0.5rem",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
          }}
        />

        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{
            display: "flex",
            flexDirection: "column",
            width: { xs: "100%", md: "50%" },
            maxWidth: "30rem",
            padding: "2rem",
            border: "1px solid #1E90FF",
            borderRadius: "0.5rem",
            color: isLightmode ? "black" : "white",
            backgroundColor: isLightmode ? "white" : "#001f3f",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.9)",
          }}
        >
          <TextField
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            fullWidth
            required
            error={!!formErrors.name}
            helperText={formErrors.name}
            sx={{
              marginBottom: "1rem",
            }}
            InputLabelProps={{
              style: { color: isLightmode ? "black" : "white" },
            }}
            InputProps={{
              style: { color: isLightmode ? "black" : "white" },
            }}
          />

          <TextField
            label="Email"
            name="email"
            type="email"
            value={formData.email}
            onChange={handleInputChange}
            fullWidth
            required
            error={!!formErrors.email}
            helperText={formErrors.email}
            sx={{
              marginBottom: "1rem",
            }}
            InputLabelProps={{
              style: { color: isLightmode ? "black" : "white" },
            }}
            InputProps={{
              style: { color: isLightmode ? "black" : "white" },
            }}
          />

          <TextField
            label="Message"
            name="message"
            multiline
            rows={4}
            value={formData.message}
            onChange={handleInputChange}
            fullWidth
            required
            error={!!formErrors.message}
            helperText={formErrors.message}
            sx={{
              marginBottom: "1rem",
            }}
            InputLabelProps={{
              style: { color: isLightmode ? "black" : "white" },
            }}
            InputProps={{
              style: { color: isLightmode ? "black" : "white" },
            }}
          />

          <Button
            type="submit"
            variant="contained"
            sx={{
              backgroundColor: isLightmode ? "" : "blue",
              color: "white",
              "&:hover": {
                transition: "0.3s",
                backgroundColor: "#0000FF",
                transform: "scale(1.05)",
              },
            }}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default ContactForm;
