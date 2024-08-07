const express = require('express');
const exampleRouter = require('./routes/example.router');
const { env } = require('process');

const app = express();
//the port in your vite.config must match the port here
const PORT = process.env.PORT || 5000;

// Vite will put all static files into a build folder 
// when deployed to Heroku
app.use(express.static('dist'));
// Required for req.body
app.use(express.json());

//Routes will go here
// must include /api before the /example because in the vite.config, the proxy is "/api"
app.use('/api/example', exampleRouter);


//Start the server
app.listen(PORT, () => {
    console.log('Listening on port:', PORT);
})