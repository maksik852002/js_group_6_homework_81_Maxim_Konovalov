const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const links = require("./app/links");

const app = express();
const port = 8000;

app.use(express.json());
app.use(cors());

const run = async () => {
  await mongoose.connect("mongodb://localhost/linkShortener", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  });

  app.use("/", links);

  app.listen(port, () => {
    console.log(`Server started on ${port} port!`);
  });
};

run().catch(e => {
  console.error(e);
});
