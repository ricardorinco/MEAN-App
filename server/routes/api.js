const express = require("express");
const axios = require("axios");
const router = express.Router();

const urlAPI = "https://jsonplaceholder.typicode.com";

router.get("/", (req, res) => {
  res.send("Api rodando =D");
});

router.get("/posts", (req, res) => {
  axios.get(`${urlAPI}/posts`)
    .then(posts => {
      res.status(200).json(posts.data);
    })
    .catch(error => {
      res.status(500).send(error);
    });
});

module.exports = router;
