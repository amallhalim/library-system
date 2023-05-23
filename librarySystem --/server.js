const express = require("express");
const { mongoose } = require("mongoose");
const bodyParser = require("body-parser");

const adminRouter = require("./routes/adminRouter")
const bookRoute = require("./routes/bookRoute")
const memberRoute = require("./routes/memberRoute")
const authinticaton= require("./routes/authonticationRouter")

require("dotenv").config(); //to load environment variables from an .env file.

const morgan = require("morgan");

const cors = require("cors");

const server = express();


//handel error view in command
server.use(morgan("short"));
// Use the CORS middleware to allow cross-origin requests
server.use(cors());
// Calling the express.json() method for parsing
server.use(express.json());
server.use(bodyParser.json());
let port=process.env.PORT || 8080;

//open connection in database localhost 27017======================
mongoose.connect("mongodb://127.0.0.1:27017/librarySystem")
  .then(() => {
    console.log(" start connected** ");
    server.listen(port, () => {

      console.log(" express listing.. .. .. .. .. ... ..");
    });
    console.log(" DB are connected    ***** ");
  })
  .catch((error) => {
    console.log("DB proplem# # # # #" + error);
  });
  // ==================================================
  server.use(authinticaton);
  server.use(bookRoute);
  server.use(memberRoute);
  server.use(adminRouter);
  
server.use("/", function (req, res) {
  res.send("not ------> found ").status(404);
});

server.use((error, req, res, next) => {
  res.status(500).json({ error: error + "" });
});
