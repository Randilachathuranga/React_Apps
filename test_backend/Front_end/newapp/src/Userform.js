import { Button, Grid, Input, Typography } from "@mui/material";
import React, { useState } from "react";

const Userform = (props) => {
    const [id, setId] = useState(0);
    const [name, setName] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleSubmit = () => {
        // Handle form submission logic here
        console.log(`ID: ${id}, Name: ${name}`);
    };

    return (
        <Grid
            container
            spacing={2}
            sx={{
                backgroundColor: "white",
                marginBottom: "30px",
                display: "flex",
            }}
        >
            <Grid item xs={12}>
                <Typography component="h1" sx={{ color: "black" }}>
                    User Form
                </Typography>
            </Grid>

            <Grid item>
                <Typography
                    component="label"
                    htmlFor="id"
                    sx={{
                        color: "black",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    ID
                </Typography>
                <Input
                    type="number"
                    id="id"
                    name="id"
                    value={id}  // Corrected: Use curly braces for state variable
                    onChange={handleIdChange}  // Corrected: Pass function reference for onChange
                    sx={{
                        width: "400px",
                    }}
                />
            </Grid>

            <Grid item>
                <Typography
                    component="label"
                    htmlFor="name"
                    sx={{
                        color: "black",
                        marginRight: "20px",
                        fontSize: "16px",
                        width: "100px",
                        display: "block",
                    }}
                >
                    Name
                </Typography>
                <Input
                    type="text"
                    id="name"
                    name="name"
                    value={name}  // Corrected: Use curly braces for state variable
                    onChange={handleNameChange}  // Corrected: Pass function reference for onChange
                    sx={{
                        width: "400px",
                    }}
                />
            </Grid>

            <Grid item>
                <Button
                    onClick={handleSubmit}
                    sx={{
                        margin: "auto",
                        marginBottom: "20px",
                        backgroundColor: '#00c6e6',
                        color: 'black',
                        marginLeft: "15px",
                        marginTop: '20px',
                        '&:hover': {
                            opacity: '0.7',
                            backgroundColor: '#00c6e6',
                        }
                    }}
                >
                    Submit
                </Button>
            </Grid>
        </Grid>
    );
};

export default Userform;
