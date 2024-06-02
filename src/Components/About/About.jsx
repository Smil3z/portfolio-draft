import "./About.css";
import React, { useEffect, useRef } from "react";
import me from "../About/me.jpeg";
import { Typed } from "react-typed";
import { Grid, Typography } from "@mui/material";

function About() {
  const typedRef = useRef(null);

  useEffect(() => {
    if (typedRef.current) {
      const options = {
        strings: [
          "Hello everyone and welcome to my portfolio, my name is Stephon and I am a motivated Full Stack Software Engineer proficient in HTML, CSS, and JavaScript programming languages as well as React. My background is in Software Development and Agile Methodologies. I provide a high level of service to clients in custom development for applications and website proprietary customizations.",
        ],
        typeSpeed: 20,
      };
      const typed = new Typed(typedRef.current, options);
      return () => {
        typed.destroy();
      };
    }
  }, []);
  return (
    <div>
      <Grid
        container
        spacing={4}
        padding={25}
        justifyContent="center"
        alignItems="flex-start"
        style={{ height: "100vh" }}
      >
        <Grid
          container
          spacing={4}
          item
          xs={12}
          md={8}
          justifyContent="center"
          alignItems="center"
        >
          <Grid container spacing={15}>
            <Grid item xs={12} md={6}>
              <Typography color={"white"} fontSize={35} align="center">
                About Me
              </Typography>
              <br />
              <br />
              <img
                src={me}
                alt="logo"
                style={{ width: "100%", borderRadius: "200px", top: "50px" }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography color={"white"} fontSize={35}>
                <span ref={typedRef}></span>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
  {
    /*return (
    <div>
      <div className="aboutLayout">
        <h1 className="column"> About Me</h1>
        <img src={me} alt="myself" className="myPic" />

        <br />
        <span ref={typedRef}></span>
      </div>
    </div>
  );*/
  }
}

export default About;
