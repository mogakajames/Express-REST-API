const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config");
const postsRoute = require("./routes/posts");
const bodyParser = require('body-parser');


const app = express();

//middlewares in express - functions that execute when routes are hit
app.use(bodyParser.json);
app.use("/posts", postsRoute);

//Routes
app.get("/", (req, res) => {
  res.send("Welcome Home Jay");
});

//connect to mongodb database
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true }, () =>
  console.log("Connected to DB!")
);

app.listen(3000);
