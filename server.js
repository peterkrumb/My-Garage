const express = require('express');
const app = express();
const path = require('path');
const mysql = require('mysql');

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");
//<--Requires routes directory containing the controller-->
//var routes = require("./controllers/songs-controller.js");

//app.use(routes);

app.listen(process.env.PORT || 8080, function() {
    console.log('Your node js server is running');
});