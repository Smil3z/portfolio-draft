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
          marginTop: 10,
        }}
      >
        {/*First Card*/}

        <Card
          sx={{
            maxWidth: 345,
            backgroundColor: "#00ced6",
          }}
          variant="outlined"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
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
          sx={{ maxWidth: 345, backgroundColor: "#00ced6" }}
          variant="outlined"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
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
                To-Do App
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a
                aliquid quibusdam numquam, nostrum inventore nam cupiditate id
                repellat deleniti necessitatibus odio culpa ipsam quis maxime
                optio iure quae asperiores?
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
          sx={{ maxWidth: 345, backgroundColor: "#00ced6" }}
          variant="outlined"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
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
                Six Degrees of Kevin Bacon
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a
                aliquid quibusdam numquam, nostrum inventore nam cupiditate id
                repellat deleniti necessitatibus odio culpa ipsam quis maxime
                optio iure quae asperiores?
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
          sx={{ maxWidth: 345, backgroundColor: "#00ced6" }}
          variant="outlined"
        >
          <CardActionArea>
            <CardMedia
              component="img"
              height="200"
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
                Six Degrees of Kevin Bacon
              </Typography>
              <Typography variant="body1" sx={{ color: "white" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro a
                aliquid quibusdam numquam, nostrum inventore nam cupiditate id
                repellat deleniti necessitatibus odio culpa ipsam quis maxime
                optio iure quae asperiores?
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
