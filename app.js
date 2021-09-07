const express = require("express");
const https = require("https");
const axios = require("axios");
const jsdom = require("jsdom");
const app = express();

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

let selected = "";
let dogImage = "";

app.get("/", function (req, res) {
  const url = "https://dog.ceo/api/breeds/list/all";

  https.get(url, function (response) {
    let breedList = "";

    response.on("data", function (data) {
      breedList += data;
    });

    response.on("end", function () {
      const dogData = JSON.parse(breedList);
      const breedSelect = Object.keys(dogData.message);

      res.render("dog", {
        breedSelect: breedSelect,
        selected: selected,
        dogImage: dogImage,
      });
    });
  });
});

app.get("/:submit", function (req, res) {
  axios
    .get(`https://dog.ceo/api/breed/${selected}/images/random`)
    .then((res) => {
      const dogs = res.data;
      dogImage = dogs.message;
    });
  res.redirect("/");
});

app.post("/", function (req, res) {
  selected = req.body.selected;
  res.redirect("/submit");
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
