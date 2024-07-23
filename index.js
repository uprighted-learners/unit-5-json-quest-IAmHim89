//Copy and paste your code from creating-json to start this project
//express library
const express = require("express");

//cors intialization
const cors = require("cors");

//variable holding the activation of express
const app = express();

//json file
const api = "/json.json";

app.use(express.json());
app.use(cors());
//port server #
const PORT = 3000;

//get response for json file/path
app.get("/", (req, res) => {
  res.send({ api });
});

app.listen(PORT, () => {
  console.log(`Listening on PORT ${PORT}`);
});

// Don't forget to copy your "api" directory and contents as well
