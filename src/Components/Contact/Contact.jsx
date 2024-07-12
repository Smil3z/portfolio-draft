import React from "react";
import { Box, Typography } from "@mui/material";
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
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          // Make the box take the full height of the viewport
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
          }}
        >
          <LinkedInIcon
            sx={{ fontSize: 150, margin: "0 10px" }}
            onClick={() =>
              (window.location.href =
                "https://www.linkedin.com/in/stephontonge/")
            }
          />
          <GitHubIcon
            sx={{ fontSize: 150, margin: "0 10px" }}
            onClick={() => (window.location.href = "https://github.com/Smil3z")}
          />
          <EmailIcon
            sx={{ fontSize: 150, margin: "0 10px" }}
            onClick={() =>
              (window.location.href =
                "mailto:stephon.tonge75@gmail.com?subject=Hello!&body=Hi Smil3z!")
            }
          />
        </Box>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", color: "white", marginBottom: "20px" }}
        >
          Click on Icons to continue!
        </Typography>
      </Box>
    </Box>
  );
}

export default Contact;
