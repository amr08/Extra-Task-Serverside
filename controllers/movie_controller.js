var express = require("express");
var router = express.Router();
var request = require("request");

var apiKey = "9084eae9f770e006ebcba95dbd474e28";

router.get("/", function(req,res) {
    request("https://api.themoviedb.org/3/movie/now_playing?api_key=" + apiKey, function(error, response, html){
        var results = JSON.parse(response.body);
        res.render("index", results);
    });
});

module.exports = router;