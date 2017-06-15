var express = require("express");
var request = require("request");
var logger = require("morgan");
var app = express();

var PORT = process.env.PORT || 5000;

app.use(logger("dev"));

app.use(express.static("public"));

//handlebars
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
	defaultLayout: "main"
}));
app.set("view engine", "handlebars");

//routes
var routes = require('./controllers/movie_controller.js');
app.use('/', routes);

app.listen(PORT, function(){
  console.log('App listening on PORT ' + PORT);
})
