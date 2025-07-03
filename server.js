"use strict";

const express = require("express");
const app = express();

// store the port number our application will be served on
const port = 8080;

// load our existing .env file into process.env by default
require("dotenv").config();
const cors = require("cors");


const corsOptions = {
  origin: `http://localhost:${port}`
}

app.use(cors(corsOptions));

// specify that we want to serve our static files from a directory in the root of the project named public
app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

async function getRandomImage() {
  const endpoint = `https://api.unsplash.com/photos/random/?client_id=${process.env.CLIENT_ID}`;
  try {
      const response = await fetch(endpoint);
      const returnedData = await response.json();
      const receivedPhotoUrl = returnedData.urls.regular;

      return receivedPhotoUrl;
  } catch (error) {
      console.error(error);
  }
}

// Create a route or endpoint on our back-end with app.use(). The first argument 
// is our route.  The second argument is a callback function that takes the response, 
// sets the status code of 200, then sends the response in JSON format. 
// The response received when hitting this route will be the status code and our API key.
// ---------
// app.use("/api/v1/getRandomImage", (request, response) => {
//   response.status(200).json({
//       status: 200,
//       data: process.env.CLIENT_ID
//   });
// });


// added async to the anonymous function and for our data, 
// we're returning the value of the function we just added
app.use("/api/v1/getRandomImage", async (request, response) => {
  response.status(200).json({
      status: 200,
      data: await getRandomImage(),
  });
});

// app.listen() takes in our port number as its first argument and a callback 
// function as its second argument that logs to the console that the server is running
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
  console.log("Press Ctrl+C to end this process.");
});
