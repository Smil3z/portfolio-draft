import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import Box from "@mui/material/Box";

function Projects() {
  return (
    <div>
      <Typography
        variant="h3"
        sx={{ textAlign: "center", color: "white", marginTop: "50px" }}
      >
        Projects
      </Typography>
      <Box
        sx={{
          display: "flex",
          gap: 2,
          justifyContent: "center",
          marginTop: 3,
        }}
      >
        {/*First Card*/}
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "#00ced6",
            height: 760,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          variant="outlined"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image="src/Components/Projects/screenshots/Screenshot 2024-01-24 at 1.10.15 PM.png"
              alt="go fish"
            />
            <CardContent sx={{ backgroundColor: "black" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Go Fish
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Tired of catching no fish, let alone bogus fish? Well have no
                fear, your boy Stephon is here. I would like to introduce you
                guys to my new app called “Go Fish!”. This app is designed to
                give the user journal and tracking capabilities when it comes to
                catching the species of fish around the area. The user will also
                be able to add a description of their fish as well as take a
                picture of it as well. Also, the user will have a history of
                past fish caught and the option to edit or delete the current
                fish entry.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ backgroundColor: "#00ced6" }}>
            <Button size="small" color="primary" variant="contained">
              Live Demo
            </Button>
            <Button size="small" color="primary" variant="contained">
              Code
            </Button>
          </CardActions>
        </Card>

        {/*Second Card*/}
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "#00ced6",
            height: 690,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          variant="outlined"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image="src/Components/Projects/screenshots/Todo-screenshot.png"
              alt="go fish"
            />
            <CardContent sx={{ backgroundColor: "black" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                To-Do App
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                This app is designed to give the user the ability to add, edit
                and delete tasks. The user will also be able to mark the task as
                complete and have the option to view all completed tasks. The
                user will also have the option to view all tasks, completed
                tasks, and incomplete tasks. The user will also have the option
                to edit or delete the task.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ backgroundColor: "#00ced6" }}>
            <Button size="small" color="primary" variant="contained">
              Live Demo
            </Button>
            <Button size="small" color="primary" variant="contained">
              Code
            </Button>
          </CardActions>
        </Card>

        {/*Third Card*/}
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "#00ced6",
            height: 760,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          variant="outlined"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="350"
              image="src/Components/Projects/screenshots/six-degrees.png"
              alt="six degrees of kevin bacon"
            />
            <CardContent sx={{ backgroundColor: "black" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Six Degrees of Kevin Bacon
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                The Sixth Degree is a digital version of the game 'The Six
                Degrees of Kevin Bacon'. The app allows two users to play the
                game against one another and has a scoring system to identify
                winners and losers of a challenge. The app is built with React,
                Redux, Node.js, PostgreSQL, and the Movie Database Project's
                API. Users save scripts (cards to play against one another) and
                challenge one another to see who can create the closest links
                between actors and movies.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ backgroundColor: "#00ced6" }}>
            <Button size="small" color="primary" variant="contained">
              Live Demo
            </Button>
            <Button size="small" color="primary" variant="contained">
              Code
            </Button>
          </CardActions>
        </Card>

        {/*Fourth Card*/}
        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "#00ced6",
            height: 630,
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
          variant="outlined"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="340"
              image="src/Components/Projects/screenshots/giphy1.png"
              alt="go fish"
            />
            <CardContent sx={{ backgroundColor: "black" }}>
              <Typography
                gutterBottom
                variant="h5"
                component="div"
                sx={{ color: "white" }}
              >
                Giphy App
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Think "Giphy" but with a twist. This app is designed to give the
                user the ability to search for gifs based on a keyword. The user
                will also have the option to favorite a gif and view all
                favorited gifs. The user will also have the option to view all
                gifs and delete a gif from the favorites list.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions sx={{ backgroundColor: "#00ced6" }}>
            <Button size="small" color="primary" variant="contained">
              Live Demo
            </Button>
            <Button size="small" color="primary" variant="contained">
              Code
            </Button>
          </CardActions>
        </Card>
      </Box>
    </div>
  );
}

export default Projects;
