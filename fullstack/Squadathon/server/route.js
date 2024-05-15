const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const data = require("./model");

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  data
    .find({})
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
});

app.post("/", (request, response) => {
  const { error, value } = data.validate(request.body);
  if (error) {
    return response.send(error.message);
  } else {
    data.create(request.body)
      .then((users) => {
        response.status(201).json(users);
      })
      .catch((err) => {
        response.status(400).json(err);
      });
  }
});
