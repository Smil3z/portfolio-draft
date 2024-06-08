import { Typography } from "@mui/material";
import React from "react";
import Icon from "@mui/material/Icon";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/system";

function Contact() {
  return (
    <div>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "white", marginTop: "50px" }}
      >
        Let's Connect!
      </Typography>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Icon sx={{ fontSize: 150 }}>
          <LinkedInIcon sx={{ fontSize: 150 }} />
        </Icon>
      </Box>
    </div>
  );
}

export default Contact;
