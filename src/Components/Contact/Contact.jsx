import React from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";

function Contact() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        backgroundColor: "black",
      }}
    >
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "white", marginBottom: "20px" }}
      >
        Let's Connect!
      </Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          color: "white",
          marginBottom: "15px",
        }}
      >
        <LinkedInIcon sx={{ fontSize: 150 }} />
        <GitHubIcon sx={{ fontSize: 150 }} />
        <EmailIcon sx={{ fontSize: 150 }} />
      </Box>
      <Box
        component="form"
        noValidate
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2, // Adds space between the elements
          alignItems: "center", // Center the elements
        }}
      >
        <TextField
          hiddenLabel
          id="filled-hidden-label-small-email"
          defaultValue="Email"
          variant="filled"
          size="small"
          inputProps={{ style: { color: "black", backgroundColor: "white" } }}
          sx={{ width: "370px" }} // Adjusting the width
        />
        <TextField
          hiddenLabel
          id="filled-hidden-label-small-message"
          defaultValue="Message"
          variant="filled"
          size="large"
          multiline
          rows={4} // Adjust the number of rows as needed
          inputProps={{ style: { color: "black", backgroundColor: "white" } }}
          sx={{ width: "380px" }} // Adjust the width as needed
        />
        <Button variant="contained" sx={{ width: "300px" }}>
          Submit
        </Button>
      </Box>
    </Box>
  );
}

export default Contact;
