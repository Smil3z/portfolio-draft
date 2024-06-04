import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";

function Projects() {
  return (
    <Card sx={{ maxWidth: 345 }} variant="outlined">
      <CardActionArea>
        <CardMedia
          component="img"
          height="200"
          image="src/Components/Projects/screenshots/Screenshot 2024-01-24 at 1.10.15 PM.png"
          alt="go fish"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Go Fish
          </Typography>
          <Typography variant="body1" color="text.secondary">
            Tired of catching no fish, let alone bogus fish? Well have no fear ,
            your boy Stephon is here. I would like to introduce you guys to my
            new app called “Go Fish!”. This app is designed to give the user
            journal and tracking capabilities when it comes to catching the
            species of fish around the area. The user will also be able to add a
            description of their fish as well as take a picture of it as well.
            Also, the user will have a history of past fish caught and the
            option to edit or delete the current fish entry.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
      </CardActions>
    </Card>
  );
}

export default Projects;
