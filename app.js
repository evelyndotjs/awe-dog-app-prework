const express = require("express");
const app = express();
const https = require("https");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

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
      res.render("dog", { breedSelect: breedSelect });
    });
  });
});

app.post("/", function (req, res) {
  const selected = req.body;
  console.log(selected);
});

app.listen(3000, function () {
  console.log("Server is running on port 3000");
});
