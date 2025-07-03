"use strict";

const express = require("express");
const app = express();

// store the port number our application will be served on
const port = 8080;

// specify that we want to serve our static files from a directory in the root of the project named public
app.use(express.static("./public"));

app.use(express.json());
app.use(express.urlencoded({extended: false}));

// app.listen() takes in our port number as its first argument and a callback 
// function as its second argument that logs to the console that the server is running
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
  console.log("Press Ctrl+C to end this process.");
});
